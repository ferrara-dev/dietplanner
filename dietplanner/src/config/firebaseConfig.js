import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'

/** firebaseConfig.js
 * contains firebase configuration
 */

export const firebaseConfig = {
    apiKey: "AIzaSyDmSWV2KTRWv0Nu5aMrk79n18DMMYtiHs0",
    authDomain: "dh2642-project-36884.firebaseapp.com",
    databaseURL: "https://dh2642-project-36884.firebaseio.com",
    projectId: "dh2642-project-36884",
    storageBucket: "dh2642-project-36884.appspot.com",
    messagingSenderId: "619372374319",
    appId: "1:619372374319:web:2e7fc711485d5f1fd819da",
    measurementId: "G-JXBD06LH8L"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;