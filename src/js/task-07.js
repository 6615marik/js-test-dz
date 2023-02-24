const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", onInputChange);

function onInputChange(e) {
  span.style.fontSize = e.currentTarget.value + "px";
  span.style.color = "blue";
  //   console.log(span);
  //   console.log(e.currentTarget.value);
}
