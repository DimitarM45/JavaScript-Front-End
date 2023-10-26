function calculateCircleArea(input) {
    if (typeof input != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)

        return;
    }

    let area = Math.PI * (input ** 2);

    console.log(area.toFixed(2));
}
