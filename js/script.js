// js/script.js

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Puedes ampliar este script con más funcionalidades según sea necesario.
