function printProperties(cityObj) {
    for (const key in cityObj) {
        if (Object.hasOwnProperty.call(cityObj, key)) {
            console.log(`${key} -> ${cityObj[key]}`)
        }
    }
}