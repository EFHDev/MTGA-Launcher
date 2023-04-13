const errorDiv = document.querySelector(".error");
async function register() {
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const edition = document.getElementById("edition").value;
  const response = await fetch('https://127.0.0.1:42069/launcher/account/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: password,
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
  document.getElementById('registerbtn').addEventListener("click", () => register());
});