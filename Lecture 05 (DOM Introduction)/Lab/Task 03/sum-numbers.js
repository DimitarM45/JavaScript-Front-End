function calc() {
    let firstNum = document.getElementById("num1");
    let secondNum = document.getElementById("num2");

    let sumElement = document.getElementById("sum");

    let sum = Number(firstNum.value) + Number(secondNum.value);

    sumElement.value = sum;
}
