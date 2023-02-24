function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const divbox = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
// console.dir(input);/
create.addEventListener("click", oncreate);
destroy.addEventListener("click", onDestroy);

function oncreate() {
  const n = input.value;
  const items = [];
  let w = 30;
  let h = 30;
  for (let i = 1; i <= n; i += 1) {
    const createDiv = document.createElement("div");
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = w + i * 10 + "px";
    createDiv.style.height = h + i * 10 + "px";

    items.push(createDiv);
  }
  divbox.append(...items);
}
function onDestroy() {
  divbox.innerHTML = "";
}
