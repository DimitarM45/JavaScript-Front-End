function getDictionaryDefinitions(termsJsonArr) {
    let dictionary = {};
    
    for (let i = 0; i < termsJsonArr.length; i++) {
        let dictionaryEntry = JSON.parse(termsJsonArr[i]);
       
        let keys = Object.keys(dictionaryEntry);
        
        dictionary[keys[0]] = dictionaryEntry[keys[0]];
    }

    let dictionaryKeys = Object.keys(dictionary);

    dictionaryKeys.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let i = 0; i < dictionaryKeys.length; i++) { 
        console.log(`Term: ${dictionaryKeys[i]} => Definition: ${dictionary[dictionaryKeys[i]]}`);
    }
}