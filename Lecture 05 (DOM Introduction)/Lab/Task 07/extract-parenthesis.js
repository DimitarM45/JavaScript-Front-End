function extract(content) {
    let parenthesisRegex = /\([A-Za-z0-9 ]+\)/g

    let contentElement = document.getElementById(content);
    
    let matches = contentElement.textContent.match(parenthesisRegex);

    matches = matches.map(e => {
        return e = e.substring(1, e.length - 1);
    });

    return matches.join("; ");
}

