import Rebase from 're-base';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKMz3VxqK5_6iJg-3R-ILGPFDuS72jw9s",
    authDomain: "chataja-test-33df4.firebaseapp.com",
    databaseURL: "https://chataja-test-33df4.firebaseio.com",
    projectId: "chataja-test-33df4",
    storageBucket: "chataja-test-33df4.appspot.com",
    messagingSenderId: "587652600191",
    appId: "1:587652600191:web:cfbdb3e312893471740a4a",
    measurementId: "G-PMFGYKH412"
};
  
const app = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(app.database())

export { base }