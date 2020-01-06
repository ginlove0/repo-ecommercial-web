import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvymTDv4PHuFuCCM76cS5wEq8tChcNjqc",
  authDomain: "crwn-db-81acf.firebaseapp.com",
  databaseURL: "https://crwn-db-81acf.firebaseio.com",
  projectId: "crwn-db-81acf",
  storageBucket: "crwn-db-81acf.appspot.com",
  messagingSenderId: "372543251495",
  appId: "1:372543251495:web:da1f9c2878820c1dceda02",
  measurementId: "G-CHDTKF44JS"
};

export const checkProfile = async (userAuth, additionalData) => {

    //if there are no account login, userAuth = null => return this function
  if (!userAuth) return;


    //create userRef to store user id
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //create snapShort to get all data from id that store in userRef
  const snapShot = await userRef.get();

  //check if account was created in database, executed catch, otherwise execute try
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogleAccount = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
