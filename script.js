const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let mySwiper = null;

function initSwiper() {
  if (!mySwiper) {
    mySwiper = new Swiper('#mobileSwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  else if (window.innerWidth > 767 && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);