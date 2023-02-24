const input = document.querySelector("#validation-input");
input.addEventListener("blur", onCheckLength);
function onCheckLength(e) {
  console.log(e.currentTarget.value.length);

  if (e.currentTarget.value.length === +input.getAttribute("data-length")) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
