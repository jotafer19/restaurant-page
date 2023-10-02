import "./style.css";
import firstLoad from "./first-load.js";
import homePage from "./home.js"
import menuPage from "./menu.js";
import contactPage from "./contact.js";

firstLoad();

const body = document.querySelector("body");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

homeButton.addEventListener("click", () => {
    body.removeChild(document.querySelector("body > div"));
    homePage();
})
menuButton.addEventListener("click", () => {
    body.removeChild(document.querySelector("body > div"));
    menuPage();
})

contactButton.addEventListener("click", () => {
    body.removeChild(document.querySelector("body > div"));
    contactPage();
})