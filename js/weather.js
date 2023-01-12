const API_KEY = "534d347215f2f28d3bafa50f41d393aa";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in ", lat, lng);
}
function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
