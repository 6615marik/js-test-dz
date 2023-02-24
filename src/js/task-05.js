const input = document.querySelector("#name-input");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");

span;
input.addEventListener("input", oninputValue);
function oninputValue(e) {
  console.log(e.currentTarget.value);
  if (e.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = `${e.currentTarget.value}`;
  }
}
