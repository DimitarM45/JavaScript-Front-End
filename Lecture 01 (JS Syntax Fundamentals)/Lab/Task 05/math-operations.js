function calculate(firstNum, secondNum, operator) {
    let result;

    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;

        case "-":
            result = firstNum - secondNum;
            break;

        case "*":
            result = firstNum * secondNum;
            break;

        case "/":
            result = firstNum / secondNum;
            break;

        case "%":
            result = firstNum % secondNum;
            break;

        case "**":
            result = firstNum ** secondNum;
            break;

        default: 
            result = "Error!";
    }

    console.log(result);
}