import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseconfig={
  apiKey: "AIzaSyCJGur8RPAB-4T0nWvRQVewXJN70gvRh5Q",
  authDomain: "healthrecord-8fda5.firebaseapp.com",
  projectId: "healthrecord-8fda5",
  storageBucket: "healthrecord-8fda5.appspot.com",
  messagingSenderId: "28092826272",
  appId: "1:28092826272:web:bea3f1d916510570d97fc5",
  measurementId: "G-28FCH5NQLJ",
  databaseURL:"https://healthrecord-8fda5-default-rtdb.asia-southeast1.firebasedatabase.app"
}
const app = initializeApp(firebaseconfig);
const db=getDatabase(app)
const auth = getAuth(app);
export {auth,db}
