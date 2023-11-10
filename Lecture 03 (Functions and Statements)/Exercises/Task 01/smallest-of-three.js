function getSmallestNum(firstNum, secondNum, thirdNum) {
    let smallestNum;

    if (firstNum <= secondNum && firstNum <= thirdNum) {
        smallestNum = firstNum;
    } else if (secondNum <= firstNum && secondNum <= thirdNum) {
        smallestNum = secondNum;
    } else if (thirdNum <= firstNum && thirdNum <= secondNum) {
        smallestNum = thirdNum;
    }

    console.log(smallestNum);
}
