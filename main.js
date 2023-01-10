const parallax = document.getElementById('back');
const div = document.getElementById('first');
const section = document.getElementById('introSec');
const header = document.getElementById('navbar');
const nav = document.getElementById('header');


if (window.innerWidth > 1002) {
    section.style.height = div.offsetWidth + 'px';    

    window.addEventListener('scroll', function () {
        // let offset = window.scrollY;
        // parallax.style.backgroundPositionY = offset * -0.1 + 'px';
        // console.log(window.pageYOffset);
        if (window.pageYOffset > 900) {
            let offset = window.scrollY;
            parallax.style.backgroundPositionY = offset * -0.15 + 250 + 'px';
        }

        if(window.innerHeight > 590) {
            let offset = window.scrollY;
            parallax.style.backgroundPositionY = offset * 0 + 'px';
        } 
    })
    
}


const swiper = new Swiper('.swiper', {

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});




















