async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const hashedPassword = await sha256(password); // hash password with SHA-256
  console.log(hashedPassword)

  const response = await fetch('https://127.0.0.1:42069/tauri/account/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: username,
      password: hashedPassword
    })
  });
  
  if (response.headers.get("content-type").includes("application/json")) {
    const responseBody = await response.json();
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
  } else if(response.headers.get("content-type").includes("text/html")){
    const responseText = await response.text();
    if(responseText.includes("INVALID_CREDENTIALS")) {
      alert('Incorrect Password or Username');
      console.log("naw") 
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

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('login').addEventListener("click", () => login());
});