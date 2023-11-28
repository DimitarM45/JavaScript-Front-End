function generateReport() { 
    let columnHeaders = Array.from(document.querySelectorAll("thead tr input"));

    let checkedHeaders = [];

    for (let i = 0; i < columnHeaders.length; i++) {
        if (columnHeaders[i].checked === true) 
            checkedHeaders.push({ index: i + 1, title: columnHeaders[i].name});
    }

    let columnEntries = [];

    checkedHeaders.forEach(ch => {
        let entries = Array.from(document.querySelectorAll(`tbody tr td:nth-child(${ch.index})`));

        let columnEntriesObj = {
            columnTitle: ch.title,
            entries
        };

        columnEntries.push(columnEntriesObj);
    });

    let jsonObjects = [];

    let tableRowNum = columnEntries[0].entries.length;

    for (let i = 0; i < tableRowNum; i++) {
        let jsonObject = {};

        for (let j = 0; j < columnEntries.length; j++) {
            let columnName = columnEntries[j].columnTitle.toLowerCase();

            jsonObject[columnName] = columnEntries[j].entries[i].textContent;
        }    

        jsonObjects.push(jsonObject)
    }

    let textAreaElement = document.getElementById("output");

    textAreaElement.value = JSON.stringify(jsonObjects, null, 2);
}