const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuBtn.classList.toggle('fa-times');
});

// Active nav Y > 150px

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});

// FAQ

const faqContainer = document.querySelectorAll(".box-container .header");
const faqAngle = document.querySelector(".box-container .header i");
const faqContent = document.querySelector(".box-container .content");

// faqContainer.forEach((question) => {
//   question.addEventListener('click', () => {
//     if(faqContent.classList.contains('active')){
//       faqContent.classList.remove('active');
//       faqAngle.classList.toggle('active');
//     } else {
//       faqContent.classList.toggle('active');
//       faqAngle.classList.toggle('active');
//     }
//   });
// });

faqContainer.forEach((header) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");
  });
});

// Swipers

const homeSwiper = new Swiper('.home-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  grabCursor: true,
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
