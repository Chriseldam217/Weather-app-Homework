function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#wind-speed").innerHTML =
    Math.round(response.data.wind.speed) + " km/h";

  let iconElement = document.querySelector("#icon img");
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
}

function searchCity(city) {
  let apiKey = "d48c015a82tfo433bbe90a92b0d3714a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-form-input");
  searchCity(cityInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSearch);

searchCity("Paris");
