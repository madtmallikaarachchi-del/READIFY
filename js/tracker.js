


function calcProgress() {
  const total = parseInt(document.getElementById("total").value);
  const read = parseInt(document.getElementById("read").value);
  const speed = parseInt(document.getElementById("speed").value);
  const result = document.getElementById("result");
  const progress = document.getElementById("progress");
  
  if (!total || !read || !speed) {
    result.textContent = "Please fill in all fields.";
    return;
  }
  
  const percent = (read / total) * 100;
  const daysLeft = Math.ceil((total - read) / speed);
  
  result.textContent = `${percent.toFixed(1)}% complete — ${daysLeft} days left`;
  progress.value = percent;
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