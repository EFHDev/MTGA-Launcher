import CryptoJS from 'crypto-js';
const errorDiv = document.querySelector(".error");




async function login() {
  const username = document.getElementById("username").value;
  const rawpassword = document.getElementById("password").value;
  const salt = "MTGA____"
  const seasonedmeat = salt + rawpassword 
  const hashedPassword = CryptoJS.SHA256(seasonedmeat).toString();
  console.log(hashedPassword); // $2a$10$U6lk0...
  const response = await fetch('https://127.0.0.1:42069/launcher/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: hashedPassword
    })
  });
  const responseBody = await response.json();
  
  if (responseBody.correct) {
    console.log(responseBody.sessionID);
    alert('Login successful!');
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 0.5);
    localStorage.setItem("SessionID", `${responseBody.sessionID}`);
    localStorage.setItem("Nickname", `${responseBody.username}`);
    localStorage.setItem("Level", `${responseBody.level}`);
    localStorage.setItem("Side", `${responseBody.side}`);
    localStorage.setItem("Experience", `${responseBody.experience}`);
    window.location.replace(`http://localhost:1420/src/assets/no.html`)
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