const hamburgerButton = document.getElementById('hamburger-button');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});
