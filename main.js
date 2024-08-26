function learnMore() {
  alert("More information coming soon!");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Спасибо!");
  });
