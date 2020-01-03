import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./page/homepage/homepage.component";
import ShopPage from './page/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignUpPage from './page/sign-in-and-sign-up pages/sign-in-and-sign-up.component'

import {auth, checkProfile} from '../src/firebase/firebase.utils'



class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubcribeOnAuth = null;

  componentDidMount () {
    this.unSubcribeOnAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth){
        const userRef = await checkProfile(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }

          })

          console.log(this.state)
        })
      }else{
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unSubcribeOnAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route  path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
