function convertToObj(jsonString) {
    let person = JSON.parse(jsonString);

    for (const key in person) {
        if (Object.hasOwnProperty.call(person, key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }
}
