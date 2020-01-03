import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const  config = 

{
    apiKey: "AIzaSyAvymTDv4PHuFuCCM76cS5wEq8tChcNjqc",
    authDomain: "crwn-db-81acf.firebaseapp.com",
    databaseURL: "https://crwn-db-81acf.firebaseio.com",
    projectId: "crwn-db-81acf",
    storageBucket: "crwn-db-81acf.appspot.com",
    messagingSenderId: "372543251495",
    appId: "1:372543251495:web:da1f9c2878820c1dceda02",
    measurementId: "G-CHDTKF44JS"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt:'select_account'})
  
  export const SignInWithGoogleAccount = () => {
      auth.signInWithPopup(provider)
  }

  export default firebase