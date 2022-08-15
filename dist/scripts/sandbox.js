/**
 * MENU TOGGLE
 */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/**
 * REMOVE MENU MOBILE
 */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  //When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((element) => element.addEventListener("click", linkAction));

/**
 * CHANGE BACKGROUND HEADER
 */

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY > 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/**
 * CALCULATE BMI
 */
const calculateForm = document.getElementById("calculate-form"),
  inputHeight = document.getElementById("calculate-height"),
  inputWeight = document.getElementById("calculate-weight"),
  calculateMessage = document.getElementById("calculate-message");

const calculateBMI = (element) => {
  element.preventDefault();

  if (inputHeight.value === "" || inputWeight.value === "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    calculateMessage.textContent = "Fill in the Height and Weight ⌨️";
  } else {
    calculateMessage.classList.add("color-green");

    const height = inputHeight.value / 100;
    const weight = inputWeight.value;

    const bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
      calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😞`;
    } else if (bmi < 25) {
      calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
    } else {
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😞`;
    }

    inputHeight.value = "";
    inputWeight.value = "";
  }

  setTimeout(() => {
    calculateMessage.textContent = "";
  }, 3000);
};

calculateForm.addEventListener("submit", calculateBMI);
