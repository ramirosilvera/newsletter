// js/script.js

document.addEventListener("DOMContentLoaded", function() {
  // Ejemplo de scroll suave para enlaces internos
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
