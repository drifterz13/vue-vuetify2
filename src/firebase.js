import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAOpSg9Cb7lxiDNzZ0fW5h0RM_3Bvux5-0",
  authDomain: "vue-vuetify-cdfd4.firebaseapp.com",
  databaseURL: "https://vue-vuetify-cdfd4.firebaseio.com",
  projectId: "vue-vuetify-cdfd4",
  storageBucket: "vue-vuetify-cdfd4.appspot.com",
  messagingSenderId: "244062370087"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export { db, firebase };
