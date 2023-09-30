import header from "./header.js";

const homeScreen = () => {
    const content = document.querySelector("#content");
    content.appendChild(header());
}

export default homeScreen;