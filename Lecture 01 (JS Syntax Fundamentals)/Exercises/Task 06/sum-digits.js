function sumDigits(number) {
    let sum = 0;
    let value = number;

    while (value > 0) {
        let digit = value % 10;

        sum += digit;

        value = Math.floor(value / 10);
    }

    console.log(sum);
}
