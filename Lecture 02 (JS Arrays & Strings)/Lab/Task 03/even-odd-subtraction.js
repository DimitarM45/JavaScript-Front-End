function evenOddSum(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    let difference = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0)
            evenSum += numbers[i];

        else
            oddSum += numbers[i];
    }

    difference = evenSum - oddSum;

    console.log(difference);
}
