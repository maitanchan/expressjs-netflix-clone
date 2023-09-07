import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyBrfn_yB97xpWvagvlyk5jQ02TFu9WWphE",
    authDomain: "netflix-app-eb4d0.firebaseapp.com",
    projectId: "netflix-app-eb4d0",
    storageBucket: "netflix-app-eb4d0.appspot.com",
    messagingSenderId: "287959616824",
    appId: "1:287959616824:web:76688b4beece84e89d45cd",
    measurementId: "G-JE9262YZFG"

};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export default storage