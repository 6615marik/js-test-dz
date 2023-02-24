const email = document.getElementsByName("email");
const password = document.getElementsByName("password");
const button = document.querySelector("button");
const form = document.querySelector("form");
// console.log(email);
form.addEventListener("submit", onsubmitForm);

function onsubmitForm(e) {
  e.preventDefault();
  console.log(e.currentTarget.elements.email.value);
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
