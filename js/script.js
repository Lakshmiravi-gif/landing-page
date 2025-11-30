const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // ensures section aligns at top
        });

        // Close mobile menu after click
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});