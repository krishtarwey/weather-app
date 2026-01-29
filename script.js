let cityInput = document.querySelector(".city-input");
let searchButton = document.querySelector(".search-btn");

let cityElement = document.querySelector(".city-name");
let tempElement = document.querySelector(".temperature");
let conditionElement = document.querySelector(".condition");
let windElement = document.querySelector(".wind");


searchButton.addEventListener("click", function () {
    let cityName = cityInput.value;
    console.log(cityName);

    // CALL the API function
    getWeatherData(cityName);
});

async function getWeatherData(city) {

    // 1. Build the API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7172a52ea9c51505e33491d81aaefd8f&units=metric`;

    // 2. Fetch data
    let response = await fetch(url);

    // 3. Convert to JSON
    let data = await response.json();

    cityElement.innerText = data.name;
    tempElement.innerText = data.main.temp + " °C";
    conditionElement.innerText = data.weather[0].description;
    windElement.innerText = "Wind: " + data.wind.speed + " m/s";


    // 4. Check data
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
    console.log(data.wind.speed);

}

