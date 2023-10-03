import firstLoad from "./first-load.js";
import homePage from "./home.js"
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const setActiveButton = (button) => {
    const currentActive = document.querySelector(".active");

    if (button != currentActive) {
        currentActive.classList.toggle("active");
        button.classList.toggle("active");
    }
}

const eventListeners = () => {
    const body = document.querySelector("body");
    const browsingButtons = document.querySelectorAll(".web-browsing");
    
    browsingButtons.forEach(button => {
    
        button.addEventListener("click", (event) => {
            setActiveButton(event.target);
            switch (event.target.textContent) {
                case "Home":
                    body.replaceChild(homePage(),document.querySelector(".main-container"));
                    break;
                case "Menu":
                    body.replaceChild(menuPage(), document.querySelector(".main-container"))
                    break;
                case "Contact":
                    body.replaceChild(contactPage(), document.querySelector(".main-container"))
                    break;
            }
        })
    })
}

export default function webFunctionality() {
    firstLoad();
    eventListeners();
}
