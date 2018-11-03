import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueFirestore)

const config = {
    // apiKey: "AIzaSyCkWpj-oXmUtf2PjXw0PA8A6ONG7AZb2S8",
    // authDomain: "pteisurvey.firebaseapp.com",
    // databaseURL: "https://pteisurvey.firebaseio.com",
    // projectId: "pteisurvey",
    // storageBucket: "pteisurvey.appspot.com",
    // messagingSenderId: "260235840723"
    apiKey: "AIzaSyBB51aJHXUkuWRL5BfdislL2h4ps8WAyvg",
    authDomain: "ptei-1c8c4.firebaseapp.com",
    databaseURL: "https://ptei-1c8c4.firebaseio.com",
    projectId: "ptei-1c8c4",
    storageBucket: "ptei-1c8c4.appspot.com",
    messagingSenderId: "57084057957"
  }

const firebaseApp = Firebase.initializeApp(config)

export const firestore = firebaseApp.firestore();

const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

