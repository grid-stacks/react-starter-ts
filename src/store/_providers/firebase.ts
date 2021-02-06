import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

import { createFirestoreInstance } from "redux-firestore";

import store from "../store";

const firebaseConfig = {
	apiKey: "AIzaSyBCbmfSYEboplh6MT-gOYmOf6_0sqrnYtE",
	authDomain: "react-start-ts-demo.firebaseapp.com",
	projectId: "react-start-ts-demo",
	storageBucket: "react-start-ts-demo.appspot.com",
	messagingSenderId: "1077745368616",
	appId: "1:1077745368616:web:ad00d75cab27d43410ff1d",
	measurementId: "G-LM6L4RKNQP",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();
firebase.storage();

// Create a Firestore reference
export const firestore = firebase.firestore();

export default firebase;

// react-redux-firebase config
const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
	enableClaims: true, // Get custom claims along with the profile
};

export const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance, // <- needed if using firestore
};
