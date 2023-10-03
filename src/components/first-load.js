import createHeader from "./header.js";
import homePage from "./home.js";

export default function firstLoad() {
    const body = document.querySelector("body");

    body.append(createHeader(), homePage());

    return body;
}