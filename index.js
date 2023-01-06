// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//   }

//   function addBookToLibrary() {
//     const book1 = new Book('test', 'test', 'test', 'test')
//     myLibrary.push(book1)
//   }

myLibrary = [
  {
    title: "The Hobbit",
    author: "J.J Tolkien",
    pages: 295,
    status: "read",
  },
  {
    title: "The Last Wish",
    author: "Andrzej Sapkowski",
    pages: 400,
    status: "read",
  },
  {
    title: "The Hobbit",
    author: "J.J Tolkien",
    pages: 295,
    status: "read",
  },
  {
    title: "The Hobbit",
    author: "J.J Tolkien",
    pages: 295,
    status: "read",
  },
];

const booksContainer = document.getElementById("books");

for (const book of myLibrary) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");

  const titleElement = document.createElement("h2");
  titleElement.textContent = book.title;

  const authorElement = document.createElement("h3");
  authorElement.textContent = book.author;

  const pagesElement = document.createElement("p");
  pagesElement.textContent = `${book.pages} pages`;

  const readElement = document.createElement("p");
  readElement.textContent = book.status;

  bookElement.appendChild(titleElement);
  bookElement.appendChild(authorElement);
  bookElement.appendChild(pagesElement);
  bookElement.appendChild(readElement);

  booksContainer.appendChild(bookElement);
}

//form functions
function showForm() {
  var formContainer = document.getElementById("form-container");
  formContainer.style.display = "flex";
}

function closeForm() {
  var formContainer = document.getElementById("form-container");
  formContainer.style.display = "none";
}

// Close the form when the escape key is pressed
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 27) {
    closeForm();
  }
});
