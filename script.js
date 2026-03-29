const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true, // бесконечная прокрутка
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});