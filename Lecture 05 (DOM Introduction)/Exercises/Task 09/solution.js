function solve() {
    let inputNumber = Number(document.getElementById("input").value);

    let formatOptions = document.getElementById("selectMenuTo");

    let format = formatOptions.options[formatOptions.selectedIndex].value;

    let result;

    switch (format) {
        case "binary":
            result = inputNumber.toString(2);        
            break;

        case "hexadecimal":
            result = inputNumber.toString(16).toUpperCase();
            break;

        default:
            break;
    }

    let resultElement = document.getElementById("result");

    resultElement.value = result;
}