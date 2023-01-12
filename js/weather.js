const API_KEY = "534d347215f2f28d3bafa50f41d393aa";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather li:first-child span");
      const city = document.querySelector("#weather li:last-child span");
      city.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
