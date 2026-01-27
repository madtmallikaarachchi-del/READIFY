


function submitFeedback() {
  const name = document.getElementById("fname");
  const email = document.getElementById("femail");
  const message = document.getElementById("fmsg");
  const done = document.getElementById("fbDone");


  if (!name.value.trim()) {
    alert("Please enter your name.");
    name.focus();
    return;
  }

  if (!email.value.includes("@")) {
    alert("Please enter a valid email.");
    email.focus();
    return;
  }


  if (!message.value.trim()) {
    alert("Please enter a message.");
    message.focus();
    return;
  }

  done.textContent = "Feedback submitted successfully!";

  name.value = "";
  email.value = "";
  message.value = "";
}




function toggleFAQ() {
  const faq = document.getElementById("faq");
  faq.classList.toggle("hidden");
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
