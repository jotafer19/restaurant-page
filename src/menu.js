import meals from "./meals-data.js";
import createCard from "./meals-cards-generator.js"

export default function menu() {
    const body = document.querySelector("body");
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");

    for (let meal of meals) {
        let newMeal = createCard(meal);
        menuContainer.appendChild(newMeal);
    }

    body.appendChild(menuContainer)

    return body;
}