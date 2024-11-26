document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const navbar = document.getElementById('navbar');

  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('show');
    navbar.classList.toggle('show');
  });
});
