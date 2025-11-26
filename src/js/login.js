import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const overlay = document.getElementById("overlay");
  const preloader = document.getElementById("preloader");

  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPassword");

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  let validationFailed = false;

  if (!email || !email.includes("@")) {
    errorEmail.classList.remove("hidden");
    errorEmail.classList.add("flex");
    validationFailed = true;
  } else {
    errorEmail.classList.add("hidden");
    errorEmail.classList.remove("flex");
  }

  if (!password) {
    errorPassword.classList.remove("hidden");
    errorPassword.classList.add("flex");
    validationFailed = true;
  } else {
    errorPassword.classList.add("hidden");
    errorPassword.classList.remove("flex");
    errorPassword.classList.remove("text-red-400");
  }
  if (validationFailed) {
    return;
  }

  try {
    // SIGN IN USER
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // FETCH USER DATA FROM FIRESTORE
    const userDoc = await getDoc(doc(db, "users", user.uid));
    let destinationPage;
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const userRole = userData.role;

      if (userRole === "admin") {
        destinationPage = "./adminDashboard.html";
      } else {
        destinationPage = "./productListing.html";
      }

      // Show preloader and overlay
      overlay.classList.remove("hidden");
      preloader.classList.remove("hidden");
      setTimeout(() => {
        window.location.href = destinationPage;
      }, 3000);
    } else {
      console.log("No additional user data found");
    }
  } catch (err) {
    const friendlyMessage = getFriendlyErrorMessage(err);
    const errorDisplay = document.getElementById("error-display");

    if (errorDisplay) {
      errorDisplay.classList.remove("hidden");
      errorDisplay.classList.add("flex");
      errorDisplay.textContent = friendlyMessage;
    }

    setTimeout(() => {
      if (errorDisplay) {
        errorDisplay.classList.add("hidden");
      }
    }, 8000);
  }
});

// CHANGE FIREBASE ERRORS TO FRIENDLY MESSAGES
function getFriendlyErrorMessage(error) {
  if (error.code) {
    switch (error.code) {
      case "auth/user-not-found":
        return "Account does not exist";
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Incorrect password";
      case "auth/invalid-email":
        return "Enter a valid email";
      case "auth/email-already-in-use":
        return "Email already exists";
      case "auth/weak-password":
        return "Password must be at least 6 characters";
      case "permission-denied":
        return "Access denied.";
      default:
        return "Network error. Check your connection!";
    }
  }
  // Fallback for general errors
  return "Something went wrong! Try again.";
}
