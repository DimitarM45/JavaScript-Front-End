function loadCommits() {
    let usernameElement = document.getElementById("username");
    let repoElement = document.getElementById("repo");

    let username = usernameElement.value.toLowerCase();
    let repo = repoElement.value.toLowerCase();

    let commitsList = document.getElementById("commits");

    commitsList.innerHTML = "";

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(c => {
                let liElement = document.createElement("li");

                liElement.textContent = `${c.commit.author.name}: ${c.commit.message}`;

                commitsList.appendChild(liElement);
            });
        })
        .catch((error) => {
            let liElement = document.createElement("li");

            liElement.textContent = `Error: ${error.status} (Not Found)`;

            commitsList.appendChild(liElement);
        });
}


