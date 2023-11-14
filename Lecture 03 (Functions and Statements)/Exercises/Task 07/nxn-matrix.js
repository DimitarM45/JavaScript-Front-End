function printMatrix(num) {
    for (let i = 1; i <= num; i++) {
        let matrixLine = "";

        for (let j = 1; j <= num; j++) {
            matrixLine += ` ${num}`;
        }

        console.log(matrixLine);
    }
}
