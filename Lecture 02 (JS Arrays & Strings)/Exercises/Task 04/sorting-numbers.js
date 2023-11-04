function sortNumbers(array) {
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        sortedArray.push(array[i]);
    }

    sortedArray.sort((a, b) => {
        return a - b;
    });

    let orderedArray = [];

    while (sortedArray.length) {
        orderedArray.push(sortedArray.shift());
        orderedArray.push(sortedArray.pop()); 
    }

    return orderedArray;
}
