export default function createCard(meal) {
    const mealContainer = document.createElement("div");
    mealContainer.classList.add("meal-card");

    const mealImage = new Image();
    mealImage.classList.add("meal-image");
    mealImage.src = meal.image;

    const mealName = document.createElement("p");
    mealName.classList.add("meal-name");
    mealName.textContent = meal.name;

    const mealDescription = document.createElement("p");
    mealDescription.classList.add("meal-description");
    mealDescription.textContent = meal.description;

    const mealPrice = document.createElement("p");
    mealPrice.classList.add("meal-price");
    mealPrice.textContent = meal.price;

    mealContainer.append(mealImage, mealName, mealDescription, mealPrice);
    
    return mealContainer;
}