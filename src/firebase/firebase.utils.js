import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-lo7QX7CVfk9lVm2XVh5SfNCLg0b5pQM",
  authDomain: "tgame-a2ba2.firebaseapp.com",
  databaseURL: "https://tgame-a2ba2.firebaseio.com",
  projectId: "tgame-a2ba2",
  storageBucket: "tgame-a2ba2.appspot.com",
  messagingSenderId: "327136064790",
  appId: "1:327136064790:web:f1ec0952616fea28"
};

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account '});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
