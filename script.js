// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scroll({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Simple form submission alert
document.querySelectorAll('form').forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting Neethify! We'll get back to you soon.");
    form.reset();
  });
});
