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

  document.querySelector(".location").innerHTML = "" + data.location.name;
  document.querySelector(".local-time").innerHTML =
    "" + data.location.localtime;

  console.log(data);
}

checkWeather();
