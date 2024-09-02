const apiKey = "64ad61cb3f2845bfb21163612240507";

let searchLocation = "london";
let apiURL =
  "http://api.weatherapi.com/v1/forecast.json?key=64ad61cb3f2845bfb21163612240507&q=" +
  searchLocation +
  "&days=7&aqi=no&alerts=yes";

// let apiURL =
//   "http://api.weatherapi.com/v1/forecast.json?key=64ad61cb3f2845bfb21163612240507&q=london&days=7&aqi=no&alerts=yes";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid${apiKey}`);
  let data = await response.json();

  document.querySelector(".weather-class").innerHTML =
    data.current.condition.text;
  // document.querySelector(".weather-symbol").src = data.current.condition.icon;
  document.querySelector(".temp-actual").innerHTML =
    "Temperature: " + data.current.temp_c + " C";
  document.querySelector(".temp-feel").innerHTML =
    "Feels like: " + data.current.feelslike_c + " C";
  document.querySelector(".uv-index").innerHTML =
    "UV Index: " + data.current.uv;
  document.querySelector(".wind-speed").innerHTML =
    "Wind speed: " + data.current.wind_kph + " kph";
  document.querySelector(".wind-direction").innerHTML =
    "Wind direction: " + data.current.wind_dir;
  document.querySelector(".location").innerHTML = data.location.name;
  document.querySelector(".local-time").innerHTML =
    "Local time:" + "<br>" + data.location.localtime.slice(10, 16);

  var img = new Image();
  img.src = "http:" + data.current.condition.icon;
  document.querySelector(".weather-symbol").innerHTML = "";
  document.querySelector(".weather-symbol").appendChild(img);

  document.querySelector(".mini-symbol-one").innerHTML =
    "Condition: " +
    data.forecast.forecastday[0].day.condition.text +
    "<br>" +
    "High: " +
    data.forecast.forecastday[0].day.maxtemp_c +
    " C" +
    "<br>" +
    "Low: " +
    data.forecast.forecastday[0].day.mintemp_c +
    " C";

  document.querySelector(".mini-symbol-two").innerHTML =
    "Condition: " +
    data.forecast.forecastday[1].day.condition.text +
    "<br>" +
    "High: " +
    data.forecast.forecastday[1].day.maxtemp_c +
    " C" +
    "<br>" +
    "Low: " +
    data.forecast.forecastday[1].day.mintemp_c +
    " C";

  document.querySelector(".mini-symbol-three").innerHTML =
    "Condition: " +
    data.forecast.forecastday[2].day.condition.text +
    "<br>" +
    "High: " +
    data.forecast.forecastday[2].day.maxtemp_c +
    " C" +
    "<br>" +
    "Low: " +
    data.forecast.forecastday[2].day.mintemp_c +
    " C";

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

  switch (new Date().getDay()) {
    case 0:
      document.getElementById("forecast-day-two").innerHTML = "Monday";
      document.getElementById("forecast-day-three").innerHTML = "Tuesday";
      break;
    case 1:
      document.getElementById("forecast-day-two").innerHTML = "Tuesday";
      document.getElementById("forecast-day-three").innerHTML = "Wednesday";
      break;
    case 2:
      document.getElementById("forecast-day-two").innerHTML = "Wednesday";
      document.getElementById("forecast-day-three").innerHTML = "Thursday";
      break;
    case 3:
      document.getElementById("forecast-day-two").innerHTML = "Thursday";
      document.getElementById("forecast-day-three").innerHTML = "Friday";
      break;
    case 4:
      document.getElementById("forecast-day-two").innerHTML = "Friday";
      document.getElementById("forecast-day-three").innerHTML = "Saturday";
      break;
    case 5:
      document.getElementById("forecast-day-two").innerHTML = "Saturday";
      document.getElementById("forecast-day-three").innerHTML = "Sunday";
      break;
    case 6:
      document.getElementById("forecast-day-two").innerHTML = "Sunday";
      document.getElementById("forecast-day-three").innerHTML = "Monday";
  }

  console.log(data);
}
const searchField = document.querySelector(".searchbar");
const submitSearch = document.querySelector(".searchbar-submit");

function search() {
  searchLocation = searchField.value;
  apiURL =
    "http://api.weatherapi.com/v1/forecast.json?key=64ad61cb3f2845bfb21163612240507&q=" +
    searchLocation +
    "&days=7&aqi=no&alerts=yes";
  checkWeather();
  searchField.value = "";
}
checkWeather();
