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

    themeToggle.textContent = newTheme === 'dark' ? 'Light Side' : 'Dark Side';
};

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = 'dark';
    const themeToApply = savedTheme || defaultTheme;

    document.documentElement.setAttribute('data-theme', themeToApply);
    themeToggle.textContent = themeToApply === 'dark' ? 'Light Side' : 'Dark Side';
};
