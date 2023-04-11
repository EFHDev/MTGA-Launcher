import CryptoJS from 'crypto-js';
const errorDiv = document.querySelector(".error");

async function register() {
  const username = document.getElementById("username").value;
  const rawpassword = document.getElementById("password").value;
  const hashedPassword = CryptoJS.SHA256(rawpassword).toString();
  const edition = document.getElementById("edition").value;
  console.log(hashedPassword); // $2a$10$U6lk0...
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
  const responseBody = await response.json();
  
  if (responseBody.correct) {
    console.log(responseBody.sessionID);
    alert('Registered successfully!');
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 0.5);
    localStorage.setItem("SessionID", `${responseBody.sessionID}`);
    window.location.replace(`http://localhost:1420/no.html`)
    return false; // prevent default form submission behavior
  } else if(responseBody.invalid){
    alert('Something went wrong!');
    console.log("naw") 
  }
}
 async function loggedIn(sessionID, username) {
  return;
 }
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('login').addEventListener("click", () => register());
});