import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB611rvCdRRM4GUQq6YPoAtrRDagQpm2wg",
  authDomain: "house-marketplace-app-29d7b.firebaseapp.com",
  projectId: "house-marketplace-app-29d7b",
  storageBucket: "house-marketplace-app-29d7b.appspot.com",
  messagingSenderId: "616985543878",
  appId: "1:616985543878:web:76a22e23b2a47c6f2bc3c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
