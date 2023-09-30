import home from "./home.js";

const firstLoad = () => {
    const body = document.querySelector("body");

    const container = document.createElement("main");
    container.setAttribute("id", "main-container");

    container.appendChild(home());

    body.appendChild(container);

    return body;
}

export default firstLoad;