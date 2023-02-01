export default function contact(container) {
    let aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "Contact Us";
    let aboutText = document.createElement("p");
    aboutText.innerHTML = `Please contact us using our office number at <a href="tel:01234567891">12345678910.</a> Our opening hours are 9 to 5, Mondays through Friday.`;
    container.appendChild(aboutHeader);
    container.appendChild(aboutText);
}