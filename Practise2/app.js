const messageEl = document.getElementById("message");
const buttonEl = document.getElementById("changeTextBtn");

buttonEl.addEventListener("click", () => {
  messageEl.textContent = "Button clicked! Your Practise2 project is working.";
});
