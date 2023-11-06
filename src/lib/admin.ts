import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const FB_CLIENT_EMAIL = process.env.FB_CLIENT_EMAIL;
const FB_PRIVATE_KEY = process.env.FB_PRIVATE_KEY;
const FB_PROJECT_ID = process.env.FB_PROJECT_ID;

import pkg from "firebase-admin";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin error: ", err.stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
