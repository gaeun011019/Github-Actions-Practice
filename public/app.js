const form = document.querySelector("#calculator");
const result = document.querySelector("#result");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const total = calculator.calculate(
      document.querySelector("#first").value,
      document.querySelector("#second").value
    );
    result.textContent = `결과: ${total}`;
    result.className = "success";
  } catch (error) {
    result.textContent = error.message;
    result.className = "error";
  }
});
form.addEventListener("reset", () => {
  result.textContent = "두 숫자를 입력하고 계산해보세요.";
  result.className = "";
});
