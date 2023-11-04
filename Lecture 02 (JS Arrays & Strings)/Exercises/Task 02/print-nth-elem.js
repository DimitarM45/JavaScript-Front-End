function printNthElem(array, step) {
    let outputArray = [];

    for (let i = 0; i < array.length; i += step) {
        outputArray.push(array[i]);
    }

    return outputArray;
}
