window.addEventListener('load', function() {
  setTimeout(function() {
      const loadingScreen = document.getElementById('loading-screen');
      loadingScreen.style.display = 'none';
      document.body.style.overflow = 'auto'; // Change overflow to allow scrolling
  }, 1000); // 3000 milliseconds = 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const navLinks = document.querySelector('.nav-links');
  
    toggleBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      toggleBtn.innerHTML = navLinks.style.display === 'flex' ? '<i class="fa-solid fa-folder-minus"></i>' : '<i class="fa-solid fa-folder-plus"></i>';
    });
});

const planeIcon = document.getElementById('plane-icon');
planeIcon.addEventListener('click', () => {
  planeIcon.classList.add('fly-away');
  setTimeout(() => {
    planeIcon.classList.remove('fly-away');
  }, 5000);
});