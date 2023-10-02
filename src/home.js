export default function homePage() {
    const body = document.querySelector("body");
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", "home-container");

    const welcomeText = document.createElement("p");
    welcomeText.textContent = "Welcome to Baratie Restaurant";
    homeContainer.appendChild(welcomeText);

    const bannerText = document.createElement("h2");
    bannerText.textContent = "EAT HEALTHY AND DELICIOUS FOOD";
    homeContainer.appendChild(bannerText);

    const descriptionText = document.createElement("h3");
    descriptionText.innerHTML = "Baratie is a restaurant located by the sea and surrounded by gardens." + 
    "<br>" + "We have awesome recipes and the most talented chefs in town.";
    homeContainer.appendChild(descriptionText);

    body.appendChild(homeContainer)

    return body;
}