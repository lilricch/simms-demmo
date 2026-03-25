// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (toggle) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });
}

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .card, .hero-content, .footer-col').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

console.log("Simms School Website Loaded");