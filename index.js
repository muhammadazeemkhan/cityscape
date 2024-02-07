const slider_1 = new Swiper(".swiper-1", {
  // Optional parameters

  // spaceBetween: 10,

  // direction: "horizontal",

  // slidesPerView: 1,
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },
  // speed: 5000,
  // loop: true,
  // pagination: {
  //   clickable: true,
  // },

  direction: "horizontal",

  loop: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  pagination: {
    clickable: true,
  },

  spaceBetween: 10,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination-2",
  // },

  breakpoints: {
    1181: {
      slidesPerView: 1,
    },
    1180: {
      slidesPerView: 1,
    },
    1020: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-prev-swiper-1-left",
    prevEl: ".swiper-button-next-swiper-1-right",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: ".swiper-scrollbar",
  },
});

const swiper = new Swiper(".swiper-3", {
  // Optional parameters

  spaceBetween: 15,

  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1181: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 5000,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperTwo = new Swiper(".swiper-2", {
  // Optional parameters
  direction: "horizontal",

  loop: true,

  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  pagination: {
    clickable: true,
  },

  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-2",
  },

  breakpoints: {
    1181: {
      slidesPerView: 4,
    },
    1180: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-swiper-2-right",
    prevEl: ".swiper-button-prev-swiper-2-left",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: ".swiper-scrollbar",
  },
});

const slider = new Swiper(".swiper-4", {
  // Optional parameters
  direction: "horizontal",

  loop: true,

  // autoplay: 2500,
  // autoplayDisableOnInteraction: true,

  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-4",
  },

  breakpoints: {
    1181: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-right",
    prevEl: ".swiper-button-prev-left",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: ".swiper-scrollbar",
  },
});

const testimonials = new Swiper(".swiper-testimonials", {
  // Optional parameters
  direction: "horizontal",

  loop: true,

  // autoplay: 2500,
  // autoplayDisableOnInteraction: true,

  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-4",
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1181: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-prev-swiper-testimonials-right",
    prevEl: ".swiper-button-prev-swiper-testimonials-left",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: ".swiper-scrollbar",
  },
});

const partnerSlider = new Swiper(".swiper-partners", {
  loop: true,
  freeMode: true,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 4,
  breakpoints: {
    1180: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 3,
    },
    370: {
      slidesPerView: 2,
    },
  },
  loop: true,
  autoplay: {
    delay: false,
    disableOnInteraction: true,
  },
  freeMode: true,
  speed: 4000,
  freeModeMomentum: false,
});

// if i stop on hover

// var transformValue;
// $(swiper.wrapper).hover(function() {
//   swiper.stopAutoplay();

//   //here you remember the translation, the swiper originally wanted to go
//   transformValue = this.style.transform;

//   //then you set the transition duration on zero

//   this.style.transitionDuration = "0ms";

//   //then you set the wrapper translation hard on its current translation value
//   //this might also work with swiper.setWrapperTranslate(swiper.getWrapperTranslate())
//   this.style.transform = "translate3d(" + swiper.getWrapperTranslate() + "px, 0px, 0px)";

// }, function() {

//   //here you set the transition duration back to it's original value
//   this.style.transitionDuration = swiper.params.speed + "ms";

//   //and give it back its originial destination
//   this.style.transform = transformValue;

//   //then start autoplay again
//   swiper.startAutoplay();
// })

// const parallax = document.querySelectorAll(".ukiyo");
// new Ukiyo(parallax, {
//   scale: 1.1,
// });

// js

const parallax_2 = document.querySelector(".ukiyo-slider-2");

new Ukiyo(parallax_2, {
  scale: 1.1, // 1~2 is recommended
  speed: 1.5, // 1~2 is recommended
  willChange: true,
  wrapperClass: "ukiyo-wrapper",
  externalRAF: false,
});

const parallax_testimonials = document.querySelector(".ukiyo-testimonials");

new Ukiyo(parallax_testimonials, {
  scale: 1.1, // 1~2 is recommended
  speed: 1.5, // 1~2 is recommended
  willChange: true,
  wrapperClass: "ukiyo-wrapper",
  externalRAF: false,
});

const parallax_3 = document.querySelector(".ukiyo-slider-3");

new Ukiyo(parallax_3, {
  scale: 1.2, // 1~2 is recommended
  speed: 2, // 1~2 is recommended
  willChange: true,
  wrapperClass: "ukiyo-wrapper",
  externalRAF: false,
});

const parallax_4 = document.querySelector(".ukiyo-slider-4");

new Ukiyo(parallax_4, {
  scale: 1.1, // 1~2 is recommended
  speed: 2, // 1~2 is recommended
  willChange: true,
  wrapperClass: "ukiyo-wrapper",
  externalRAF: false,
});

window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".selector-1", {
    scrollY: {
      translateX: [
        ["elOutY", "elCenterY", "elInY"],
        [10, "screenWidth/10", "screenWidth"],
      ],
    },
  });

  lax.addElements(".selector-2", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "screenWidth/10", "screenWidth"],
      ],
    },
  });
};
