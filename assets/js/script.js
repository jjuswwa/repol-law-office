var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

// Typewriter Effect per Word
const words = ["Freedom.", "Rights.", "Case.", "Custody."];
let i = 0;
let timer;

function typeWriter() {
  const span = document.querySelector(".typewriter-text");
  if (i < words.length) {
    span.textContent = ""; // Clear previous word
    let currentWord = words[i];
    let j = 0;
    timer = setInterval(function () {
      span.textContent += currentWord[j];
      j++;
      if (j === currentWord.length) {
        clearInterval(timer);
        i++;
        setTimeout(typeWriter, 1000); // Pause before typing the next word
      }
    }, 100); // Typing speed per character
  }
}

typeWriter();
