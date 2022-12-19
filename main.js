const parallax = document.getElementById('back');
const div = document.getElementById('first');
const section = document.getElementById('introSec');
const header = document.getElementById('navbar');
const nav = document.getElementById('header');

section.style.height = div.offsetWidth + 'px';

window.addEventListener('scroll', function () {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * -0.1 + 'px';
})

