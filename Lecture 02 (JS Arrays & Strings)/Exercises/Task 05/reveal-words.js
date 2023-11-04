function revealWords(words, text) {
    let replacementWords = words.split(", ");

    let censorRegex = /\*+/g;

    let matches = text.match(censorRegex);

    let replacedText = text;

    for (let i = 0; i < matches.length; i++) {
        let replacementWord = replacementWords.find(w => w.length == matches[i].length);

        replacedText = replacedText.replace(matches[i], replacementWord);
    }

    console.log(replacedText);
}
