import firebase from "firebase/app";
import "@firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDD3mgG9D-qK-3T8t31C6SeFwJaPSZPmCE",
  authDomain: "challengeband-a753e.firebaseapp.com",
  projectId: "challengeband-a753e",
  storageBucket: "challengeband-a753e.appspot.com",
  messagingSenderId: "403625695454",
  appId: "1:403625695454:web:9bcd68c6bd7941e7fa8a4f"
});

export default app;