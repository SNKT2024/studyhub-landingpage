import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addEmailToWaitlist(email) {
  try {
    await addDoc(collection(db, "waitlist"), {
      email: email,
      timestamp: new Date(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default addEmailToWaitlist;
