import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { configVar } from "./configVariable";

const {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
} = configVar;
const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const fireStoreDb = firebase.firestore();

export { fireStoreDb };
