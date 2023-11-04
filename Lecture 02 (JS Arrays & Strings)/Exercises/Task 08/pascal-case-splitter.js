function splitPascalCaseWords(string) {
    let words = [];
    
    for (let i = 0; i < string.length; i++) {
        let word = "";

        if (string[i] != string[i].toLowerCase()) {
            word += string[i];

            for (let j = i + 1; j < string.length; j++) {
                if (string[j] != string[j].toLowerCase()) {
                    break;
                }

                word += string[j];
            }

            words.push(word);
        }
    }

    console.log(words.join(", "));
}
