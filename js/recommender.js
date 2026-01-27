
const books = [
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Classic", length: "medium" },
  { title: "Moby-Dick", author: "Herman Melville", genre: "Classic", length: "long" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", length: "long" },
  { title: "The Chronicles of Narnia", author: "C.S. Lewis" , genre: "Fantasy", length: "medium" },
  { title: "1984", author: "George Orwell", genre: "Dystopian", length: "medium" },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", length: "medium" }
];


function randomPick() {
  const genre = document.getElementById("genre").value;
  const length = document.getElementById("length").value;
  const result = document.getElementById("result");
  
  if (!genre || !length) {
    result.textContent = "Please select both genre and length.";
    return;
  }
  
  const filtered = books.filter(book => book.genre === genre && book.length === length);
  
  if (filtered.length === 0) {
    result.textContent = "No matching books found.";
    return;
  }
  
  const randomBook = filtered[Math.floor(Math.random() * filtered.length)];
  result.textContent = randomBook.title;
}


function toggleMenu() {
  const menu = document.querySelector("header nav ul");
  if (menu) {
    menu.classList.toggle("show");
  }
}


function saveEmail() {
  const email = document.getElementById("newsEmail");
  if (email && email.value.includes("@")) {
    alert("Thank you for subscribing!");
    email.value = "";
  } else {
    alert("Please enter a valid email.");
  }
}