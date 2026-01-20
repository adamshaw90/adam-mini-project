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

// This stops the game if someone wins
let gameOver = false;

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

// Check for a winner

function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) { // Loop through the winpatterns
    let a = winPatterns[i][0];
    let b = winPatterns[i][1]; // The 3 positions in one winline
    let c = winPatterns[i][2];

    let value1 = boxes[a].textContent;
    let value2 = boxes[b].textContent; // These 3 read the textcontent to see if there is an x or o
    let value3 = boxes[c].textContent;

    if (value1 !== "" && value1 === value2 && value1 === value3) {
      return value1;
    }
  }
  return null;
}


