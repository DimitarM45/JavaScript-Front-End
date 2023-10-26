function calculateTicketPrice(dayType, personAge) {
    let result;

    if (dayType == "Weekday") {
        if (personAge >= 0 && personAge <= 18) {
            result = "12$";

        } else if (personAge > 18 && personAge <= 64) {
            result = "18$";

        } else if (personAge > 64 && personAge <= 122) {
            result = "12$";

        } else {
            result = "Error!";
        }

    } else if (dayType == "Weekend") {
        if (personAge >= 0 && personAge <= 18) {
            result = "15$";

        } else if (personAge > 18 && personAge <= 64) {
            result = "20$";

        } else if (personAge > 64 && personAge <= 122) {
            result = "15$";

        } else {
            result = "Error!";
        }

    } else if (dayType == "Holiday") {
        if (personAge >= 0 && personAge <= 18) {
            result = "5$";

        } else if (personAge > 18 && personAge <= 64) {
            result = "12$";

        } else if (personAge > 64 && personAge <= 122) {
            result = "10$";

        } else {
            result = "Error!";
        }

    } 

    console.log(result);
}