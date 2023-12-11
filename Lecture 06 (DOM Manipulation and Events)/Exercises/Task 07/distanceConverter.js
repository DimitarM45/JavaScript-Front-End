function attachEventsListeners() {
    let convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", convertDistanceUnits);

    function convertDistanceUnits(e) {
        let inputDistanceElement = e.target.parentNode.getElementsByTagName("input")[0];

        let inputDistance = Number(inputDistanceElement.value);

        let inputUnitSelect = e.target.parentNode.querySelector("#inputUnits");

        let outputUnitSelect = e.target.parentNode.parentNode.querySelector("#outputUnits");

        let inputUnit = inputUnitSelect.value;

        let outputUnit = outputUnitSelect.value;

        let inputInMeters = 0; 

        let outputDistance = 0;

        let rates = {
            metersInKm: 1000,
            cmInMeters: 100,
            mmInMeters: 1000,
            metersInMi: 1609.34,
            metersInYrd: 0.9144,
            metersInFt: 0.3048,
            metersInInch: 0.0254 
        }

        switch (inputUnit) {
            case "km":
                inputInMeters = inputDistance * rates.metersInKm;
                break;
            
            case "m":
                inputInMeters = inputDistance;
                break;

            case "cm":
                inputInMeters = inputDistance / rates.cmInMeters;
                break;

            case "mm":
                inputInMeters = inputDistance / rates.mmInMeters;
                break;

            case "mi":
                inputInMeters = inputDistance * rates.metersInMi;
                break;

            case "yrd":
                inputInMeters = inputDistance * rates.metersInYrd;
                break;

            case "ft":
                inputInMeters = inputDistance * rates.metersInFt;
                break;

            case "in":
                inputInMeters = inputDistance * rates.metersInInch;
                break;
        }

        switch (outputUnit) {
            case "km":
                outputDistance = inputInMeters / rates.metersInKm;
                break;
        
            case "m":
                outputDistance = inputInMeters;
                break;

            case "cm":
                outputDistance = inputInMeters * rates.cmInMeters;
                break;

            case "mm":
                outputDistance = inputInMeters * rates.mmInMeters;
                break;

            case "mi":
                outputDistance = inputInMeters / rates.metersInMi;
                break;

            case "yrd":
                outputDistance = inputInMeters / rates.metersInYrd;
                break;

            case "ft":
                outputDistance = inputInMeters / rates.metersInFt;
                break;

            case "in":
                outputDistance = inputInMeters / rates.metersInInch;
                break;
        }

        let outputElement = e.target.parentNode.parentNode
            .getElementsByTagName("input")[2];

        outputElement.value = outputDistance;
    }
}