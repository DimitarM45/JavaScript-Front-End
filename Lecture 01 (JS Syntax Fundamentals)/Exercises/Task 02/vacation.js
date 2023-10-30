function printVacationPrice(peopleCount, groupType, weekday) {
    let price;
    let totalPrice = 0;

    if (groupType == "Students") {
        if (weekday == "Friday") price = 8.45;
        else if (weekday == "Saturday") price = 9.8;
        else if (weekday == "Sunday") price = 10.46;

        totalPrice = peopleCount * price;

        if (peopleCount >= 30) totalPrice -= totalPrice * 0.15;

    } else if (groupType == "Business") {
        if (weekday == "Friday") price = 10.9;
        else if (weekday == "Saturday") price = 15.6;
        else if (weekday == "Sunday") price = 16;

        totalPrice = peopleCount * price;

        if (peopleCount >= 100) totalPrice -= price * 10;

    } else if (groupType == "Regular") {
        if (weekday == "Friday") price = 15;
        else if (weekday == "Saturday") price = 20;
        else if (weekday == "Sunday") price = 22.5;

        totalPrice = peopleCount * price;

        if (peopleCount >= 10 && peopleCount <= 20) totalPrice -= totalPrice * 0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}