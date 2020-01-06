import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/header/header.styles.scss";

const Header = ({ currentUser, hidden }) => {

  
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
          
          currentUser ? (
            console.log('a',currentUser),
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            console.log('b',currentUser),
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )
        }

        <CartIcon />
      </div>
      {
        hidden ? (
          null
        ) : (
          <CartDropdown />
        )
      }
      
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
