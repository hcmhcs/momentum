const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본동작들을 막아준다.
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault(); // 링크로 이동하는걸 막아준다.
  console.log(event);
  alert("Click!");
}
loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick);
