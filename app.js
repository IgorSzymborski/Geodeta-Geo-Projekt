"use strict";
const nav = document.querySelector(".nav");
const footerNav = document.querySelector(".footer__nav");

const handleOver = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleOver.bind(0.65));
nav.addEventListener("mouseout", handleOver.bind(1));

document.querySelectorAll("[data-slider]").forEach((container) => {
  const slider = container.querySelector(".slider");
  const slides = container.querySelectorAll(".slide");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");
  let index = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
  });
});

const hamburgerButton = document.getElementById("hamburger-button");
const contactBox = document.querySelector(".header__contact-box");
const header = document.querySelector(".header");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");

  nav.classList.toggle("hidden");
  contactBox.classList.toggle("hidden");
  hamburgerButton.style.position = "fixed";
  document.body.style.overflow = "hidden";

  if (!hamburgerButton.classList.contains("active")) {
    document.body.style.overflowY = "scroll";
  }
});

const links = document.querySelectorAll(".nav__link");
const currentPage = window.location.pathname.split("/").pop();
console.log(window.location.pathname);
links.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("col");
  }
});
