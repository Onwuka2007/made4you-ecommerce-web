import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

import { firebaseConfig } from "../js/firebase-config.js";

// init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// register fn for the submit btn
window.register = async () => {
  const username = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const successModal = document.getElementById("successModal");
  const overlay = document.getElementById("overlay");

  // VALIDATION
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorPassword = document.getElementById("errorPassword");
  const errorPasswordMismatch = document.getElementById(
    "errorPasswordMismatch"
  );

  let validationFailed = false;

  //   if name empty
  if (!username || username.length < 3) {
    errorName.classList.remove("hidden");
    errorName.classList.add("flex");
    validationFailed = true;
  } else {
    errorName.classList.add("hidden");
    errorName.classList.remove("flex");
  }

  //   if email invalid
  if (!email || !email.includes("@")) {
    errorEmail.classList.remove("hidden");
    errorEmail.classList.add("flex");
    validationFailed = true;
  } else {
    errorEmail.classList.add("hidden");
    errorEmail.classList.remove("flex");
  }

  //   if password empty
  if (!password || password.length < 6) {
    errorPassword.classList.remove("hidden");
    errorPassword.classList.add("flex");
    validationFailed = true;
  } else {
    errorPassword.classList.add("hidden");
    errorPassword.classList.remove("flex");
    errorPassword.classList.remove("text-red-400");
  }

  //   check password match
  if (password !== confirmPassword) {
    errorPasswordMismatch.classList.remove("hidden");
    errorPasswordMismatch.classList.add("flex");
    validationFailed = true;
  } else {
    errorPasswordMismatch.classList.add("hidden");
    errorPasswordMismatch.classList.remove("flex");
  }

  if (validationFailed) {
    return;
  }

  try {
    // CREATE USER
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // SAVE USER DATA
    await setDoc(doc(db, "users", user.uid), {
      username,
      email,
      role: "buyer",
      createdAt: new Date().toISOString(),
    });

    // SHOW SUCCESS MODAL
    setInterval(() => {
      successModal.classList.remove("hidden");
      successModal.classList.add("flex");
      overlay.classList.remove("hidden");
    }, 1000);
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
};

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
  return "A general application error occurred.";
}

window.launchConfetti = function () {
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 },
  });
};
