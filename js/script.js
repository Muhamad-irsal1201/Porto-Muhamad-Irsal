document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(
    ".hero-section, .aboutme-section, .projects-section, .contact-section"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});


const text = "Welcome to My Portofolio";
const welcomeText = document.getElementById("welcome-text");
let i = 0;

function typeEffect() {
  if (i < text.length) {
    welcomeText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100); // kecepatan huruf muncul
  } else {
    // setelah selesai, tunggu sebentar lalu pindah ke portfolio.html
    setTimeout(() => {
      window.location.href = "html/home.html";
    }, 1000);
  }
}

window.onload = typeEffect;

