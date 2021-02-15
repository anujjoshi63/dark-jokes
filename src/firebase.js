import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAcpgYnEyri6ma0fwJ92kwTB5tFamaB87w",
	authDomain: "clone-252d1.firebaseapp.com",
	databaseURL: "https://clone-252d1.firebaseio.com",
	projectId: "clone-252d1",
	storageBucket: "clone-252d1.appspot.com",
	messagingSenderId: "603908486570",
	appId: "1:603908486570:web:f2718ad607d116b782e7d3",
	measurementId: "G-ZPVLMZHMDS",
});

const db = firebaseApp.firestore();
const auth = firestore.auth();

export { auth };
