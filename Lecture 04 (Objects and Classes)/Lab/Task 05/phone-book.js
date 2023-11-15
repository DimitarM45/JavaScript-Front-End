function getPhoneBook(arr) {
    let phoneBook = {};

    for (let i = 0; i < arr.length; i++) {
        let [name, phoneNumber] = arr[i].split(" ");

        if (!arr.hasOwnProperty(name)) {
            phoneBook[name] = phoneNumber;
        }
    }

    for (const key in phoneBook) {
        if (Object.hasOwnProperty.call(phoneBook, key)) {
            console.log(`${key} -> ${phoneBook[key]}`);
        }
    }
}

