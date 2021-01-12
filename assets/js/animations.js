  // Activate mobile menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list');

const menuActivate = function(){
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
}

hamburger.addEventListener('click', menuActivate);
menu.addEventListener('click', menuActivate);
