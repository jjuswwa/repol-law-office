// Navbar Scroll
const navScrolled = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navScrolled.classList.add("navbar-scrolled");
  } else if (window.screenY <= 56) {
    navScrolled.classList.remove("navbar-scrolled");
  }
});

// Array of words to be typed
const wordsToType = ["Freedom.", "Rights.", "Case.", "Custody."];
let currentWordIndex = 0;

// Function to type the text
function typeWriter(text, i, speed) {
  if (i < text.length) {
    document.querySelector(".typewriter-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(text, i, speed);
    }, speed); // Adjust typing speed here
  } else {
    setTimeout(function () {
      eraseText(text, i, speed);
    }, 1000); // Wait for 1 second before erasing
  }
}

// Function to erase the text
function eraseText(text, i, speed) {
  if (i >= 0) {
    var newText = text.substring(0, i);
    document.querySelector(".typewriter-text").innerHTML = newText;
    i--;
    setTimeout(function () {
      eraseText(text, i, speed);
    }, speed); // Adjust erasing speed here
  } else {
    setTimeout(function () {
      currentWordIndex = (currentWordIndex + 1) % wordsToType.length; // Move to the next word
      typeWriter(wordsToType[currentWordIndex], 0, 200); // Adjust typing speed for next word
    }, 500); // Wait for 0.5 second before typing next word
  }
}

// Start typing effect with the first word
typeWriter(wordsToType[currentWordIndex], 0, 300); // Adjust initial typing speed here

// Hover image in section 2 //
function changeImage() {
  document.querySelector(".img").style.backgroundImage =
    "url('../assets/images/ex-about-2.jpg')";
}

function restoreImage() {
  document.querySelector(".img").style.backgroundImage =
    "url('../assets/images/ex-about-1.jpg')";
}
