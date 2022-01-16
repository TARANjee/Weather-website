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
const baseURL = "http://api.weatherapi.com/v1";
const key = Weather.key;

weatherDate.textContent = moment().format("h:mm a-ddd, D MMM 'YY");

async function weatherapi() {
    var res = await fetch(`${baseURL}/forecast.json ?key=${key}&q=auto:ip`)
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

    backgroundImage();

}
function backgroundImage() {

    if (data.current.is_day == 1) {
        if (data.current.condition.text == "Sunny")
            background.style.backgroundImage = "url(img/day/sunny" + ".jpg)";
        else if (data.current.condition.text == "Rainy")
            background.style.backgroundImage = "url(img/day/rainy-day" + ".jpg)";
        else if (data.current.condition.text == "Partly cloudy")
            background.style.backgroundImage = "url(img/day/Partly-Cloudy" + ".jpg)";
        else if (data.current.condition.text == "Cloudy")
            background.style.backgroundImage = "url(img/day/cloudy" + ".jpg)";
        else if (data.current.condition.text == "Mist")
            background.style.backgroundImage = "url(img/day/mist" + ".jpg)";
        else
            background.style.backgroundImage = "url(img/night/night" + ".webp)";
    }
    else {
        if (data.current.condition.text == "Clear")
            background.style.backgroundImage = "url(img/night/night" + ".jpg)";
        else if (data.current.condition.text == "Partly cloudy")
            background.style.backgroundImage = "url(img/night/partly-cloud" + ".jpg)";
        else if (data.current.condition.text == "Cloudy")
            background.style.backgroundImage = "url(img/night/partly-cloud" + ".jpg)";
        else if (data.current.condition.text == "Mist")
            background.style.backgroundImage = "url(img/day/mist" + ".jpg)";
        else
            background.style.backgroundImage = "url(img/night" + ".webp)";
    }
}