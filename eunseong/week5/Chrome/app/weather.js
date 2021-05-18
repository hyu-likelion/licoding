const weather = document.querySelector(".js-weather");
const COORDS = `coords`;
const API_KEY = ``;

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
        return response.json();
    }).then(function (jsoned) {
        console.dir(jsoned);
        const temperature = jsoned.main.temp;
        const place = jsoned.name;
        weather.innerText = `${temperature} @ ${place}`;
});}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj)
    getWeather(userLoaction.latitude, userLoaction.longitude);
}

function handleGeoError() {
    console.log("can't access geoLocation");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    }
    else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();