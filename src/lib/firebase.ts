import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUR1apA-zA0D1TUwI0Wexv_-X2lFKUWhs",
  authDomain: "linktree-clone-27a6b.firebaseapp.com",
  projectId: "linktree-clone-27a6b",
  storageBucket: "linktree-clone-27a6b.appspot.com",
  messagingSenderId: "664097578364",
  appId: "1:664097578364:web:adcd56e5c0d2cc7aca98f9",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
