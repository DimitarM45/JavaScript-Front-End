function getOddOccurenceStrings(string) {
    let strings = string.split(" ");

    let wordOccurrences = [];

    for (let i = 0; i < strings.length; i++) {
        if (!wordOccurrences.some(s => s.toLowerCase() === strings[i].toLowerCase())) {
            wordOccurrences.push(strings[i]);            
        }
    }

    let oddWordOccurences = [];

    for (let i = 0; i < wordOccurrences.length; i++) {
        let occurences = 0;

        for (let j = 0; j < strings.length; j++) {
           if (wordOccurrences[i].toLowerCase() === strings[j].toLowerCase()) {
                occurences++;
           }            
        }

        if (occurences % 2 != 0) oddWordOccurences.push(wordOccurrences[i].toLowerCase());
    }

    console.log(oddWordOccurences.join(" "));
}
