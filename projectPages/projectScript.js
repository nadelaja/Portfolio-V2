//document.addEventListener('DOMContentLoaded', () => {
// Initialize Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
    },
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.lightbox .close');

// Open lightbox
document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', (e) => {
        lightboxImage.src = e.target.src;
        lightbox.classList.remove('hidden');
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Close lightbox on outside click!
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});

//});


// Main color logic
document.addEventListener('DOMContentLoaded', () => {
const pageColorMap = {
    project1: '#5f27cd', // purple
    project2: '#ff9ff3', // pink
    project3: '#2ecc71', // Green
};

const page = document.body.getAttribute('data-page');
document.documentElement.style.setProperty('--main-color', pageColorMap[page]);
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
