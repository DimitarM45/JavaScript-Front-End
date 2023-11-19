function addToAddressBook(addressInfo) {
    let addressBook = {};
  
    for (let i = 0; i < addressInfo.length; i++) {
      let [personName, addressName] = addressInfo[i].split(":");
  
      addressBook[personName] = addressName;
    }
  
    let addressBookArr = [];
  
    for (const key in addressBook) {
      if (Object.hasOwnProperty.call(addressBook, key)) {
        addressBookArr.push(`${key} -> ${addressBook[key]}`);
      }
    }
  
    addressBookArr.sort((a, b) => {
      return a.localeCompare(b);
    });
  
    addressBookArr.forEach(element => {
      console.log(element);
    });
  }