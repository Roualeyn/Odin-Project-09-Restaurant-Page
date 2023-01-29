export default function about(container) {
    let textBox = document.createElement("div");
    let aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About Us";
    let aboutText = document.createElement("p");
    aboutText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Vivamus finibus nisl ut est gravida, vel auctor ipsum finibus. Phasellus tempor 
     suscipit est eget venenatis. Vestibulum quis nisl sit amet erat vehicula porta. 
     Aliquam erat volutpat. Aliquam vehicula pharetra odio eget placerat. Fusce non 
     cursus metus, eget molestie massa. Curabitur quis pellentesque justo, quis 
     elementum neque. Vestibulum posuere dolor non volutpat blandit. Praesent in 
     semper erat. Sed consectetur massa at massa pellentesque, a congue mi 
     molestie. Aenean condimentum, dolor in eleifend volutpat, nibh nisi sodales 
     augue, sit amet fermentum turpis nisi eu nisl. Aliquam volutpat felis libero, 
     dapibus pretium tellus pretium et. Maecenas elementum risus et ex ornare, vitae 
     euismod nisi hendrerit.`

    textBox.appendChild(aboutHeader);
    textBox.appendChild(aboutText);
    container.appendChild(textBox);
        
    let image = document.createElement("img");
    image.classList.add("aboutImage");
    image.src = "./aboutImg.jpg";
    container.appendChild(image);
}