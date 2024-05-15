document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.querySelector(".height");
  const weightInput = document.querySelector(".weight");
  const result = document.querySelector(".result");
  const calculateButton = document.querySelector(".calculate");
  const resetButton = document.querySelector(".reset");

  calculateButton.addEventListener("click", () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      error.textContent = "Please enter your height/weight";
      return;
    }

    const bmi = weight / height ** 2;
    result.textContent = `${bmi.toFixed(2)}`;
  });

  resetButton.addEventListener("click", () => {
    heightInput.value = "";
    weightInput.value = "";
    result.textContent = "";
error.textContent = "";
  });
});
