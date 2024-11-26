const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah perilaku default link

    // Sembunyikan semua section
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Tampilkan section yang sesuai dengan link yang diklik
    const targetId = link.getAttribute('href'); // Ambil nilai href (misalnya: #pendidikan)
    const targetSection = document.querySelector(targetId);
    targetSection.style.display = 'block';
  });
});
