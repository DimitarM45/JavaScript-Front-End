function censorWord(text, wordToCensor) {
    let censoredText = text;

    while(censoredText.includes(wordToCensor)) {
        censoredText = censoredText.replace(wordToCensor, "*".repeat(wordToCensor.length));
    }

    console.log(censoredText);
}
