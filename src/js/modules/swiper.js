import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import our custom Swiper styles
import '../../css/modules/swiper.css';

export const initSwiper = () => {
  // Initialize both sliders
  const slider1 = new Swiper('.swiper.slider1', {
    modules: [Navigation, Pagination, A11y],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 800,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // Mobile
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      // Tablet
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      // Desktop
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });

  const slider2 = new Swiper('.swiper.slider2', {
    modules: [Navigation, Pagination, A11y],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 800,

    // Navigation arrows (using the same navigation as slider1)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
}; 