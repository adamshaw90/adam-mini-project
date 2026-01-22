// This pulls the 9 box elements from the html
const boxes = document.querySelectorAll(".box");


// This pulls the winner message ID from the html - a p element that will display the winner
const winnerMessage = document.querySelector("#winnerMessage");


// This stops the game if someone wins - basically it is not game over, until someone wins
let gameOver = false;


// Defining current player as X, so the game always starts with X
let currentPlayer = "X";


// This is a foreach loop, it is going to listen for a click inside each box and execute the code
boxes.forEach((box) => {
  box.addEventListener("click", () => { // Listening for the click
    if (gameOver) return; // Kill the loop of someone has won
    
    if (box.textContent !== "") return; // Stop boxes with content from being overwritten
    box.textContent = currentPlayer; // Inserts the x or o

    let winner = checkWinner(); // Call the check winner function below

    if (winner !== null) { // If winner does not equal null - someone won the game
    winnerMessage.textContent = winner + " wins!"; // Display the winner text in winnermessage element
    gameOver = true; // Stop clicks from working
    return; // Kill the click event handler

}  
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switches player
  });
});



// Defining the winning patterns, each array element is a line in how someone can win
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

// Check for a winner logic

function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) { // Loop through the winpatterns array
    let a = winPatterns[i][0];
    let b = winPatterns[i][1]; // The 3 positions that will make up a winline
    let c = winPatterns[i][2];

    let value1 = boxes[a].textContent;
    let value2 = boxes[b].textContent; // These 3 read the textcontent to see if there is an x or o inside
    let value3 = boxes[c].textContent;

     // This basically means if value is not empty and matches values 2 and 3, then a winner is detected, if not, the loop returns null meaning no winner found yet.
    if (value1 !== "" && value1 === value2 && value1 === value3) {
      return value1;
    }
  }
  return null;
}
