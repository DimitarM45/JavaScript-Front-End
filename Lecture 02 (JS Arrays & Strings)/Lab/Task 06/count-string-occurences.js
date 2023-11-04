function countStringOccurrences(text, stringToFind) {
    let words = text.split(" ");

    let occurences = 0;

    for (const word of words) {
        if (word == stringToFind)
            occurences++;

    }

    console.log(occurences);
}
