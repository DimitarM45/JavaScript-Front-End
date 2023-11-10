function printCharacterCodes(firstChar, secondChar) {
    let firstCharCode = firstChar.charCodeAt(0);
    let secondCharCode = secondChar.charCodeAt(0);

    let startChar;
    let endChar;

    if (firstCharCode < secondCharCode) {
        startChar = firstCharCode;
        endChar = secondCharCode;
    } else {
        startChar = secondCharCode;
        endChar = firstCharCode;
    }

    let chars = [];

    for (let i = startChar + 1; i < endChar; i++) {
        chars.push(String.fromCharCode(i));
    }

    console.log(chars.join(" "));
}

