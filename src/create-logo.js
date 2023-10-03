export default function createLogo() {
    const logoContainer = document.createElement("span");
    const baratieWord = document.createElement("span");
    baratieWord.classList.add("baratie-logo-word");
    baratieWord.textContent = "Baratie";

    const restaurantWord = document.createElement("span");
    restaurantWord.textContent = " Restaurant";

    logoContainer.append(baratieWord, restaurantWord);

    return logoContainer;
}