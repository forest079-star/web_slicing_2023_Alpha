
// import Swiper from 'swiper';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation'; 'swiper/css/autoplay';

// 初始化 swiper
// const swiper = new Swiper('.swiper', {
//   // 套用模組
//   modules: [Navigation, Autoplay],
//   speed: 700,
//   autoplay: {
//     delay: 1500,
//   },
//   navigation: {
//     nextEl: '.swipter-next',
//     prevEl: '.swipter-prev',
//   },
// });



import Swiper from 'swiper/bundle';

var swiper = new Swiper('.info-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const albumsSwiper = new Swiper('.albums-swiper', {
//   slidesPerView: 'auto',
//   speed: 10000,
//   allowTouchMove: false,
//   loop: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
// });


// modal
  // const registerBtn = document.querySelector('#registerBtn');
  // registerBtn.addEventListener('click', (e) => {
  //   e.preventDefault();
  // });




