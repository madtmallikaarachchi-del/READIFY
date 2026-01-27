
const books = [
  { title: "Hath Pana", author: " Kumaratunga Munidasa", genre: "Classic", image: "images/books/hathpana.jpg", synopsis: "A popular Sinhala folk story collection often read by children, rich in moral lessons and cultural values.", ratings: [[" Critic", 5]] },
  { title: "Gamperaliya", author: "Martin Wickramasinghe", genre: "Classic", image: "images/books/gamperaliya.jpg", synopsis: "A classic Sinhala novel depicting the social transformation of a traditional Sri Lankan village.", ratings: [["Literary Critic", 5]] },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", image: "images/books//Rings.jpg", synopsis: "An epic quest to destroy the One Ring.", ratings: [["Critic C", 5]] },
  { title: "The Chronicles of Narnia", author: "C.S. Lewis", genre: "Fantasy", image: "images/books/Narnia.jpg", synopsis: "Children discover a magical land through a wardrobe.", ratings: [["Critic D", 5]] },
  { title: "1984", author: "George Orwell", genre: "Dystopian", image: "images/books/1984.jpg", synopsis: "A chilling vision of totalitarian surveillance and control.", ratings: [["Critic E", 5]] },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", image: "images/books/Brave.jpg", synopsis: "A futuristic society shaped by technology.", ratings: [["Critic F", 4]] }
];


function searchBooks() {
  const search = document.getElementById("search").value.toLowerCase();
  const genre = document.getElementById("genreFilter").value;
  const bookList = document.getElementById("bookList");

  bookList.innerHTML = "";

  books
    .filter(book => {
      const matchesGenre = genre === "All" || book.genre === genre;
      const matchesSearch =
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search);
      return matchesGenre && matchesSearch;
    })
    .forEach(book => {
      const card = document.createElement("div");
      card.className = "card";
      card.onclick = () => openModal(book.title);

      card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
      `;

      bookList.appendChild(card);
    });
}


function openModal(title) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const book = books.find(b => b.title === title);

  if (!book) return;

  let ratingsTable = `
    <table>
      <tr>
        <th>Reviewer</th>
        <th>Rating</th>
      </tr>
  `;

  book.ratings.forEach(r => {
    ratingsTable += `
      <tr>
        <td>${r[0]}</td>
        <td>${r[1]} /10</td>
      </tr>
    `;
  });

  ratingsTable += "</table>";

  modalBody.innerHTML = `
    <h2>${book.title}</h2>

    <h3>Synopsis</h3>
    <p>${book.synopsis}</p>

    <h3>Ratings & Reviews</h3>
    ${ratingsTable}
  `;

  modal.classList.add("show");
}


function closeModal() {
  document.getElementById("modal").classList.remove("show");
}


function toggleMenu() {
  const menu = document.querySelector("header nav ul");
  if (menu) menu.classList.toggle("show");
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


searchBooks();
