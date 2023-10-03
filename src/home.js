import createLogo from "./create-logo.js"

export default function homePage() {
    const body = document.querySelector("body");
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", "home-container");
    homeContainer.classList.add("main-container");

    const welcomeText = document.createElement("h3");
    welcomeText.textContent = "Welcome to ";
    welcomeText.appendChild(createLogo());
    homeContainer.appendChild(welcomeText);

    const bannerText = document.createElement("h2");
    const healthyWord = document.createElement("span");
    healthyWord.classList.add("add-orange-color");
    healthyWord.textContent = "HEALTHY";
    const deliciousWord = document.createElement("span");
    deliciousWord.textContent = "DELICIOUS";
    deliciousWord.classList.add("add-orange-color");
    bannerText.append("EAT ", healthyWord, " AND ", deliciousWord, " FOOD");
    homeContainer.append(bannerText);

    const descriptionText = document.createElement("h3");
    descriptionText.innerHTML = "Our restaurant is located by the sea and surrounded by gardens." + 
    "<br>" + "We have awesome recipes and the most talented chefs in town.";
    homeContainer.appendChild(descriptionText);

    return homeContainer;
}