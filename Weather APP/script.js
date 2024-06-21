const apiKey = "5e254f451ad5437fba861308240602";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  try {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?q=${city}&unit=metric&key=${apiKey}`;
    // Construct the API URL with the specified city and API key

    // Fetch data from the weather API using the constructed URL
    const response = await fetch(apiUrl);
    // Parse the response as JSON
    const data = await response.json();
    // Log the weather data to the console
    console.log(data);

    // Update the HTML content with weather data
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temperature").innerHTML =
      data.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

    // Check if the condition text contains "Clouds"
    if (
      data.current.condition.text.includes("clouds") ||
      data.current.condition.text.includes("Partly cloudy") ||
      data.current.condition.text.includes("over cast")
    ) {
      // Update the weather icon to a clouds icon
      weatherIcon.src = "./images/clouds.png";
    } else if (data.current.condition.text.includes("Rain")) {
      // Update the weather icon to a rain icon
      weatherIcon.src = "./images/rain.png.png";
    } else if (data.current.condition.text.includes("Clear")) {
      // Update the weather icon to a clear icon
      weatherIcon.src = "./images/clear.png";
    } else if (
      data.current.condition.text.includes("Drizzle") ||
      data.current.condition.text.includes("Light rain")
    ) {
      // Update the weather icon to a drizzle icon
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.current.condition.text.includes("Mist")) {
      // Update the weather icon to a mist icon
      weatherIcon.src = "./images/mist.png";
    } else if (data.current.condition.text.includes("snow")) {
      // Update the weather icon to a mist icon
      weatherIcon.src = "./images/snow.png.png";
    } else {
      weatherIcon.src = "./images/clouds.png";
    }

    document.querySelector(".weather").style.display="block";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
// Call the function with the desired city
