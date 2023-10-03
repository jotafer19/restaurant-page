import meals from "./meals-data.js";
import createCard from "./meals-cards-generator.js"

export default function menu() {
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");
    menuContainer.classList.add("main-container");

    for (let meal of meals) {
        let newMeal = createCard(meal);
        menuContainer.appendChild(newMeal);
    }

    return menuContainer;
}