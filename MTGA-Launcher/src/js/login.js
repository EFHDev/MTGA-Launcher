import { server } from "./main";

if (localStorage.getItem("SessionID") && !sessionStorage.getItem("AutoLogin")) {
  sessionStorage.setItem("AutoLogin", "true")
  alert("You were automaticly logged in. Have fun!")
  window.location.replace("/src/no.html")
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //const hashedPassword = await sha256(password); // hash password with SHA-256

  const response = await fetch(`${server}/tauri/account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: password
    })
  });

  if (response.headers.get("content-type").includes("application/json")) {
    const responseBody = await response.json();
    (responseBody.sessionID);
    alert('Login successful!');
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 0.5);
    localStorage.setItem("SessionID", `${responseBody.sessionID}`);
    localStorage.setItem("Nickname", `${responseBody.username}`);
    localStorage.setItem("Level", `${responseBody.level}`);
    localStorage.setItem("Side", `${responseBody.side}`);
    localStorage.setItem("Experience", `${responseBody.experience}`);
    localStorage.setItem("Edition", `${responseBody.edition}`);
    window.location.replace("/src/no.html")
    return false; // prevent default form submission behavior
  } else if (response.headers.get("content-type").includes("text/html")) {
    const responseText = await response.text();
    if (responseText.includes("INVALID_CREDENTIALS")) {
      alert('Incorrect Password or Username');
      ("naw")
    }
  }
}

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function loggedIn(sessionID, username) {
  return;
}

document.getElementById('login').addEventListener("click", (event) => {
  console.log("click")
  event.preventDefault();
  login();
});
//Make the login button become "Switch Profiles" if !SessionID @ localstorage
//if (localStorage.getItem("SessionID") != undefined) {
//  const signup = document.getElementById("signup")
//  const restrictedtext = document.getElementById("restricted")
//  const restrictedlabel1 = document.getElementById("restrictedh1")
//  const restrictedlabel2 = document.getElementById("label2")
//  const signupa = document.getElementById("signupa")
//  const loginbtn = document.getElementById("login");
//  loginbtn.value = "Switch Profiles"
//  restrictedtext.textContent = "Switch Profiles"
//  restrictedlabel1.textContent = ""
//  restrictedlabel2.textContent = "You will stay logged into this new account until you switch again."
//  signup.innerHTML = 'Want a new profile? <a href="/src/register.html">Make one nerd</a>';
//}