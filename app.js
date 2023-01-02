//const loginForm = document.querySelector("#login-form");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginInput = document.querySelector("#login-form input")
const loginButton = loginForm.querySelector("button");

function handleLoginBtmClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", handleLoginBtmClick);
