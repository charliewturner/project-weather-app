const apiKey = "64ad61cb3f2845bfb21163612240507";
const apiURL =
  "http://api.weatherapi.com/v1/forecast.json?key=64ad61cb3f2845bfb21163612240507&q=London&days=7&aqi=no&alerts=yes";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid${apiKey}`);
  let data = await response.json();

  document.querySelector(".weather-class").innerHTML =
    data.current.condition.text;
  document.querySelector(".weather-symbol").innerHTML =
    data.current.condition.icon;
  document.querySelector(".temp-actual").innerHTML =
    "Temperature: " + data.current.temp_c;
  document.querySelector(".temp-feel").innerHTML =
    "Feels like: " + data.current.feelslike_c;
  document.querySelector(".uv-index").innerHTML =
    "UV Index: " + data.current.uv;
  document.querySelector(".wind-speed").innerHTML =
    "Wind speed: " + data.current.wind_kph;
  document.querySelector(".wind-direction").innerHTML =
    "Wind direction: " + data.current.wind_dir;
  document.querySelector(".location").innerHTML = data.location.name;
  document.querySelector(".local-time").innerHTML = data.location.localtime;

  document.querySelector(".mini-symbol-one").innerHTML =
    "High: " +
    data.forecast.forecastday[0].day.maxtemp_c +
    "<br>" +
    "Low: " +
    data.forecast.forecastday[0].day.mintemp_c;

  document.querySelector(".mini-symbol-two").innerHTML =
    "High: " +
    data.forecast.forecastday[1].day.maxtemp_c +
    "<br>" +
    "Low: " +
    data.forecast.forecastday[1].day.mintemp_c;

  document.querySelector(".mini-symbol-three").innerHTML =
    "High: " +
    data.forecast.forecastday[2].day.maxtemp_c +
    "<br>" +
    "Low: " +
    data.forecast.forecastday[2].day.mintemp_c;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d1 = new Date();
  let day = weekday[d1.getDay()];
  document.getElementById("forecast-day-one").innerHTML = day;

  //write switch-case to alter teh following divs depending on the
  //current day shown in the forecast-day-one div
  document.getElementById("forecast-day-two").innerHTML = day;
  document.getElementById("forecast-day-three").innerHTML = day;
  console.log(data);
}

checkWeather();
