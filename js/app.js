AOS.init();

const bars = document.querySelector('.bars');
const slide = document.querySelector('.nav-links');
bars.addEventListener('click', () => {
    // bars.classList.toggle('bars-active');
    if (bars.classList.contains('bars-active')) {
        bars.classList.remove('bars-active');
    } else {
        bars.classList.add('bars-active');
    }
    if (slide.classList.contains('slide')) {
        slide.classList.remove('slide')
    } else {
        slide.classList.add('slide')
    }
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    // spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            // spaceBetween: 10
        },
        420: {
            slidesPerView: 2,
            // spaceBetween: 10
        },
        // when window width is >= 480px
        680: {
            slidesPerView: 3,
            // spaceBetween: 10
        },
        // when window width is >= 640px
        988: {
            slidesPerView: 4,
            // spaceBetween: 40
        },
        1200: {
            slidesPerView: 5,
            // spaceBetween: 10
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.onscroll = function () { myFunction() };

var navbar = document.querySelector("nav");
var home = document.querySelector('.hero-slider');
var sticky = navbar.offsetHeight;

function myFunction() {
    if (window.pageYOffset > sticky - 90) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


$(function () {
    $(".counter-number").counterUp({
        delay: 10,
        time: 1800,
    });
});

$(function () {
    $(".date").text(function () {
        const date = new Date();
        let year = date.getFullYear();
        return year;
    });
});