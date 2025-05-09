let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let themeToggle = document.querySelector('#theme-toggle');
let clickSound = new Audio('click.mp3');
let lightModeSound = new Audio('audio/light_side.wav');
let darkModeSound = new Audio('audio/dark_side.wav');

clickSound.volume = 0.25;
lightModeSound.volume = 0.25;
darkModeSound.volume = 0.25;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    clickSound.play();
};

themeToggle.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    themeToggle.textContent = newTheme === 'dark' ? 'Light Side' : 'Dark Side';

    if (newTheme === 'dark') {
        darkModeSound.play();
    } else {
        lightModeSound.play();
    }
};

window.onload = () => {
    try {
        const savedTheme = localStorage.getItem('theme');
        const defaultTheme = 'dark';
        const themeToApply = savedTheme || defaultTheme;

        document.documentElement.setAttribute('data-theme', themeToApply);
        themeToggle.textContent = themeToApply === 'dark' ? 'Light Side' : 'Dark Side';
    } catch (error) {
        console.error('Error applying theme:', error);
    } finally {
        document.body.style.visibility = 'visible';
    }
};
