import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG6HVCAbLaQabxrcp6MHxWB2cn1dXjeOw",
  authDomain: "robinhood-clone-fb888.firebaseapp.com",
  projectId: "robinhood-clone-fb888",
  storageBucket: "robinhood-clone-fb888.appspot.com",
  messagingSenderId: "635469953370",
  appId: "1:635469953370:web:81bbe9d026d0c767165b63",
  measurementId: "G-F0PTT2JP2L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
