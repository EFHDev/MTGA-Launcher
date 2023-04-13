const nav = document.querySelector('.sidebar');
const closeNav = document.querySelector('.close-nav');
const mouseThreshold = 100; // adjust this value to change the distance threshold in pixels

closeNav.addEventListener('click', function(e) {
  e.preventDefault();
  nav.classList.toggle('show');
});

closeNav.addEventListener('mousemove', function(e) {
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

closeNav.addEventListener('mouseleave', function(e) {
  closeNav.classList.remove('hover');
});

export async function sha256(message) {
    const msgBuffer = new TextEncoder().encode("MTGA__" + message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }