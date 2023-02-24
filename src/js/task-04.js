const ref = {
  decrement: document.querySelector("[data-action='decrement']"),
  increment: document.querySelector("[data-action='increment']"),
  val: document.querySelector("#value"),
};

// console.log(ref.decrement);
let counterValue = 0;

ref.val.textContent = counterValue;
console.log(counterValue);

const ondecrement = () => {
  counterValue -= 1;
  ref.val.textContent = counterValue;
};
const onincrement = () => {
  counterValue += 1;
  ref.val.textContent = counterValue;
};
ref.decrement.addEventListener("click", ondecrement);
ref.increment.addEventListener("click", onincrement);
