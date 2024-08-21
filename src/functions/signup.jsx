import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addEmailToWaitlist(email) {
  console.log(email);

  try {
    const docRef = await addDoc(collection(db, "waitlist"), {
      email: email,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default addEmailToWaitlist;
