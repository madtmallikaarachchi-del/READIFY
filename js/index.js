
const books = [
  { title: "Hath Pana", author: "Kumaratunga Munidasa", img: "Kumaratunga.jpg", genre: "Classic", length: "medium" },
  { title: "Gamperaliya", author: "Martin Wickramasinghe", img: "Martin.jpg", genre: "Classic", length: "long" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", img: "J_R_R_Tolkien.jpg", genre: "Fantasy", length: "long" },
  { title: "The Chronicles of Narnia", author: "C.S. Lewis", img: "CS_Lewis.jpg" , genre: "Fantasy", length: "medium" },
  { title: "1984", author: "George Orwell", img: "George Orwell.jpg", genre: "Dystopian", length: "medium" },
  { title: "Brave New World", author: "Aldous Huxley", img: "Aldou_Huxley.jpg", genre: "Dystopian", length: "medium" }
];


const quotes = [
  { text: "So we beat on, boats against the current.", author: "F. Scott Fitzgerald" },
  { text: "Reading is essential for those who seek to rise above the ordinary.", author: "Jim Rohn" },
  { text: "It is a truth universally acknowledged...", author: "Jane Austen" },
  { text: "A reader lives a thousand lives before he dies.", author: "George R.R. Martin" }
];


let currentQuote = 0;
setInterval(() => {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  
  if (quoteText && quoteAuthor) {
    quoteText.textContent = quotes[currentQuote].text;
    quoteAuthor.textContent = "— " + quotes[currentQuote].author;
    currentQuote = (currentQuote + 1) % quotes.length;
  }
}, 4000);



document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("authorDay");
  const imgEl = document.getElementById("authorImg");
  if (!nameEl || !imgEl) return;

  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((today - start) / 86400000);

  const index = dayOfYear % books.length;
  nameEl.textContent = books[index].author;
  imgEl.src = `images/authors/${books[index].img}`;
});



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