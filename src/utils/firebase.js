// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp8yxFzfIdmlcNrDrcYlJx1_VmNzQac7c",
  authDomain: "netflix-gpt-eb5b1.firebaseapp.com",
  projectId: "netflix-gpt-eb5b1",
  storageBucket: "netflix-gpt-eb5b1.appspot.com",
  messagingSenderId: "258077794092",
  appId: "1:258077794092:web:83ccad161301c05cefd689",
  measurementId: "G-5SW3690KDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
