// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseKey = process.env.REACT_APP_API_KEY;
const firebaseConfig = {
	apiKey: firebaseKey,
	authDomain: "socialnetwork-e14ac.firebaseapp.com",
	projectId: "socialnetwork-e14ac",
	storageBucket: "socialnetwork-e14ac.appspot.com",
	messagingSenderId: "177288168480",
	appId: "1:177288168480:web:c6fd76f6689d83266ee845",
	measurementId: "G-FLKF8FCKCB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
