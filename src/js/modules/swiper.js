import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import our custom Swiper styles
import '../../css/modules/swiper.css';

export const initSwiper = () => {
  // Initialize both sliders
  const aboutSlider1 = new Swiper('.about-us_slider .slider1.w-dyn-list', {
    modules: [Navigation, Pagination, A11y],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 800,
    
    // Navigation arrows
    navigation: {
      nextEl: '.about-us_slider .gallery20_arrow.swiper-button-next',
      prevEl: '.about-us_slider .gallery20_arrow.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });

  const aboutSlider2 = new Swiper('.about-us_slider .slider2.w-dyn-list', {
    modules: [Navigation, Pagination, A11y],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 800,
    
    // Navigation arrows
    navigation: {
      nextEl: '.about-us_slider .gallery20_arrow.swiper-button-next',
      prevEl: '.about-us_slider .gallery20_arrow.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });

  // Add console logs for debugging
  console.log('Swiper initialized:', {
    slider1: aboutSlider1,
    slider2: aboutSlider2,
    slider1Elements: document.querySelectorAll('.about-us_slider .slider1.w-dyn-list').length,
    slider2Elements: document.querySelectorAll('.about-us_slider .slider2.w-dyn-list').length,
    navigationNext: document.querySelectorAll('.about-us_slider .gallery20_arrow.swiper-button-next').length,
    navigationPrev: document.querySelectorAll('.about-us_slider .gallery20_arrow.swiper-button-prev').length
  });
}; 