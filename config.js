import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBbARnE2B121bH2B_PDOfDJDlVp93j5xEo",
  authDomain: "e-lib-e99e4.firebaseapp.com",
  projectId: "e-lib-e99e4",
  storageBucket: "e-lib-e99e4.appspot.com",
  messagingSenderId: "993332597526",
  appId: "1:993332597526:web:be72575554109437e23637"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
