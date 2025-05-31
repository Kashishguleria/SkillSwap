// Import Firebase functions (no need to install if using CDN in index.html)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8gLpxHZ-WVAVHI-PR9Nk-RmdpDqYpEUQ",
  authDomain: "skillswap-b3510.firebaseapp.com",
  projectId: "skillswap-b3510",
  storageBucket: "skillswap-b3510.appspot.com",
  messagingSenderId: "16259338790",
  appId: "1:16259338790:web:a682226efa9f0949f34ce7",
  measurementId: "G-CL4S1ZNFP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Signup
const signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});

// Login
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
