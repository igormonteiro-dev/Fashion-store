import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHxEw5sSHJEDfYE2Ri9-wDsvG2q9jDly0",
  authDomain: "casa-bjorn.firebaseapp.com",
  projectId: "casa-bjorn",
  storageBucket: "casa-bjorn.appspot.com",
  messagingSenderId: "585337987932",
  appId: "1:585337987932:web:185f30dc448ccac3d05799",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  // we can define some actions that we want this Google Auth provider to behave
  prompt: "select_account",
  //select_account - every time somebody interacts with our provider, we want to always force them to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
// This instance allows us to tell Firebase when we want to get a document, to set a document or anything like that related to our db

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // To get the user Ref, inside db, inside users(collection), getting the userAuth.uid(unique ID)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
      //create / set the document with the data from userAuth in my collection
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
