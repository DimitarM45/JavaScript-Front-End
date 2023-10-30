function checkDigits(number) {
    let value = number;

    let initialDigit = number % 10;
    let sum = initialDigit;

    value = Math.floor(value / 10);

    let areEqual = true;

    while (value > 0) {
        let digit = value % 10;

        if (digit != initialDigit)
            areEqual = false;

        sum += digit;

        value = Math.floor(value / 10);
    }

    console.log(areEqual + "\n" + sum);
}
