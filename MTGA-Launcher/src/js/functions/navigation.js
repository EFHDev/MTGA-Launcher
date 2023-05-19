const sessionID = localStorage.getItem("SessionID");
const nav = document.querySelector('.sidebar');
//const toggleNav = document.querySelector('.closenav');
const toggleNav = document.getElementById('closenav');
(toggleNav);
const mouseThreshold = 100; // adjust this value to change the distance threshold in pixels

if (!sessionID) { // if not logged in
  const homeButton = document.getElementById("homeButton");
  const profileButton = document.getElementById("profileButton");
  const switchProfile = document.getElementById("switchprofile");

  homeButton.disabled = true;
  homeButton.style.opacity = "0.50";
  homeButton.style.cursor = "not-allowed";
  homeButton.title = "Login first.";
  profileButton.disabled = true;
  profileButton.style.opacity = "0.50";
  profileButton.style.cursor = "not-allowed";
  profileButton.title = "Login first.";
  switchProfile.title = "Login";

  homeButton.addEventListener("click", (event) => { // disable home button
    event.preventDefault();
  });

  profileButton.addEventListener("click", (event) => { // disable profile button
    event.preventDefault();
  });
}
  profileButton.addEventListener("click", (event) => { // disable profile button
    event.preventDefault();
  });
toggleNav.addEventListener('click', function (e) { // close navigation
  e.preventDefault();
  nav.classList.toggle('show');
  [debugNav, icon, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.classList.remove('active')); // remove active class from all nav items including debug ones
});

toggleNav.addEventListener('mousemove', function (e) { // add hover class to close navigation
  const rect = toggleNav.getBoundingClientRect(); 
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.sqrt(Math.pow(centerX - e.clientX, 2) + Math.pow(centerY - e.clientY, 2)); // calculate distance between mouse and center of close nav button

  if (distance > mouseThreshold) {
    toggleNav.classList.remove('hover');
  } else {
    toggleNav.classList.add('hover');
  }
});

toggleNav.addEventListener('mouseleave', function (e) {
  toggleNav.classList.remove('hover');
});

/* -------------------------------- FUNCTIONS ------------------------------- */
export function toggleNavigation() {
    ("sexxy sexy sex")
    nav.classList.toggle('show');  }


/* -------------------------------------------------------------------------- */
/*                              DEBUG NAVIGATION                              */
/* -------------------------------------------------------------------------- */
const logo = document.querySelector('.logo');
let clicks = 0;

logo.addEventListener('click', () => {
  clicks++;
  if (clicks === 3) {
    alert('Debug Mode Activated');
    localStorage.setItem('DebugMode', true);
    clicks = 0;
  }
});

if (!localStorage.getItem('DebugMode')) {
  var debugLiElement = document.getElementById('123');
  if (debugLiElement) {
    debugLiElement.parentNode.removeChild(debugLiElement);
  }

  document.querySelectorAll('#DebugNav, #DebugNav1, #DebugNav2, #DebugNav3, #DebugNav4, .sidebar li a i.fa-solid.fa-bug').forEach(el => el.style.display = "none");
  document.querySelectorAll('#DebugNav, #DebugNav1, #DebugNav2, #DebugNav3, #DebugNav4, .sidebar li a i.fa-solid.fa-bug').forEach(el => el.style.height = "0px");
}

if(localStorage.getItem('DebugMode')) {
document.querySelector('#DebugNav').addEventListener('click', () => {
  document.querySelectorAll('#DebugNav1, #DebugNav2, #DebugNav3, #DebugNav4, .sidebar li a i.fa-solid.fa-bug').forEach(el => el.classList.toggle('active'));
  setTimeout(() => document.querySelector('#DebugNav').classList.toggle('active'), 300);
})};