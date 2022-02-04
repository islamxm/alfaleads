import Parllax from 'parallax-js';
import Swiper, {Scrollbar, EffectCube, EffectFlip, Autoplay, Thumbs, Navigation} from 'swiper';
import {WOW} from 'wowjs';

import { headerBlur } from './components/headerBlur';
import { headerScroll } from './components/headerScroll';
import { mobmenu } from './components/mobmenu';


document.addEventListener('DOMContentLoaded', () => {

    new WOW().init();


    const scene = document.getElementById('scene');
    const footerScene = document.querySelector('.footer__scene');

    const foots = new Parllax(footerScene);
    const test = new Parllax(scene); 

    if(window.innerWidth <= 1000) {
        test.destroy();
        foots.destroy();
    }

    const whySwiper = new Swiper('.why__slider', {
       
        modules: [Scrollbar, Autoplay],
        breakpoints: {
            1000 : {
                slidesPerView: 2,
                autoplay: {
                    delay: 3000
                },
                scrollbar: {
                    el: '.why__scrollbar',
                    draggable: true,
                    dragClass: 'why__scrollbar_drag'
                },
            }
        }

    });

    if(window.innerWidth < 1000) {

        whySwiper.destroy(true, false);
    }


    

    const histThumbs = new Swiper('.hist__thumbs', {
        modules: [Scrollbar, Thumbs],
        slidesPerView: 3,
        breakpoints: {
            1000: {
                slidesPerView: 5,
                spaceBetween: 20,
                // centeredSlides: true,
                slideToClickedSlide: true,
            }
        }
    });

    const histSwiper = new Swiper('.hist__slider', {
        modules: [Thumbs],
        
        thumbs: {
            swiper: histThumbs
        },
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 1,
        breakpoints: {
            1000: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
                slideToClickedSlide: true,
                initialSlide: 1,
            }
        }
    });


    const testAtropos = Atropos({
        el: '.my-atropos',
        // alwaysActive: true,
        shadow: false,
        highlight: false,
        activeOffset: 30

    });

    if(window.innerWidth <= 1000) {
        testAtropos.destroy();
    } 
    if(window.innerWidth > 1000) {
    }

    const revSlider = new Swiper('.rev__slider', {
        modules: [Scrollbar],
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
            el: '.rev__slider_scrollbar',
            dragClass: 'rev__slider_scrollbar_drag',
            draggable: true
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });


    

    const teamSlider = new Swiper('.team__slider', {
        modules: [Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000
        },

        breakpoints: {
            1000: {
                slidesPerView: 3,
                spaceBetween: 40,
                navigation: {
                    prevEl: '.team__prev',
                    nextEl: '.team__next'
                },
            }
        }
    });

    // const teamPrev = document.querySelector('.team__prev');
    // const teamNext = document.querySelector('.team__next');

    // if(teamPrev) {
    //     teamPrev.addEventListener('click', () => {
    //         teamSlider.slidePrev();
    //     });
    // }

    // if(teamNext) {
    //     teamNext.addEventListener('click', () => {
    //         teamNext.slideNext();
    //     });
    // }


    headerBlur('.header');
    headerScroll('.header');
    mobmenu();


    

    

});





