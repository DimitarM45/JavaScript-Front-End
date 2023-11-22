function registerCarEntries(entryInfo) {
    let carNumbers = {};

    for (let i = 0; i < entryInfo.length; i++) {
        let [command, carNumber] = entryInfo[i].split(", ");
        
        switch (command) {
            case "IN": 
                if (!carNumbers.hasOwnProperty(carNumber)) carNumbers[carNumber] = carNumbers;
                break;
        
            case "OUT":
                if (carNumbers.hasOwnProperty(carNumber)) delete carNumbers[carNumber];
                break;

            default:
                break;
        }
    }

    if (Object.keys(carNumbers).length) {
        let carNumbersArr = Object.keys(carNumbers);

        carNumbersArr.sort((a, b) => {
            return a.localeCompare(b);
        });
        
        for (let i = 0; i < carNumbersArr.length; i++) {
           console.log(carNumbersArr[i]); 
        }

    } else {
        console.log("Parking Lot is Empty");
    }
}

