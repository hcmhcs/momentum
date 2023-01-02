const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor; //let은 변수값을 변경시킬 수 있으니까
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
