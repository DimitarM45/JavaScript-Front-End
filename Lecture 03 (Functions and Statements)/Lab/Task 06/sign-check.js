function getResultType(firstNum, secondNum, thirdNum) {

    let negativeCount = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            negativeCount++;
        }
    }

    let result;

    if (negativeCount % 2 == 0) {
        result = "Positive";
    } else {
        result = "Negative";
    }

    console.log(result);
}
