function printSpecialWords(string) {
    let hashtagRegex = /#[A-Za-z]+/gm;

    let matches = string.match(hashtagRegex);

    for (const match of matches) {
        console.log(match.substring(1, match.length));
    }
}
