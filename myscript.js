let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
const statusDisplay = document.getElementById('status');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < 8; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusDisplay.innerHTML = "Game ended in a draw!";
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
}

function makeMove(index) {
    if (board[index] !== "" || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerHTML = currentPlayer;
    handleResultValidation();
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameActive = true;
    statusDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
