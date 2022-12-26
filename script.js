const cells = document.querySelectorAll("td");
let currentPlayer = "X";
let gameOver = false;

for (const cell of cells) {
  cell.addEventListener("click", function(event) {
    if (event.target.textContent === "" && !gameOver) {
      event.target.textContent = currentPlayer;
      currentPlayer = (currentPlayer === "X") ? "O" : "X";
      checkWin();
    }
  });
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    if (cells[combination[0]].textContent === cells[combination[1]].textContent &&
        cells[combination[1]].textContent === cells[combination[2]].textContent &&
        cells[combination[0]].textContent !== "") {
      gameOver = true;
      alert(`Player ${cells[combination[0]].textContent} wins!`);
      return;
    }
  }

  let tie = true;
  for (const cell of cells) {
    if (cell.textContent === "") {
      tie = false;
      break;
    }
  }

  if (tie) {
    gameOver = true;
    alert("It's a tie!");
  }
}
