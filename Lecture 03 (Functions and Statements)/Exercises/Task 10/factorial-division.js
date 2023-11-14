function divideFactorials(firstNum, secondNum) {
    function getFactorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * getFactorial(num - 1);
        }
    }

    let firstFactorial = getFactorial(firstNum);
    let secondFactorial = getFactorial(secondNum);

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));
}

