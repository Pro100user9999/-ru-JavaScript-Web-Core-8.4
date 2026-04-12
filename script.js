let mySwiper = null;

function initSwiper() {
  // Инициализируем Swiper только на мобильных (< 768px)
  if (window.innerWidth < 768) {
    if (!mySwiper) {
      mySwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
  }
  // Уничтожаем Swiper на планшете и десктопе (≥ 768px)
  else if (mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
}

// Инициализация при загрузке
initSwiper();

// Пересоздание при изменении размера окна
window.addEventListener('resize', initSwiper);