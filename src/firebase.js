import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3uyUzANGaka-gLwgfOKdPgCwvagnS4Yo",
  authDomain: "linked-in-6519d.firebaseapp.com",
  projectId: "linked-in-6519d",
  storageBucket: "linked-in-6519d.appspot.com",
  messagingSenderId: "510770450428",
  appId: "1:510770450428:web:585eff7e4a9bd1a2fdec79",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
