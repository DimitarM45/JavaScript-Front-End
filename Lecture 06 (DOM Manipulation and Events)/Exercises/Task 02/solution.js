function attachEventsListeners() {
    let divElements = Array.from(document.getElementsByTagName("div"));

    let timeDivObjs = [];

    divElements.forEach(d => {
        let timeDivObj = {
            buttonElement: d.querySelector('input[type="button"]'),
            timeSpan: d.getElementsByTagName("label")[0].htmlFor,
            inputElement: d.querySelector('input[type="text"]')
        }

        timeDivObj.buttonElement.addEventListener("click", convertTime);

        timeDivObjs.push(timeDivObj);
    });

    function convertTime(e) {
        let eventTargetSpan = e.target.id.substring(0, e.target.id.length - 3);

        let timeDivObjIndex = timeDivObjs.findIndex(o => o.timeSpan === eventTargetSpan);

        let timeDivObj = timeDivObjs[timeDivObjIndex];

        let inputTime = Number(timeDivObj.inputElement.value);
        
        const conversConstants = {
            hoursInDay: 24,
            minutesInDay: 1440,
            secondsInDay: 86400,
            minutesInHour: 60,
            secondsInHour: 3600,
            secondsInMinute: 60
        }

        delete timeDivObjs[timeDivObjIndex];

        timeDivObjs.forEach(o => {
            switch (timeDivObj.timeSpan) {
                case "days":
                    if (o.timeSpan === "hours") {
                        o.inputElement.value = 
                            inputTime * conversConstants.hoursInDay;

                    } else if (o.timeSpan === "minutes") {
                        o.inputElement.value =
                            inputTime * conversConstants.minutesInDay;
                        
                    } else if (o.timeSpan === "seconds") {
                        o.inputElement.value = 
                            inputTime * conversConstants.secondsInDay;
                    }
                    break;

                case "hours":
                    if (o.timeSpan === "days") {
                        o.inputElement.value = 
                            inputTime / conversConstants.hoursInDay;

                    } else if (o.timeSpan === "minutes") {
                        o.inputElement.value =
                            inputTime * conversConstants.minutesInHour;

                    } else if (o.timeSpan === "seconds") {
                        o.inputElement.value =
                            inputTime * conversConstants.secondsInHour;
                    }
                    break;
                
                case "minutes":
                    if (o.timeSpan === "days") {
                        o.inputElement.value = 
                            inputTime / conversConstants.minutesInDay;

                    } else if (o.timeSpan === "hours") {
                        o.inputElement.value = 
                            inputTime / conversConstants.minutesInHour;                      

                    } else if (o.timeSpan === "seconds") {
                        o.inputElement.value =
                            inputTime * conversConstants.secondsInMinute;
                    }
                    break;

                case "seconds":
                    if (o.timeSpan === "days") {
                        o.inputElement.value = 
                            inputTime / conversConstants.secondsInDay;

                    } else if (o.timeSpan === "hours") {
                        o.inputElement.value = 
                            inputTime / conversConstants.secondsInHour;

                    } else if (o.timeSpan === "minutes") {
                        o.inputElement.value = 
                            inputTime / conversConstants.secondsInMinute;
                    } 
                    break;

                default:
                    break;
            }
        });
    }
}