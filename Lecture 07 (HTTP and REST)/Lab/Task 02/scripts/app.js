function loadRepos() {
	let ulElement = document.getElementById("repos");

	ulElement.innerHTML = "";

	let usernameInput = document.getElementById("username");

	let url = `https://api.github.com/users/${usernameInput.value.toLowerCase()}/repos`; 
	
	fetch(url)
		.then(response => response.json())
		.then(data => {
			data.forEach(r => {
				let liElement = document.createElement("li");
				let aElement = document.createElement("a");

				aElement.href = r.html_url;
				aElement.textContent = r.full_name;

				liElement.appendChild(aElement);

				ulElement.appendChild(liElement);
			});
		})
		.catch(() => {
			let liElement = document.createElement("li");

			liElement.textContent = "text";

			ulElement.appendChild(liElement);
		});
}