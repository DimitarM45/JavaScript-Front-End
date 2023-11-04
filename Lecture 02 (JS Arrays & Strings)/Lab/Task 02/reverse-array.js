function reverseArray(count, numbers) {
    let reversedArray;

    reversedArray = numbers.splice(0, count);
    
    reversedArray.reverse();

    console.log(reversedArray.join(" "));
}
