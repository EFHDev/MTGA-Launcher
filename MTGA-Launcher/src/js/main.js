/* -------------------------------------------------------------------------- */
/*                                NAVIGATION                                */
/* -------------------------------------------------------------------------- */
const sessionID = localStorage.getItem("SessionID");
const nav = document.querySelector('.sidebar');
const closeNav = document.querySelector('.close-nav');
const mouseThreshold = 100; // adjust this value to change the distance threshold in pixels

if (!sessionID) {
  const homeButton = document.getElementById("home");
  const profileButton = document.getElementById("profileopt");
  const switchprofile = document.getElementById("switchprofile");
  
  homeButton.disabled = true;
  homeButton.style.opacity = "0.50";
  homeButton.style.cursor = "not-allowed";
  homeButton.title = "Login first.";
  profileButton.disabled = true;
  profileButton.style.opacity = "0.50";
  profileButton.style.cursor = "not-allowed";
  profileButton.title = "Login first.";
  switchprofile.title = "Login";
  homeButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
  profileButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
}
closeNav.addEventListener('click', function (e) {
  e.preventDefault();
  nav.classList.toggle('show');
  [debugNav, icon, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.classList.remove('active'));
});

closeNav.addEventListener('mousemove', function (e) {
  const rect = closeNav.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.sqrt(Math.pow(centerX - e.clientX, 2) + Math.pow(centerY - e.clientY, 2));

  if (distance > mouseThreshold) {
    closeNav.classList.remove('hover');
  } else {
    closeNav.classList.add('hover');
  }
});

closeNav.addEventListener('mouseleave', function (e) {
  closeNav.classList.remove('hover');
});


/* -------------------------------------------------------------------------- */
/*                              DEBUG NAVIGATION                              */
/* -------------------------------------------------------------------------- */
const logo = document.querySelector('.logo')
const DebugMode = localStorage.getItem("DebugMode");
const debugNav = document.querySelector('#DebugNav')
const debugNav1 = document.querySelector('#DebugNav1')
const debugNav2 = document.querySelector('#DebugNav2')
const debugNav3 = document.querySelector('#DebugNav3')
const debugNav4 = document.querySelector('#DebugNav4')
const icon = document.querySelector('.sidebar li a i.fa-solid.fa-bug')
/* -------------------------- DEBUG MODE ACTIVATION ------------------------- */
let clicks = 0;
logo.addEventListener('click', function (e) {
  clicks += 1;
  console.log("clicked!")
  if (clicks == 1) {
    setInterval(() => {
      if(clicks <=  3 && !DebugMode){
      debugActivationTimer();
    }}, 1);
}});

function debugActivationTimer() {
  const timeout = 200;
  let now = Date.now();
  let timer = now;
  if (clicks !== 3 && timer != 200) {
    timer += 1;
  }
  else if (clicks == 3) {
    alert("Debug Mode Activated");
    localStorage.setItem("DebugMode", true);
    clicks = 0;
    return
  }
  else {return}
  

}

if(!DebugMode) {
  debugNav.parentElement.remove();
  document.querySelectorAll(".transitionable").forEach(el => el.remove());
  [icon, debugNav, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.style.display = "none");
  icon.style.display = "none";
}

debugNav.addEventListener('click', function (e) {
  if (!debugNav1.classList.contains('active') && !debugNav2.classList.contains('active')) {
setTimeout(() => {     
  [icon, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.classList.add('active'));
}, 300);
    debugNav.classList.add('active');
  } else {
    [icon, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.classList.remove('active'));
    setTimeout(() => {     
      debugNav.classList.remove('active');
    }, 300);
  }
});






//export async function sha256(message) {
//  if (message === "") { return "" }
//  const msgBuffer = new TextEncoder().encode("MTGA__" + message);
//  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
//  const hashArray = Array.from(new Uint8Array(hashBuffer));
//  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//}
/* -------------------------------------------------------------------------- */
/*                      UPDATE PROFILE FUNCTION OBVIOUSLY                     */
/* -------------------------------------------------------------------------- */
async function updateProfileData() {
  const SessionID = localStorage.getItem("SessionID")
  if (!SessionID) {
    console.log("Couldnt updateProfileData  cause its sessionID is undefined lol")
    return
  }
  const response = await fetch('https://127.0.0.1:42069/tauri/get/charcter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sessionID: SessionID
    })
  });
  const data = await response.json();
  const level = data.level;
  const experience = data.experience;
  localStorage.setItem("Level", level);
  localStorage.setItem("Experience", experience);
};

setInterval(updateProfileData, 500000);