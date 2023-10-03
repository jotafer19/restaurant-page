import mapImage from "./assets/images/maps.png";
import phone from "./assets/images/phone.svg";
import address from "./assets/images/address.svg";
import createLogo from "./create-logo";

export default function contact() {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact-container");
    contactContainer.classList.add("main-container");

    const informationContainer = document.createElement("div");
    informationContainer.setAttribute("id", "contact-information");
    const restaurantLogo = document.createElement("div");
    restaurantLogo.classList.add("restaurant-logo");
    restaurantLogo.appendChild(createLogo());
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("info-container");
    const addressImage = new Image();
    addressImage.src = address;
    addressImage.classList.add("icon");
    const addressTextContainer = document.createElement("div");
    addressTextContainer.innerHTML = "3375 Franklin Street," + "<br>" + "36104, Montgomery," + "<br>" +  "Alabama";
    addressContainer.append(addressImage, addressTextContainer);
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("info-container");
    const phoneImage = new Image();
    phoneImage.src = phone;
    phoneImage.classList.add("icon");
    const phoneTextContainer = document.createElement("div");
    phoneTextContainer.innerHTML = "334-652-0977" + "<br>" + "334-325-6533";
    phoneContainer.append(phoneImage, phoneTextContainer);

    informationContainer.append(restaurantLogo, addressContainer, phoneContainer);

    const contactForm = document.createElement("form");
    contactForm.setAttribute("id", "contact-form");

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("input-container");
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    nameLabel.setAttribute("for", "name-input");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name-input");
    nameInput.setAttribute("required", "");
    nameContainer.append(nameLabel, nameInput);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("input-container");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.setAttribute("for", "email-input");
    const emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email-input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("required", "");
    emailContainer.append(emailLabel, emailInput);

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("input-container");
    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    messageLabel.setAttribute("for", "message-input");
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message-input");
    messageInput.setAttribute("required", "");
    messageContainer.append(messageLabel, messageInput);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-btn");
    submitButton.classList.add("btn");
    submitButton.textContent = "Submit";
    
    contactForm.append(nameContainer, emailContainer, messageContainer, submitButton);

    const mapContainer = document.createElement("div");
    mapContainer.setAttribute("id", "map-container");
    const mapLocation = new Image();
    mapLocation.src = mapImage;
    mapLocation.setAttribute("id", "mapImage")
    mapContainer.appendChild(mapLocation);

    contactContainer.append(informationContainer, contactForm, mapContainer);

    return contactContainer;

}