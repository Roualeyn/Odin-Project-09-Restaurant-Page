const breakfastMenu = [
    {name: "English Breakfast", price: 6.99},
    {name: "Flapjacks", price: 5.99},
    {name: "Pancakes", price: 4.99},
    {name: "Toasted Chicken and Mayonnaise", price: 5.99},
    {name: "Oats & Yoghurt", price: 4.99},
    {name: "Steak and Kidney Pie", price: 4.99},
];

const drinksMenu = [
    {name: "Coffee", price: 3.99},
    {name: "Black Tea", price: 2.99},
    {name: "Green Tea", price: 2.99},
    {name: "Soda", price: 3.99},
    {name: "Ice Tea", price: 3.99},
];

export default function menu(container) {
    addMenu(container, breakfastMenu, 'Breakfast Menu');
    addMenu(container, drinksMenu, 'Drinks Menu');
}

function addMenu(container, menu, headerText) {
    let div = document.createElement("div");
    div.classList.add("menu");
    let header = document.createElement("h2");
    header.innerText = headerText;
    div.appendChild(header);
    for (let item of menu) {
        let name = document.createElement("p");
        name.innerText = item.name;
        name.classList.add("name");
        let price = document.createElement("p");
        price.innerText = item.price
        price.classList.add("price");
        div.appendChild(name);
        div.appendChild(price);
    }
    container.appendChild(div)
}