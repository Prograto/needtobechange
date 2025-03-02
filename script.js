document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const changingText = document.getElementById('changing-text');

    // Theme Toggle
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    });

    // Menu Toggle
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log('Menu toggled. Current classes: ', navLinks.className);
    });

    // Section Fade-In
    const sections = document.querySelectorAll('.fade-in-section');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);
    sections.forEach(section => observer.observe(section));

    // Role Text Changing
    const roles = ["Full Stack Developer", "Game Developer", "Web Developer", "Python Enthusiast", "Tech Innovator"];
    let roleIndex = 0;

    function changeRole() {
        changingText.classList.remove('visible');
        setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            changingText.textContent = roles[roleIndex];
            changingText.classList.add('visible');
        }, 500);
    }

    setInterval(changeRole, 3000);
    changingText.classList.add('visible');
});
