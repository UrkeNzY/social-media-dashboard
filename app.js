const bodyElement = document.querySelector("body");

const headerElement = document.querySelector("header");
const h2Elements = document.querySelectorAll("h2");
const paragraphElements = document.querySelectorAll("p");
const horizontalLineElement = document.querySelector("hr");

const bottomCardTitle = document.getElementById("bottom-card-title");

const socialCards = document.querySelectorAll(".social-card");
const statsCards = document.querySelectorAll(".stats-card");

const numberElements = document.querySelectorAll(".number");

const attributionElement = document.querySelector(".attribution");

const themeToggleButton = document.getElementById("theme-toggle");

let currentTheme = "light";

themeToggleButton.addEventListener("click", switchTheme);

function switchTheme() {
  if (currentTheme === "light") {
    currentTheme = "dark";
    changeToDark();
  } else if (currentTheme === "dark") {
    currentTheme = "light";
    changeToLight();
  }
}

function changeToDark() {
  bodyElement.classList.add("dark");
  headerElement.classList.add("dark");

  for (const h2Element of h2Elements) {
    h2Element.classList.add("dark");
  }

  for (const paragraphElement of paragraphElements) {
    paragraphElement.classList.add("dark");
  }

  horizontalLineElement.classList.add("dark");

  bottomCardTitle.classList.add("dark");

  for (const numberElement of numberElements) {
    numberElement.classList.add("dark");
  }

  for (const socialCard of socialCards) {
    socialCard.classList.add("dark");
  }

  for (const statsCard of statsCards) {
    statsCard.classList.add("dark");
  }

  attributionElement.classList.add("dark");

  themeToggleButton.classList.add("dark");
}

function changeToLight() {
  bodyElement.classList.remove("dark");
  headerElement.classList.remove("dark");

  for (const h2Element of h2Elements) {
    h2Element.classList.remove("dark");
  }

  for (const numberElement of numberElements) {
    numberElement.classList.remove("dark");
  }

  for (const paragraphElement of paragraphElements) {
    paragraphElement.classList.remove("dark");
  }

  horizontalLineElement.classList.remove("dark");

  bottomCardTitle.classList.remove("dark");

  for (const socialCard of socialCards) {
    socialCard.classList.remove("dark");
  }

  for (const statsCard of statsCards) {
    statsCard.classList.remove("dark");
  }

  attributionElement.classList.remove("dark");

  themeToggleButton.classList.remove("dark");
}
