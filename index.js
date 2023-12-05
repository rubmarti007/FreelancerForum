const names = ["Jimmy", "Josh", "Mark", "Maria", "Anna"];
const occupations = ["gardener", "programmer", "teacher"];

const freelancers = [
{ name: "Oscar", price: 25, occupation: "gardener" },
{ name: "Alexa", price: 51, occupation: "programmer" }
];

function getRandomItem(array) {
const randomIndex = Math.floor(Math.random() * array.length);
return array[randomIndex];
}

function createFreelancer() {
const name = getRandomItem(names);
const occupation = getRandomItem(occupations);
const price = Math.floor(Math.random() * 20) + 20;

const newFreelancer = { name, price, occupation };
freelancers.push(newFreelancer);

const freelancerContainer = document.getElementById("freelancer-container");

const freelancerElement = document.createElement("div");
freelancerElement.innerHTML = `<p>Name: ${name}</p><p>Occupation: ${occupation}</p><p>Price: $${price}</p>`;

freelancerContainer.appendChild(freelancerElement);
}

function updateAveragePrice() {
const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
const averagePrice = totalPrices / freelancers.length;
document.getElementById("average-price").innerText = `Average Price: $${averagePrice.toFixed(2)}`;
}

setInterval(() => {
createFreelancer();
updateAveragePrice();
}, 5000);
