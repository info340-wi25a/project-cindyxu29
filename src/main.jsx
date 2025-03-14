import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router';

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKnls9i0tOwd2zyg3NFA4nso0sSMY2Ccs",
  authDomain: "yogaease-a7b3a.firebaseapp.com",
  databaseURL: "https://yogaease-a7b3a-default-rtdb.firebaseio.com",
  projectId: "yogaease-a7b3a",
  storageBucket: "yogaease-a7b3a.firebasestorage.app",
  messagingSenderId: "497218129525",
  appId: "1:497218129525:web:0dea9c6059998e64e2b23c",
  measurementId: "G-KW2PREH2QF"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);