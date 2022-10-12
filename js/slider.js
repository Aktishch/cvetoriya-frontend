if (document.querySelector('.main-slider .swiper-container')) {
    new Swiper('.main-slider .swiper-container', {
        navigation: {
            nextEl: '.main-slider__prev',
            prevEl: '.main-slider__next'
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        grabCursor: true,
        speed: +document.querySelector('.main-slider .swiper-container').getAttribute('data-speed') || 500,
        autoplay: {
            delay: +document.querySelector('.main-slider .swiper-container').getAttribute('data-delay') || 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });
}
new Swiper('.card .image-slider', {
    pagination: {
        el: '.card .swiper-pagination',
        clickable: true,
    },
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        568: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

new Swiper('.opportunities .image-slider', {
    pagination: {
        el: '.opportunities .swiper-pagination',
        clickable: true,
    },
    slidesPerGroup: 1,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        568: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 90,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 110,
        },
    },
});

new Swiper('.news .image-slider', {
    pagination: {
        el: '.news .swiper-pagination',
        clickable: true,
    },
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        568: {
            slidesPerView: 1.5,
        },
        990: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});


new Swiper('.limit-slider .image-slider', {
    pagination: {
        el: '.limit-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        568: {
            slidesPerView: 1.5,
        },
        990: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});