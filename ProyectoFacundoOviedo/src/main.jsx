import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBnBuGXpwXmH6Xc8X09RirGVvYvrSfQrrI",
  authDomain: "proyectofacundooviedoreact.firebaseapp.com",
  projectId: "proyectofacundooviedoreact",
  storageBucket: "proyectofacundooviedoreact.appspot.com",
  messagingSenderId: "941237792673",
  appId: "1:941237792673:web:481c5a5acf08d709b6a5e0"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
