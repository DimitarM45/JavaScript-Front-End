function rotateArray(numbers, rotations) {
    for (let i = 1; i <= rotations; i++) {
        numbers.push(numbers.shift());
    }

    console.log(numbers.join(" "));
}
