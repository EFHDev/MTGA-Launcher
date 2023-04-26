//NAVIGATION
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

//DEBUG NAVIGATION
const DebugMode = localStorage.getItem("DebugMode");
const debugNav = document.querySelector('#DebugNav')
const debugNav1 = document.querySelector('#DebugNav1')
const debugNav2 = document.querySelector('#DebugNav2')
const debugNav3 = document.querySelector('#DebugNav3')
const debugNav4 = document.querySelector('#DebugNav4')
const icon = document.querySelector('.sidebar li a i.fa-solid.fa-bug')

if(!DebugMode) {
  const liElement = debugNav.parentNode;
  liElement.parentNode.removeChild(liElement);
  debugNav1.style.display = "none";
  debugNav2.style.display = "none";
  debugNav3.style.display = "none";
  debugNav4.style.display = "none";
  icon.style.display = "none";
}

debugNav.addEventListener('click', function (e) {
  if (!debugNav1.classList.contains('active') && !debugNav2.classList.contains('active')) {
setTimeout(() => {     
  icon.classList.add('active');
  debugNav1.classList.add('active');
  debugNav2.classList.add('active');
  debugNav3.classList.add('active');
  debugNav4.classList.add('active');
}, 300);
    debugNav.classList.add('active');
  } else {
    icon.classList.remove('active');
    debugNav1.classList.remove('active');
    debugNav2.classList.remove('active');
    debugNav3.classList.remove('active');
    debugNav4.classList.remove('active');
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