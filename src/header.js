import createLogo from "./create-logo";

export default function createHeader() {    
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const title = document.createElement("div");
    title.classList.add("restaurant-logo");
    title.append(createLogo());

    const tabbedBrowsing = document.createElement("ul");
    tabbedBrowsing.setAttribute("id", "tab-container");

    const homeTab = document.createElement("li");
    homeTab.textContent = "Home";
    homeTab.classList.add("web-browsing");
    homeTab.setAttribute("id", "home-btn");
    const menuTab = document.createElement("li");
    menuTab.textContent = "Menu";
    menuTab.classList.add("web-browsing");
    menuTab.setAttribute("id", "menu-btn");
    const contactTab = document.createElement("li");
    contactTab.textContent = "Contact";
    contactTab.classList.add("web-browsing");
    contactTab.setAttribute("id", "contact-btn");

    tabbedBrowsing.append(homeTab, menuTab, contactTab);

    header.appendChild(title);
    header.appendChild(tabbedBrowsing);

    return header;
}