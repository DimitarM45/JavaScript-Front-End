function calculate(firstNum, secondNum, thirdNum) {
    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    
    function subtract(sum, thirdNum) {
        return sum - thirdNum;
    }

    let result = subtract(sum(firstNum, secondNum), thirdNum)

    console.log(result);
}


