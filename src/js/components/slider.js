import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
 Swiper.use([Navigation, Pagination, Autoplay]);
 const headerSliderSpeed = 1500;
 const swiper = new Swiper('.swiper', {
   slidesPerView: 'auto',
   loop: 'true',
   navigation: {
    nextEl: ".slider-arrows__next",
    prevEl: ".slider-arrows__prev",
  },
  speed: headerSliderSpeed,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  on:{
      init: function () {
        const paginationBullets = document.querySelectorAll('.header__pag .swiper-pagination-bullet');
        paginationBullets.forEach(el => {
          el.innerHTML = `<span class="header__bar"></span>`;
        });
      },
  },
 });
