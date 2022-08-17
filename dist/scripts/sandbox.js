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

  this.scrollY > 1
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

/**
 * EMAIL JS
 */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUserEmail = document.getElementById("contact-user");

const sendEmail = (element) => {
  element.preventDefault();

  if (contactUserEmail.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "You mest enter your email 👆️";
  } else {
    const serviceID = "service_is7aihq",
      templateID = "template_pnsq7q3",
      publicKey = "Z1cl93KKM9BsCMhpO";

    emailjs.sendForm(serviceID, templateID, contactForm, publicKey).then(
      () => {
        contactMessage.classList.add("color-green");
        contactMessage.textContent = "You registered successfully 🦾";
      },
      (error) => {
        alert("Oops! something has failed...", error);
      }
    );

    contactUserEmail.value = "";
  }

  setTimeout(() => {
    contactMessage.textContent = "";
  }, 3000);
};

contactForm.addEventListener("submit", sendEmail);

/**
 * SCROLL SECTIONS - ACTIVE LINKS
 */

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/**
 * SCROLL-UP
 */

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
