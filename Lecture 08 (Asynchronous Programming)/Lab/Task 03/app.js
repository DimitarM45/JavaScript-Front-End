function attachEvents() {
  let submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", getForecast);

  let locationsUrl = "http://localhost:3030/jsonstore/forecaster/locations";
  let currentForecastUrl = "http://localhost:3030/jsonstore/forecaster/today";
  let upcomingForecastUrl =
    "http://localhost:3030/jsonstore/forecaster/upcoming";

  let weatherSymbols = {
    sunny: "&#x2600;",
    partlySunny: "&#x26C5;",
    overcast: "&#x2601;",
    rain: "&#x2614;",
    celsius: "&#176;",
  };

  function getForecast(e) {
    let locationInput = e.target.parentNode
      .querySelector("#location");

    let forecastDiv = e.target.parentNode.parentNode
      .querySelector("#forecast");
    
    forecastDiv.style.display = "block";
    
    let currentDiv = forecastDiv.querySelector("#current");
    let upcomingDiv = forecastDiv.querySelector("#upcoming");
    
    fetch(locationsUrl)
    .then(response => response.json())
    .then(data => {
        if (!locationInput.value) return Promise.reject("error");

        let currentLabelDiv = currentDiv.querySelector("div");
        let upcomingLabelDiv = upcomingDiv.querySelector("div");

        currentDiv.innerHTML = "";
        upcomingDiv.innerHTML = "";

        currentDiv.appendChild(currentLabelDiv);
        upcomingDiv.appendChild(upcomingLabelDiv);

        let location = data.find(l => l.name === locationInput.value);

        if (!location) return Promise.reject("error");

        appendForecasts(location);
      })
      .catch(() => {
        forecastDiv.innerHTML = "Error";
      });

    function appendForecasts(locationInfo) {
      fetch(currentForecastUrl + `/${locationInfo.code}`)
        .then(response => response.json())
        .then(data => {
          let currentForecast = getCurrentForecast(data);

          currentDiv.appendChild(currentForecast);
        })
        .catch(error => console.log(error));

      fetch(upcomingForecastUrl + `/${locationInfo.code}`)
        .then(response => response.json())
        .then(data => {
          let upcomingForecasts = getUpcomingForecasts(data);

          upcomingDiv.appendChild(upcomingForecasts);
        })
        .catch(error => console.log(error));
    }
  }

  function getCurrentForecast(forecastInfo) {
    let divForecast = document.createElement("div");
    divForecast.className = "forecasts";

    let spanConditionSymbol = document.createElement("span");
    spanConditionSymbol.classList.add("condition");
    spanConditionSymbol.classList.add("symbol");

    divForecast.appendChild(spanConditionSymbol);

    let symbolInfo = forecastInfo.forecast.condition
      .toLowerCase()
      .split(" ")
      .filter(a => a);

    if (symbolInfo.length > 1) {
      let indexString = symbolInfo[0];

      for (let i = 1; i < symbolInfo.length; i++) {
        indexString += 
          symbolInfo[i][0].toUpperCase() + 
          symbolInfo[i].substring(1, symbolInfo[i].length);
      }

      symbolInfo = indexString;
    } else {
      symbolInfo = symbolInfo.join("");
    }

    spanConditionSymbol.innerHTML = weatherSymbols[symbolInfo];

    let spanCondition = document.createElement("span");
    spanCondition.className = "condition";

    let spanLocation = document.createElement("span");
    spanLocation.className = "forecast-data";
    spanLocation.textContent = forecastInfo.name;

    spanCondition.appendChild(spanLocation);

    let spanTemperature = document.createElement("span");
    spanTemperature.className = "forecast-data";
    spanTemperature.innerHTML = `${forecastInfo.forecast.low}${weatherSymbols.celsius}/`;

    spanCondition.appendChild(spanTemperature);

    spanTemperature.innerHTML += `${forecastInfo.forecast.high}${weatherSymbols.celsius}`;

    let spanPrognosis = document.createElement("span");
    spanPrognosis.className = "forecast-data";
    spanPrognosis.textContent = forecastInfo.forecast.condition;

    spanCondition.appendChild(spanPrognosis);

    divForecast.appendChild(spanCondition);

    return divForecast;
  }

  function getUpcomingForecasts(forecastsInfo) {
    let divForecastInfo = document.createElement("div");
    divForecastInfo.className = "forecast-info";

    forecastsInfo.forecast.forEach(f => {
      let spanUpcoming = document.createElement("span");
      spanUpcoming.className = "upcoming";
      
      let spanSymbol = document.createElement("span");
      spanSymbol.className = "symbol";
      
      spanUpcoming.appendChild(spanSymbol);
      
      let symbolInfo = f.condition
        .toLowerCase()
        .split(" ")
        .filter(a => a);

      if (symbolInfo.length > 1) {
        let indexString = symbolInfo[0];
        
        for (let i = 1; i < symbolInfo.length; i++) {
          indexString += 
            symbolInfo[i][0].toUpperCase() + 
            symbolInfo[i].substring(1, symbolInfo[i].length);
          }

        symbolInfo = indexString;
      } else {
        symbolInfo = symbolInfo.join("");
      }
      
      spanSymbol.innerHTML = weatherSymbols[symbolInfo];
      
      let spanTemperature = document.createElement("span");
      spanTemperature.className = "forecast-data";
      spanTemperature.innerHTML = `${f.low}${weatherSymbols.celsius}/`;
      spanTemperature.innerHTML += `${f.high}${weatherSymbols.celsius}`;

      spanUpcoming.appendChild(spanTemperature);
      
      let spanPrognosis = document.createElement("span");
      spanPrognosis.className = "forecast-data";
      spanPrognosis.textContent = f.condition;
      
      spanUpcoming.appendChild(spanPrognosis);

      divForecastInfo.appendChild(spanUpcoming);
    });
    
    return divForecastInfo;
  }
}

attachEvents();
