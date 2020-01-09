import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect'

import Homepage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up pages/sign-in-and-sign-up.component";
import CheckoutPage from "./page/checkout/checkout.component"
import { auth, checkProfile } from "../src/firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser} from './redux/user/user.selector'

class App extends React.Component {

  unSubcribeOnAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unSubcribeOnAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await checkProfile(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubcribeOnAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
