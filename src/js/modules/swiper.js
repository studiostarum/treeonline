import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// Import our custom Swiper styles
import '../../css/modules/swiper.css';

export const initSwiper = () => {
  // Initialize both sliders
  const aboutSlider1 = new Swiper('.slider1', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.gallery20_arrow.swiper-button-next',
      prevEl: '.gallery20_arrow.swiper-button-prev',
    }
  });

  const aboutSlider2 = new Swiper('.slider2', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.gallery20_arrow.swiper-button-next',
      prevEl: '.gallery20_arrow.swiper-button-prev',
    }
  });
}; 