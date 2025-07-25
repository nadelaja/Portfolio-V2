//document.addEventListener('DOMContentLoaded', () => {
/*     Animate on Scoll */

//hamburger menu 
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
        project1: '#F9A8D4', // pink
        project2: '#54a0ff',// blue
        project3: '#783ddf', // purple
        project4: '#1dd1a1', //green
    };

    const page = document.body.getAttribute('data-page');
    document.documentElement.style.setProperty('--main-color', pageColorMap[page]);

    const textColor = {
        project1: '#000',
        project2: '#000',
        project3: '#fff',
        project4: '#000'
    };

    document.documentElement.style.setProperty('--text-color', textColor[page]);
});


AOS.init({
    duration: 600,
    once: false,
    startEvent: 'load'
});

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

const oldSwiper = new Swiper('.gm-old-swiper', {
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
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

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
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
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