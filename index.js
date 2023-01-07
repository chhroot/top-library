myLibrary = [
  {
    id:1,
    title:"The Hobbit",
    author: "Tolkeins",
    pages: 56,
    status: true,

  },

  {
    id:2,
    title:"sdsd",
    author: "sdds",
    pages: 56,
    status: true,

  },

  {
    id:3,
    title:"The Hobbit",
    author: "Tolkeins",
    pages: 56,
    status: true,

  },
];

let nextId = 4;

class Book {
  constructor(title, author, pages, status) {
    this.id = nextId++; 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

}


// DISPLAYS THE BOOKS
function displayLibrary() {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";

  for (const book of myLibrary) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.setAttribute('data-id', book.id);
  
    const titleElement = document.createElement("h2");
    titleElement.textContent = book.title;
    titleElement.classList.add('title');
  
    const authorElement = document.createElement("h3");
    authorElement.textContent = book.author;
  
    const pagesElement = document.createElement("p");
    pagesElement.textContent = `${book.pages} pages`;
    
    const statusContainer = document.createElement("div");
    statusContainer.classList.add('status-container');

    const readElement = document.createElement("p");
    readElement.textContent = book.status;

    const checkBox = document.createElement("p");
    checkBox.textContent = "TOGGLE";
    checkBox.setAttribute('id', 'toggle-status');

    statusContainer.appendChild(readElement);
    statusContainer.appendChild(checkBox);

  
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(statusContainer);
  
    booksContainer.appendChild(bookElement);
  }
}

//PUSH NEW BOOK TO LIBRARY
function addBookToLibrary(title , author, pages, read) {
  const book = new Book(title, author, pages, read);  
  myLibrary.push(book)
}

function toggleStatus(event) {
  let bookEl = event.target.closest('.book');
  let id = bookEl.getAttribute('data-id');
  let book = myLibrary.find(book => String(book.id) === id);

  // book.status = !book.status;
  
  book.status = !book.status;

  displayLibrary();
  
}


//FORM FUNCTIONS
function showForm() {
  var formContainer = document.getElementById("form-container");
  formContainer.style.display = "flex";
}

function closeForm() {
  var formContainer = document.getElementById("form-container");
  formContainer.style.display = "none";
}


document.addEventListener("keyup", function (event) {
  if (event.keyCode === 27) {
    closeForm();
  }
});

function validateForm(event){
  
  const titleInput = document.querySelector('#book-name');
  const authorInput = document.querySelector('#author-name');
  const pagesInput = document.querySelector('#pages');
  const checkbox = document.querySelector('input[name="checkbox"]');

  console.log(checkbox.checked);
  if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== '' && pagesInput.value > 0) {
    if (checkbox.checked) {
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
      closeForm();
    } else {
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
      closeForm();
    }

  }

  displayLibrary();
}

//EVENT LISTENERS
function listenClicks(){
  
  document.addEventListener('click', (event) => {
    const { target } = event;
    

    if(target.id == 'add-book'){
      validateForm(event);
    }

    else if(target.id == 'toggle-status'){
      toggleStatus(event);
    }

  });

  
}


displayLibrary();

listenClicks();
