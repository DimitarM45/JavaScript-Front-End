function getInfo() {
  let stopIdInput = document.getElementById("stopId");

  let stopNameElement = document.getElementById("stopName");

  let busList = document.getElementById("buses");

  busList.innerHTML = "";

  let baseUrl = "http://localhost:3030/jsonstore/bus/businfo";

  fetch(baseUrl + `/${stopIdInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.name) return;

      stopNameElement.textContent = data.name;

      for (const key in data.buses) {
        let li = document.createElement("li");

        li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;

        busList.appendChild(li);
      }
    })
    .catch(() => {
      stopNameElement.textContent = "Error";
    });
}
