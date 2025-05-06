let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let themeToggle = document.querySelector('#theme-toggle');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    themeToggle.textContent = newTheme === 'dark' ? 'Dark Side' : 'Light Side';
};

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    
    const defaultTheme = savedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', defaultTheme);

    themeToggle.textContent = defaultTheme === 'dark' ? 'Dark Side' : 'Light Side';
};