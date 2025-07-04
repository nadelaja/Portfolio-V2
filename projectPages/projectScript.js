//document.addEventListener('DOMContentLoaded', () => {

//hamburger menu 
window.hamburgerMenu = function () {
    var x = document.getElementById("navContent");
    if (x.className === "nav-content") {
        x.className += " responsive";
    } else {
        x.className = "nav-content";
    }
}

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
            900: {
                slidesPerView: 2,
            },
        },
    });

/* lightGallery(document.getElementById('lightgallery'), {
    selector: 'a',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});

lightGallery(document.getElementById('lightgallery-2'), {
    selector: 'a',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});
 */





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