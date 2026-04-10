//About Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".program-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 24,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    },
  });
});
//About Slider

//About Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".award-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 24,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    },
  });
});
//About Slider

//Advisor Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".advisor-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 24,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    },
  });
});
//About Slider

//Gallery Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".gallery-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 24,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    },
  });
});
//Gallery Slider

//Events Slider
document.addEventListener("DOMContentLoaded", function () {

  new Swiper(".events-swiper", {
    loop: true,
    speed: 800,                  
    spaceBetween: 24,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: false,

    slidesPerView: "auto",         
    freeMode: true,                
    freeModeMomentum: false,

    breakpoints: {
      320: { slidesPerView: 1, },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
      1440: { slidesPerView: 3 },
    },
  });
});
//Gallery Slider

//Chairman message Slider
new Swiper(".chairman-swiper", {
  loop: true,
  speed: 800,

  direction: "horizontal", // mobile

  breakpoints: {
    768: {
      direction: "vertical",

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    }
  }
});
//Chairman message Slider

//Sidebar Slider
new Swiper(".recent-posts-slider", {
  direction: "vertical",
  slidesPerView: 4,
  // spaceBetween: 20,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
//Sidebar Slider

//infrastructure Tab
const tabs = document.querySelectorAll(".infra-tabs .nav-link");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", function () {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.add("d-none"));

    this.classList.add("active");
    document.getElementById(this.dataset.tab).classList.remove("d-none");

  });
});
//infrastructure Tab

//lab Slider
new Swiper(".labSwiper", {
  slidesPerView: 1,
  // spaceBetween: 20,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
//lab Slider


// /* Disable Right Click */
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// /* Disable common DevTools keys */
// document.addEventListener('keydown', function (e) {

//     // F12
//     if (e.keyCode === 123) {
//         e.preventDefault();
//         return false;
//     }

//     // Ctrl+Shift+I / J / C
//     if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
//         e.preventDefault();
//         return false;
//     }

//     // Ctrl+U (View Source)
//     if (e.ctrlKey && e.key.toUpperCase() === 'U') {
//         e.preventDefault();
//         return false;
//     }

//     // Ctrl+S (Save Page)
//     if (e.ctrlKey && e.key.toUpperCase() === 'S') {
//         e.preventDefault();
//         return false;
//     }
// });