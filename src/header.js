export default function() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const title = document.createElement("h1");
    title.setAttribute("id", "restaurant-name");
    title.textContent = "My Restaurant";

    header.appendChild(title);
    return header;
}