const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/*
Scroll Reveal
*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

/*
Terminal Animation
*/

const terminalText = [
  "jecinta-ogola",
  "AWS Certified Solutions Architect",
  "portfolio-web Running ✓",
  "Infrastructure stable ✓",
  "cloud-portfolio-container",
];

let index = 0;

function typeTerminal() {
  const element = document.querySelector(".terminal-text");

  if (!element) return;

  element.textContent = terminalText[index];

  index++;

  if (index >= terminalText.length) {
    index = 0;
  }
}

setInterval(typeTerminal, 2500);