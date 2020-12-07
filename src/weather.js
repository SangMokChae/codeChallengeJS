const weatherSpan = document.querySelector("#weather");
const weatherIcon = document.querySelector(".weatherIcon");

const API_KEY = "b62020883b35c55f405ea3737ccc87bc";

const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(res => res.json())
  .then(data => {
    const temp = data.main.temp;
    const place = data.name;
    const weathers = data.weather[data.weather.length - 1];
    weatherIcon.src = `https://openweathermap.org/img/wn/${weathers.icon}@2x.png`;
    weatherSpan.innerHTML = `${place} / ${temp} °C / ${weathers.main}`;
  })
}

function handleGeoSucc(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  getWeather(latitude, longitude);
  saveCoords(coordsObj);
}

function handleGeoErr(err) {
  console.log("Geolocation Error! " + err);
}

function requestCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
}

function init() {
  requestCoords();
}
init();