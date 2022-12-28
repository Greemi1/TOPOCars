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

function toggleAccordion() {
  // Get the header element
  const header = this;

  // Get all the header elements
  const headers = document.querySelectorAll('.box .header');

  // Close all the headers
  headers.forEach(function (otherHeader) {
    if (otherHeader !== header) {
      // Remove the "active" class from the header
      otherHeader.classList.remove('active');

      // Get the content element
      const content = otherHeader.nextElementSibling;

      // Remove the "show" class from the content
      content.classList.remove('active');

      // Toggle the angle icon
      const icon = otherHeader.querySelector('i');
      icon.classList.remove('active');
    }
  });

  // Toggle the "active" class on the header
  header.classList.toggle('active');

  // Get the content element
  const content = header.nextElementSibling;

  // Toggle the "show" class on the content
  content.classList.toggle('active');

  // Toggle the angle icon
  const icon = header.querySelector('i');
  icon.classList.toggle('active');
}

// Get all the header elements
const headers = document.querySelectorAll('.box .header');

// Attach the toggleAccordion function to each header
headers.forEach(function (header) {
  header.addEventListener('click', toggleAccordion);
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
