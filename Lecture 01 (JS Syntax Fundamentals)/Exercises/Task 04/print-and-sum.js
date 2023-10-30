function printSum(firstNum, secondNum) {
    let sum = 0;
    let numbers = [];

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;

        numbers.push(i);
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`)
}