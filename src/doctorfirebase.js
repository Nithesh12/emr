
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const secondaryAppConfig = {
  apiKey: "AIzaSyDmjZm5BdLxUmP-P6oI6QAH7CpXUwonXFs",
  authDomain: "health-c36f4.firebaseapp.com",
  projectId: "health-c36f4",
  storageBucket: "health-c36f4.appspot.com",
  messagingSenderId: "20804272650",
  appId: "1:20804272650:web:0eea063af98e95716815f3",
  measurementId: "G-5NBJLR6KVX"
};

const Secondaryapp = initializeApp(secondaryAppConfig,"secondary");
const dbs = getFirestore(Secondaryapp)
const auths=getAuth(Secondaryapp)
export{auths,dbs}