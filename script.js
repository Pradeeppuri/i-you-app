import { auth, provider } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const googleLogin = document.getElementById("googleLogin");
const status = document.getElementById("status");

signupBtn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    status.innerText = "Signup Successful ✅";
  } catch (err) {
    status.innerText = err.message;
  }
});

loginBtn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    status.innerText = "Login Successful 🔥";
    logoutBtn.style.display = "block";
  } catch (err) {
    status.innerText = err.message;
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  status.innerText = "Logged out successfully 👋";
  logoutBtn.style.display = "none";
});

googleLogin.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    status.innerText = "Google Login Success ✅";
    logoutBtn.style.display = "block";
  } catch (err) {
    status.innerText = err.message;
  }
});
