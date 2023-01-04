const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}
getClock(); //웹사이트 로딩 후 1초뒤 실행이 아니라 바로 실행되도록
setInterval(getClock, 1000);
