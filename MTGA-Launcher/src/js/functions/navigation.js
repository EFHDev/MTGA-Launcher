const sessionID = localStorage.getItem("SessionID");
const nav = document.querySelector('.sidebar');
//const toggleNav = document.querySelector('.close-nav');
const toggleNav = document.getElementById('close-nav');
console.log(toggleNav);
const mouseThreshold = 100; // adjust this value to change the distance threshold in pixels

if (!sessionID) { // if not logged in
  const { homeButton, profileButton, switchprofile} = document.getElementById

  homeButton.disabled = true;
  homeButton.style.opacity = "0.50";
  homeButton.style.cursor = "not-allowed";
  homeButton.title = "Login first.";
  profileButton.disabled = true;
  profileButton.style.opacity = "0.50";
  profileButton.style.cursor = "not-allowed";
  profileButton.title = "Login first.";
  switchprofile.title = "Login";
  homeButton.addEventListener("click", (event) => { // disable home button
    event.preventDefault();
  });
  profileButton.addEventListener("click", (event) => { // disable profile button
    event.preventDefault();
  });
}
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
    console.log("sexxy sexy sex")
    nav.classList.toggle('show');  }


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

function debugActivationTimer() { // timer to activate debug mode
  const timeout = 200; // 200ms
  let now = Date.now(); // current time
  let timer = now; // timer
  if (clicks !== 3 && timer != 200) { // if clicks is not 3 and timer is not 200ms
    timer += 1; // add 1ms to timer
  }
  else if (clicks == 3) { // if clicks is 3
    alert("Debug Mode Activated"); // alert debug mode activated
    localStorage.setItem("DebugMode", true); // set debug mode to true
    clicks = 0; // reset clicks
    return
  }
  else {return} 
  

}

if(!DebugMode) { // if debug mode is not activated
  debugNav.parentElement.remove(); // remove debug nav
  document.querySelectorAll(".transitionable").forEach(el => el.remove()); // remove all transitionable elements
  [icon, debugNav, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.style.display = "none"); // remove all debug nav items
  icon.style.display = "none"; // remove debug icon
}

debugNav.addEventListener('click', function (e) { // open debug nav
  if (!debugNav1.classList.contains('active') && !debugNav2.classList.contains('active')) { // if debug nav is not active
setTimeout(() => { 
  [icon, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.classList.add('active')); // add active class to all debug nav items
}, 300); // after 300ms
    debugNav.classList.add('active'); // add active class to debug nav
  } else { // if debug nav is active
    [icon, debugNav1, debugNav2, debugNav3, debugNav4].forEach(nav => nav.classList.remove('active')); // remove active class from all debug nav items
    setTimeout(() => {       
      debugNav.classList.remove('active'); // remove active class from debug nav
    }, 300); // after 300ms
  } 
}); 