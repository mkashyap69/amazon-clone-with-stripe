import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBJULCihhOqDQFbAsV7GN39lECVov060ls',
  authDomain: 'clone-13368.firebaseapp.com',
  databaseURL: 'https://clone-13368.firebaseio.com',
  projectId: 'clone-13368',
  storageBucket: 'clone-13368.appspot.com',
  messagingSenderId: '635706986872',
  appId: '1:635706986872:web:73ebb2981243c4b5d0b88d',
  measurementId: 'G-7GPCMHVT2T',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
