// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGwAZupu2PWd_p3Y1sumvoJWZMdyYubiM",
  authDomain: "fir-hosting-ee8b8.firebaseapp.com",
  projectId: "fir-hosting-ee8b8",
  storageBucket: "fir-hosting-ee8b8.appspot.com",
  messagingSenderId: "618987086832",
  appId: "1:618987086832:web:caf24b7eeef7b5cc3a7335",
  measurementId: "G-7BCC2ZZS8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
