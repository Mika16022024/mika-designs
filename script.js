// Quote Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop default submission for now

    // Clear old error messages
    form.querySelectorAll(".error").forEach(el => el.remove());

    let isValid = true;

    // Helper function to show error
    const showError = (input, message) => {
      const error = document.createElement("small");
      error.classList.add("error");
      error.style.color = "red";
      error.style.display = "block";
      error.style.marginTop = "0.3rem";
      error.textContent = message;
      input.insertAdjacentElement("afterend", error);
      isValid = false;
    };

    // Validate Full Name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      showError(name, "Full Name is required.");
    }

    // Validate WhatsApp Number
    const whatsapp = document.getElementById("whatsapp");
    if (whatsapp.value.trim() === "") {
      showError(whatsapp, "WhatsApp number is required.");
    }

    // Validate Product Selection
    const product = document.getElementById("product");
    if (product.value === "") {
      showError(product, "Please select a product/service.");
    }

    // Validate Quantity
    const quantity = document.getElementById("quantity");
    if (quantity.value === "" || parseInt(quantity.value) < 1) {
      showError(quantity, "Please enter a valid quantity.");
    }

    // If valid, show success message
    if (isValid) {
      alert("Quote request submitted successfully! (Demo only)");
      form.reset();
    }
  });
});
// Shrink nav bar on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});
