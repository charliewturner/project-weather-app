const apiKey = "64ad61cb3f2845bfb21163612240507";
const apiURL =
  "http://api.weatherapi.com/v1/current.json?key=64ad61cb3f2845bfb21163612240507&q=London&aqi=no";

async function checkWeather() {
  const response = await fetch(apiURL + `&appid${apiKey}`);
  let data = await response.json();

  console.log(data);
}

checkWeather();
