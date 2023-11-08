function extractWords(string) {
    let wordRegex = /[A-Za-z]+/gmi;

    let words = string.match(wordRegex);

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }

    console.log(words.join(", "));
}

extractWords('hello');