// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLCqfSRYvar7a0A5VNKptIS7wUtUXmu0",
  authDomain: "movie-stream-f415c.firebaseapp.com",
  projectId: "movie-stream-f415c",
  storageBucket: "movie-stream-f415c.appspot.com",
  messagingSenderId: "669878975169",
  appId: "1:669878975169:web:51b8c45e27c71cbf54b240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Get the Auth instance
const auth = getAuth();

// Retrieve the submit button
const submitButton1 = document.getElementById('submit1');

// Add an event listener to the submit button
submitButton1.addEventListener("click", function(event) {
    // Retrieve input values from the form
    const emailInput1 = document.getElementById('Email1').value;
    const passwordInput1 = document.getElementById('Password1').value;

    // Prevent the default form submission behavior
    event.preventDefault();

    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, emailInput1, passwordInput1)
    .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log('User signed in:', user);
        alert("Login successful!");
        // Redirect to another page
        window.location.href = "Movie-Stream/home.html";
    })
    .catch((error) => {
        // Handle errors during sign-in
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign-in error:', errorCode, errorMessage);
        alert(errorMessage);
    });
});

