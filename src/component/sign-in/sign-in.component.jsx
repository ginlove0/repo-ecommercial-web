import React from "react";
// import SignInAndSignUp from "../../page/sign-in-and-sign-up pages/sign-in-and-sign-up.component";

import "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/sign-in/sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInWithGoogleAccount, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state
    try {
        await auth.signInWithEmailAndPassword(email, password)
        this.setState({ email: "", password: "" });
    } catch (error) {
        console.log(error)
    }
    
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className='buttons'>
          <CustomButton type="submit"> SIGN IN</CustomButton>
          <CustomButton onClick={SignInWithGoogleAccount} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
          </div>

          
        </form>
      </div>
    );
  }
}

export default SignIn;
