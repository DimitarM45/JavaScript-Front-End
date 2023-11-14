function isPerfectNum(num) {
    let sumDivisors = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) sumDivisors += i;
    }

    let result;

    if (num == sumDivisors) {
        result = "We have a perfect number!";
    } else {
        result = "It's not so perfect.";
    }

    console.log(result);
}
