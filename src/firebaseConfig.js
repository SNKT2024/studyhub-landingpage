import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD-4d98WvN8MV-aaELUCNFC9PK72Si9-uI",
  authDomain: "landing-page-eba05.firebaseapp.com",
  projectId: "landing-page-eba05",
  storageBucket: "landing-page-eba05.appspot.com",
  messagingSenderId: "968562929106",
  appId: "1:968562929106:web:8ec6373fec21e4f42dec0b",
  measurementId: "G-C6X3XY2QPJ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
