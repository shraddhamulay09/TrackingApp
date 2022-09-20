import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyBFZc39yMDDsA9LVYsNQuDBdeBaq6Z8SdE",
  authDomain: "trackingapp-bfad3.firebaseapp.com",
  projectId: "trackingapp-bfad3",
  storageBucket: "trackingapp-bfad3.appspot.com",
  messagingSenderId: "64645875804",
  appId: "1:64645875804:web:9d6226845b7880fca77e99",
  measurementId: "G-7F1Z3HC7B2",
};

firebase.initializeApp(config);
export default firebase;
