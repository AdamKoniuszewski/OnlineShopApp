import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMeVz9rvri-xb7xIyHlWAmSi1EZnb_ZRw",
    authDomain: "polystory-31bb2.firebaseapp.com",
    databaseURL: "https://polystory-31bb2.firebaseio.com",
    projectId: "polystory-31bb2",
    storageBucket: "polystory-31bb2.appspot.com",
    messagingSenderId: "842669781360",
    appId: "1:842669781360:web:bc609a6d62844b54c75fb5",
    measurementId: "G-FSZK67HR0S"
  };

  export const createUserProfileDocument = async (userAuth, AdditionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...AdditionalData

        })
      } catch(error) {
          console.log('error creating user', error.message)
      }

      
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  