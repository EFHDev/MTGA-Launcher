import { sha256 } from "./main";
const errorDiv = document.querySelector(".error");



async function register() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const hashedPassword = await sha256(password);
  const edition = document.getElementById("edition").value;
  const response = await fetch('https://127.0.0.1:42069/launcher/account/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: hashedPassword,
      edition: edition
    })
  });
  if (response.headers.get("content-type").includes("application/json")) {
    const responseBody = await response.json();
    console.log(responseBody.sessionID);
    alert(`Created new account ${responseBody.username}!`);
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 0.5);
    localStorage.setItem("SessionID", `${responseBody.sessionID}`);
    localStorage.setItem("Nickname", `${responseBody.username}`);
    localStorage.setItem("Level", `${responseBody.level}`);
    localStorage.setItem("Side", `${responseBody.side}`);
    localStorage.setItem("Experience", `${responseBody.experience}`);
    window.location.replace(`/src/no.html`)
    return false; // prevent default form submission behavior
  } else if (response.headers.get("content-type").includes("text/html")) {
    const responseText = await response.text();
    switch (true) {
      case responseText.includes("ALREADY EXIST"):
        alert("A account with that username already exists.")
        break;
      case responseText.includes("NO_EMAIL"):
        alert("You need to enter a username dummy!")
        break;
      case responseText.includes("NO_PSSWD"):
        alert("How are you going to log-in without a password?")
        break;
      case responseText.includes("FAILED"):
        alert("Catastrophic error. Check server log for info.")
        break;
    }
  }
}
async function loggedIn(sessionID, username) {
  return;
}
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('registerbtn').addEventListener("click", () => register());
});