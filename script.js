const roles = [
  "Web Developer",
  "Tech Enthusiast",
  "Problem Solver",
  "Aspiring Full-Stack Engineer",
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function type() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) type();
});
