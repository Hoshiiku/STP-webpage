const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contactForm");
const alertBox = document.getElementById("alert");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !message) {
    alertBox.textContent = "Por favor completa todos los campos.";
    alertBox.style.color = "#ff8d92";
    return;
  }

  alertBox.textContent = `¡Gracias ${name}! Recibimos tu mensaje y nos contactaremos pronto.`;
  alertBox.style.color = "#adff97";
  contactForm.reset();
});