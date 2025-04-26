// Portfolio script
console.log("Portfolio loaded successfully!");

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
const form = document.getElementById("contact-form");
const thankYouMessage = document.getElementById("thank-you-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      thankYouMessage.style.display = "block";
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }
});

// Scrollspy functionality
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 100;

  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
