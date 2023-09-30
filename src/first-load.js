import header from "./header.js";
import home from "./home.js";

const firstLoad = () => {
    const body = document.querySelector("body");

    const container = document.createElement("main");
    container.setAttribute("id", "main-container");

    container.appendChild(home());

    body.append(header(), container);

    return body;
}

export default firstLoad;