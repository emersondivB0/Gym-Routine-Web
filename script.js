const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const exercises = button.nextElementSibling; // Use nextElementsSibling
    exercises.classList.toggle("hidden");
  });
});
