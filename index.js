// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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
const submitButton = document.getElementById('submit');

// Add an event listener to the submit button
submitButton.addEventListener("click", function(event) {
    // Retrieve input values from the form
    const emailInput = document.getElementById('Email').value;
    const passwordInput = document.getElementById('Password').value;

    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
        alert("Creating Account...")
        window.location.href ="index.html"
        // You can redirect to another page or perform other actions here
    })
    .catch((error) => {
        // Handle errors during user creation
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('User creation error:', errorCode, errorMessage);
        alert(errorMessage)
        // You can display an error message to the user or handle it in other ways
    });
});
