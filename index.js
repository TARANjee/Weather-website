const weatherDate = document.querySelector("#weatherDate");
const degree = document.querySelector(".degree");
const background = document.querySelector(".background");
const backgroundChange = document.querySelector(".back");
const locationName = document.querySelector(".location");
const condition = document.querySelector("#condition");
const cloud = document.querySelector("#Cloudy");
const wind = document.querySelector("#wind");
const uv = document.querySelector("#uv");
const humidity = document.querySelector("#humidity");
const icon = document.querySelector(".icon img");
let data = {};

weatherDate.textContent = moment().format("h:mm a-ddd, D MMM 'YY");

async function weatherapi() {
    var res = await fetch("http://api.weatherapi.com/v1/current.json?key=5cb2b643e3cd4158a8f104557221501&q=auto:ip")
    data = await res.json();
    show(data)
}
weatherapi();

function show(data) {
    console.log(`data`, data)
    degree.textContent = Math.round(data.current.temp_c) + "°";
    if (data.location.name == "Dehra")
        locationName.textContent = data.location.name + "dun";
    else
        locationName.textContent = data.location.name;


    condition.textContent = data.current.condition.text;
    cloud.textContent = data.current.cloud + "%";
    humidity.textContent = data.current.humidity + "%";
    uv.textContent = data.current.uv + "%";
    wind.textContent = Math.round(data.current.wind_kph) + "km/h";
    icon.src = data.current.condition.icon;

    if (data.current.condition.text == "Sunny")
        background.style.backgroundImage = "url(img/sunny" + ".jpg)";
    else if (data.current.condition.text == "Rainy")
        background.style.backgroundImage = "url(img/rainy-day" + ".jpg)";
    else if (data.current.condition.text == "Partly Cloudy")
        background.style.backgroundImage = "url(img/Partly Cloudy" + ".jpg)";
    else if (data.current.condition.text == "Cloudy")
        background.style.backgroundImage = "url(img/cloudy" + ".jpg)";
    else if (data.current.condition.text == "Mist")
        background.style.backgroundImage = "url(img/mist" + ".jpg)";
    else if (data.current.condition.text == "Clear")
        background.style.backgroundImage = "url(img/night" + ".webp)";
    else
        background.style.backgroundImage = "url(img/night" + ".webp)";
}