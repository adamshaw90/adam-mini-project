const boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;

    box.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});