function solve() {
    let departButton = document.getElementById("depart");
    let arriveButton = document.getElementById("arrive");

    let spanElement = document.querySelector(".info");

    let url = "http://localhost:3030/jsonstore/bus/schedule";

    let currBusStopId = "depot";
    let currBusStopName = "";

    function depart() {
        fetch(url + `/${currBusStopId}`)
            .then(response => response.json())
            .then(data => {
                if (!data.name || !data.next) return;

                spanElement.textContent = `Next stop ${data.name}`;        

                currBusStopId = data.next;
                currBusStopName = data.name;

                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(() => {
                spanElement.textContent = "Error";

                departButton.disabled = true;
                arriveButton.disabled = true;
            });
    }

    async function arrive() {
        spanElement.textContent = `Arriving at ${currBusStopName}`;

        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();