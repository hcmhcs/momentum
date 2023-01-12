const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //웹사이트 로딩 후 1초뒤 실행이 아니라 바로 실행되도록
setInterval(getClock, 1000);
