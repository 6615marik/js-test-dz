function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
// console.log(body);
const button = document.querySelector("button");
const color = document.querySelector(".color");

button.addEventListener("click", getColour);

function getColour() {
  console.log(getRandomHexColor());
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
