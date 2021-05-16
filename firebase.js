import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCqVPJ_d-MNHx7CS6bwi2scTC1Kda1Pwrk",
    authDomain: "aquilareitexpo.firebaseapp.com",
    projectId: "aquilareitexpo",
    storageBucket: "aquilareitexpo.appspot.com",
    messagingSenderId: "735443312249",
    appId: "1:735443312249:web:0e288617ae4e8fe7dc3ea8"
  };
 
let app;
if(firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
} else {
   app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db, auth}