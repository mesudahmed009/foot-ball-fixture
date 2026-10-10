import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBxnPQX6CfMTaI32AYkcPKMaE0Ze_rR-Gw",
  authDomain: "football-fixture-platform.firebaseapp.com",
  projectId: "football-fixture-platform",
  storageBucket: "football-fixture-platform.firebasestorage.app",
  messagingSenderId: "15922508170",
  appId: "1:15922508170:web:67a4f9ab45f096a20b9873",
  measurementId: "G-FXLSE92WQC"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);