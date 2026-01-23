// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Form validation function
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");
  const formMessage = document.getElementById("formMessage");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
  formMessage.textContent = "";
  formMessage.className = "form-message";

  // Validation flags
  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Please enter your name";
    isValid = false;
  } else if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Please enter your email";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Phone validation
  const phoneRegex = /^\d{10}$/;
  if (phone !== "" && !phoneRegex.test(phone.replace(/\D/g, ""))) {
    phoneError.textContent = "Phone number must be exactly 10 digits";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Please enter your message";
    isValid = false;
  } else if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters long";
    isValid = false;
  }

  // If form is valid, show success message
  if (isValid) {
    formMessage.textContent =
      "Thank you for your message! We will get back to you soon.";
    formMessage.classList.add("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      document.getElementById("contactForm").reset();
      formMessage.textContent = "";
      formMessage.classList.remove("success");
    }, 5000);
  } else {
    formMessage.textContent = "Please fix the errors above and try again.";
    formMessage.classList.add("error");
  }
});

// Add hover effect to cake items
document.querySelectorAll(".cake-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Simple animation for special offer badge
const offerBadge = document.getElementById("offerBadge");
let animationState = true;

// Change badge color every 5 seconds
setInterval(() => {
  if (animationState) {
    offerBadge.style.backgroundColor = "#ff6b8b";
    offerBadge.style.color = "white";
  } else {
    offerBadge.style.backgroundColor = "#ffcc00";
    offerBadge.style.color = "#333";
  }
  animationState = !animationState;
}, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
