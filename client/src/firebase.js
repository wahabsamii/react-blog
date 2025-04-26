// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC1mUrSp8PrGBf6MDOiwXeQlxAy8o1EFDk",
  authDomain: "mernfullstackblogapp.firebaseapp.com",
  projectId: "mernfullstackblogapp",
  storageBucket: "mernfullstackblogapp.appspot.com",
  messagingSenderId: "706233443896",
  appId: "1:706233443896:web:f043bf26e86fab4b9ee8cd",
  measurementId: "G-EWZ984SWE1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
