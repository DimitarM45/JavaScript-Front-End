function cookNumber(number, firstOp, secondOp, thirdOp, fourthOp, fifthOp) {
    let operations = [firstOp, secondOp, thirdOp, fourthOp, fifthOp];

    let result = number;

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "chop":
                    result /= 2;
                break;

            case "dice":
                    result = Math.sqrt(result);
                break;

            case "spice":
                    result += 1;
                break;

            case "bake":
                    result *= 3;
                break;

            case "fillet":
                    result -= result * 0.2;
                break;
        }
        
        console.log(result);
    }
}
