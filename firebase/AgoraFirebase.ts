import firebase from "firebase";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDu1zpzquWh7hzaW-TNxJWjpcztcIrcCXA",
    authDomain: "agora-community.firebaseapp.com",
    projectId: "agora-community",
    storageBucket: "agora-community.appspot.com",
    messagingSenderId: "640581064658",
    appId: "1:640581064658:web:4ddf9747173d2356479a0b",
    measurementId: "G-WDYV5428CY"
};


if (!firebase.apps.length) {
    console.log("creating firebase")
    firebase.initializeApp(firebaseConfig);
}

export default firebase;



