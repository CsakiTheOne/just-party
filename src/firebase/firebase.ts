// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ICW92ZNVyT01_axnvYvqYrG0ducKioE",
  authDomain: "justpartyhere.firebaseapp.com",
  projectId: "justpartyhere",
  storageBucket: "justpartyhere.appspot.com",
  messagingSenderId: "648018158274",
  appId: "1:648018158274:web:50668a7f536b7a435e515b",
  measurementId: "G-7RM6ZPJ8DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
