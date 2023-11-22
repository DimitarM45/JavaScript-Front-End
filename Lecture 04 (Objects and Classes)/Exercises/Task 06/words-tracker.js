function findOccurences(words) {
    let [ targetWords, ...stringsToSearch] = words; 

    targetWords = targetWords.split(" ");

    let wordOccurences = [];

    for (let i = 0; i < targetWords.length; i++) {
        let wordOccurence = {
            word: targetWords[i],
            occurrences: 0
        };

        for (let i = 0; i < stringsToSearch.length; i++) {
            if (wordOccurence.word === stringsToSearch[i]) {
                wordOccurence.occurrences++;
            }
        }
        
        wordOccurences.push(wordOccurence);
    }

    wordOccurences.sort((a, b) => {
        return b.occurrences - a.occurrences;
    });

    for (let i = 0; i < wordOccurences.length; i++) {
        console.log(`${wordOccurences[i].word} - ${wordOccurences[i].occurrences}`);
    }
}
