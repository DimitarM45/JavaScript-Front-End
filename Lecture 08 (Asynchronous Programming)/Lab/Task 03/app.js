function attachEvents() {
    let submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", getForecast);

    let locationsUrl = "http://localhost:3030/jsonstore/forecaster/locations";
    let currentForecastUrl = "http://localhost:3030/jsonstore/forecaster/today";
    let upcomingForecastUrl = "http://localhost:3030/jsonstore/forecaster/upcoming";

    let weatherSymbols = {
        sunny: "&#x2600;",
        partlySunny: "&#x26C5;",
        overcast: "&#x2601;",
        rain: "&#x2614;",
        degrees: "&#176;"
    }

    function getForecast(e) {
        let locationInput = e.target.parentNode.parentNode
            .getElementById("location");

        let forecastDiv = e.target.parentNode.parentNode
            .getElementById("forecast"); 

        forecastDiv.display = "block";

        let currentDiv = forecastDiv.querySelector("#current");
        let upcomingDiv = forecastDiv.querySelector("#upcoming");

        fetch(locationsUrl)
            .then(response => response.json())
            .then(data => appendForecasts(data))
            .catch(() => {
                forecastDiv.innerHTML = "Error";
            });

        function appendForecasts(data) {
           let location = data.find(l => l.name === locationInput.value);
        
           if (!location) return;
             
           let currentForecast = getCurrentForecast();
           let upcomingForecasts = getUpcomingForecastsHTML();
        
           currentDiv.appendChild(currentForecast);
           upcomingDiv.appendChild(upcomingForecasts); 
        }
    }

    function getCurrentForecastHTML(forecastInfo) {

    }

    function getUpcomingForecastsHTML(forecastsInfo) {

    }
}

attachEvents();