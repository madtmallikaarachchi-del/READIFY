


function playSound() {
  const sound = document.getElementById("sound");
  if (sound) {
    sound.play();
  }
}

function stopSound() {
  const sound = document.getElementById("sound");
  if (sound) {
    sound.pause();
  }
}


let completedBooks = [];

function addBook() {
  const input = document.getElementById("completedTitle");
  const title = input.value.trim();
  
  if (!title) {
    alert("Please enter a book title.");
    return;
  }
  
  if (completedBooks.includes(title.toLowerCase())) {
    alert("Book already added.");
    return;
  }
  
  completedBooks.push(title.toLowerCase());
  input.value = "";
  displayBooks();
}

function clearBooks() {
  completedBooks = [];
  displayBooks();
}

function displayBooks() {
  const list = document.getElementById("completedList");
  list.innerHTML = "";
  
  completedBooks.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.charAt(0).toUpperCase() + book.slice(1);
    list.appendChild(li);
  });
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


displayBooks();