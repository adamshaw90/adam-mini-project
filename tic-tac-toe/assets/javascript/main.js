const boxes = document.querySelectorAll(".box");

// Logic for players to click in the boxes and display x or o

let currentPlayer = "X";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;

    box.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});


// Win conditions logic

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
