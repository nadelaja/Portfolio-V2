//document.addEventListener('DOMContentLoaded', () => {
/*     Animate on Scoll */

// Hamburger menu 
window.hamburgerMenu = function () {
    var x = document.getElementById('navContent');
    if (x.className === 'nav-content') {
        x.className += ' responsive';
    } else {
        x.className = 'nav-content';
    }
}


// Main color logic
document.addEventListener('DOMContentLoaded', () => {
    const pageColorMap = {
        project1: '#ff9f63', // orange
        project2: '#f3769a',// salmon-pink?
        project3: '#783ddf', // purple - passes AAA
        project4: '#1dd1a1', // green
        project5: '#54a0ff', //blue
        about: '#e66060', // red
    };

    const page = document.body.getAttribute('data-page');
    document.documentElement.style.setProperty('--main-color', pageColorMap[page]);

    const textColor = {
        project1: '#000',
        project2: '#000',
        project3: '#fff',
        project4: '#000',
        project5: '#000'
    };

    document.documentElement.style.setProperty('--text-color', textColor[page]);
});


// Animate on scroll
AOS.init({
    duration: 600,
    once: false,
    startEvent: 'load'
});

// swipers

// A Night At Home Gallery Swiper Carousel
const swiperV1 = new Swiper('#my-gallery', {
    loop: true,
    pagination: { 
        el: '.swiper-pagination', 
        type: 'progressbar', 
        clickable: true },
    navigation: {
        nextEl: '#my-gallery .swiper-button-next',
        prevEl: '#my-gallery .swiper-button-prev',
    },
});

const swiperV2 = new Swiper('#my-gallery-v2', {
    loop: true,
    pagination: { 
        el: '#my-gallery-v2 .swiper-pagination',
        type: 'progressbar', 
        clickable: true },
    navigation: {
        nextEl: '#my-gallery-v2 .swiper-button-next',
        prevEl: '#my-gallery-v2 .swiper-button-prev',
    },
});

// Green Mechanics Swiper Carousels
/* const oldSwiper = new Swiper('.gm-old-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        }
    }
}); */

const newSwiper = new Swiper('.gm-new-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1024: {
            slidesPerView: 2
        }
    }
});


// Scroll to top button
let backTo = document.getElementById("backToTop");

// Show/hide the button when scrolling
window.onscroll = function () {
    backTo.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};

// Scroll to the top when the button is clicked
backTo.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.footer').fadeIn(500);
    } else {
        $('.footer').fadeOut(500);
    }
});