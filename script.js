document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const menu = document.getElementById('menu');

  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('show'); // Tambahkan class 'show' ke tombol
    menu.classList.toggle('show');
  });
});
