function attachEvents() {
  let url = "http://localhost:3030/jsonstore/collections/books";

  let loadBooksButton = document.getElementById("loadBooks");

  loadBooksButton.addEventListener("click", getBooks);

  let formButton = document.querySelector("#form button");

  formButton.addEventListener("click", addBook);

  function getBooks(e) {
    let tableBody = e.target.parentNode.querySelector("tbody");

    tableBody.innerHTML = " ";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        Object.values(data).forEach(b => {
          let tr = document.createElement("tr");
          
          let tdTitle = document.createElement("td");
          let tdAuthor = document.createElement("td");
    
          tdTitle.textContent = b.title;
          tdAuthor.textContent = b.author;
    
          tr.appendChild(tdTitle);
          tr.appendChild(tdAuthor);
    
          let tdButtons = document.createElement("td");
    
          let editButton = document.createElement("button");
          let deleteButton = document.createElement("button");
    
          editButton.textContent = "Edit";

          editButton.addEventListener("click", editBook);

          deleteButton.textContent = "Delete";

          deleteButton.addEventListener("click", deleteBook);
    
          tdButtons.appendChild(editButton);
          tdButtons.appendChild(deleteButton);
    
          tr.appendChild(tdButtons);

          tableBody.appendChild(tr);
        });
      })
      .catch(error => console.log(error));
  }

  function addBook(e) {
    let bookTitleInput = e.target.parentNode.querySelector('input[name="title"]');
    let bookAuthorInput = e.target.parentNode.querySelector('input[name="author"]');

    if (!bookTitleInput.value || !bookAuthorInput.value) return;

    let book = {
      author: bookAuthorInput.value,
      title: bookTitleInput.value,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(book)
    })
      .then(response => console.log(response))
      .then(result => console.log(result))
      .catch(error => console.log(error))
      .finally(() => {
        bookTitleInput.value = ""
        bookAuthorInput.value = "";
      }); 
  }

  function editBook(e) {
    let tdTitle = e.target.parentNode.parentNode.getElementsByTagName("td")[0];
    let tdAuthor = e.target.parentNode.parentNode.getElementsByTagName("td")[1];

    let formText = document.querySelector("h3");

    formText.textContent = "Edit FORM";

    let submitButton = document.querySelector("#form button");

    submitButton.textContent = "Save";
    submitButton.removeEventListener("click", addBook);

    let inputTitle = document.querySelector('#form input[name="title"]');
    let inputAuthor = document.querySelector('#form input[name="author"]');

    let bookId = "";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let books = Object.entries(data);
      
        let book = books
          .find(b => b[1].title === tdTitle.textContent && b[1].author === tdAuthor.textContent);

        if (!book) return;
          
        bookId = book[0];
          
        inputTitle.value = book[1].title;
        inputAuthor.value = book[1].author;
        
        submitButton.textContent = "Submit";
        formText.textContent = "FORM";

        submitButton.addEventListener("click", submitEdit);
      })
      .catch(error => console.log(error))

    function submitEdit() {
      if (!inputTitle.value || !inputAuthor.value) return;

      console.log(inputAuthor.value);
      console.log(inputTitle.value);

      fetch(url + `/${bookId}`, {
        method: "PUT",
        body: JSON.stringify({
          author: inputAuthor.value,
          title: inputTitle.value
        })
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .finally(() => {
        inputTitle.value = "";
        inputAuthor.value = "";
      });   
    }
  }
  
  function deleteBook(e) {
    let tdTitle = e.target.parentNode.parentNode.getElementsByTagName("td")[0];
    let tdAuthor = e.target.parentNode.parentNode.getElementsByTagName("td")[1];
      
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let books = Object.entries(data);
        
        let book = books
        .find(b => b[1].title === tdTitle.textContent && b[1].author === tdAuthor.textContent);
        
        if (!book) return;
        
        fetch(url + `/${book[0]}`, {
          method: "DELETE"
        })
        .then(response => console.log(response))
          .catch(error => console.log(error));
        })
      .catch(error => console.log(error));
  }
}

attachEvents();
