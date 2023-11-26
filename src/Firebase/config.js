import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1AAcX_ouJAaOHussb4c5uUc4DiPKzDLs",
  authDomain: "ecommercereactzmmrch.firebaseapp.com",
  projectId: "ecommercereactzmmrch",
  storageBucket: "ecommercereactzmmrch.appspot.com",
  messagingSenderId: "179799364548",
  appId: "1:179799364548:web:97638610a113c419a7ca91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
