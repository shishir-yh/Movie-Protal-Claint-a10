import { initializeApp } from "firebase/app"; // Correct import for initializeApp
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH9wGbcVYA52kCf1Ivep-h3J6Jkr0cxYc",
    authDomain: "movie-portal-auth.firebaseapp.com",
    projectId: "movie-portal-auth",
    storageBucket: "movie-portal-auth.appspot.com", // Fix storageBucket URL typo
    messagingSenderId: "48316657747",
    appId: "1:48316657747:web:55f8127104bde9ca3716a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Connect the app to Firebase Auth
export default auth;


