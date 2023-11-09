function calculate(firstNum, secondNum, operation) {
    let operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    }

    let operationFunc = operations[operation];

    if (!operationFunc) 
        return;
    
    console.log(operationFunc(firstNum, secondNum));
}

