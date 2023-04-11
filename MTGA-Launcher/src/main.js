import { createHash } from "crypto";
const errorDiv = document.querySelector(".error");

async function login() {
  const username = document.getElementById("username").value;
  const rawpassword = document.getElementById("password").value;
  const hash = createHash(sha256, rawpassword)
  console.log(hash)
  const response = await fetch('https://127.0.0.1:42069/launcher/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: hash
    })
  });
  const responseBody = await response.json();
  
  if (responseBody.correct) {
    console.log(responseBody.sessionID);
    alert('Login successful!');
    window.location.replace(`http://localhost/no.html?id=${responseBody.sessionID}`)
    cookie
    return false; // prevent default form submission behavior
  } else if(responseBody.invalid){
    alert('Incorrect Password or Username');
    console.log("naw") 
  }
}
 async function loggedIn(sessionID, username) {
  return;
 }
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('login').addEventListener("click", () => login());
});