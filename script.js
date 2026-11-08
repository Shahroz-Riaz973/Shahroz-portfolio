const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

// Toggle menu on hamburger click
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu automatically when any link is clicked on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});