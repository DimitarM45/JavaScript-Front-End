function findSubstring(substring, string) {
    let wordsArray = string.toLowerCase().split(" ");

    let hasMatched = false;

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] == substring.toLowerCase()) {
            hasMatched = true;
            
            break;
        }
    }

    console.log(hasMatched ? substring : `${substring} not found!`);
}
