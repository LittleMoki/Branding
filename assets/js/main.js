//header
const langButtons = document.querySelectorAll(".langBtn");

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
    } else {
      langButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    }
  });
});

// Services
// const cardBtn = document.getElementById("card__btn");
// const cardBox = document.getElementById("card__box");

// cardBox.addEventListener('mouseover',()=>{
//   cardBtn.classList.add('card__btn--active')
// })

// cardBox.addEventListener('mouseleave', ()=>{
//   cardBtn.classList.remove('card__btn--active')
// })// Этот код не рабочий он работал только на одну карточку пришлось усоверщенствовать код

const cardBoxes = document.querySelectorAll(".card__box");

cardBoxes.forEach((document) => {
  const cardBtn = document.querySelector(".card__btn");

  document.addEventListener("mouseover", () => {
    cardBtn.classList.add("card__btn--active");
  });

  document.addEventListener("mouseleave", () => {
    cardBtn.classList.remove("card__btn--active");
  });
});

// Swiper

new Swiper(".exaples__swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewhell: true,
  keyboard: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  loop: true,
});
new Swiper(".swiper__action", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewhell: true,
  keyboard: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
});
