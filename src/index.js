///////////////// Create Header Bar /////////////////
const header = document.createElement("header");
const headerTitle = document.createElement("h1");
headerTitle.textContent = "Restaurant Name";
header.appendChild(headerTitle);

const navBar = document.createElement("nav");
const aboutButton = document.createElement("button");
aboutButton.textContent = "About";
navBar.appendChild(aboutButton);
const contactButton = document.createElement("button");
contactButton.textContent = "Contact";
navBar.appendChild(contactButton);
const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
navBar.appendChild(menuButton);
header.appendChild(navBar);
document.querySelector("body").appendChild(header);

const contentDiv = document.createElement("div");
contentDiv.id = "content";
document.querySelector("body").appendChild(contentDiv);

/////////////////////////////////////////////////////
