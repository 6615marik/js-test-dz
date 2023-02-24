const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ull = document.querySelector("ul");

const vv = ingredients.map((ingr) => {
  const li = document.createElement("li");
  li.textContent = `${ingr}`;
  li.classList.add = "item";
  return li;
});
console.log(vv);
ull.append(...vv);
