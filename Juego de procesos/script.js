// Crear la tabla del juego
const gameBoard = document.getElementById("game-board");
for (let i = 0; i < 6; i++) {
    const row = gameBoard.insertRow();
    for (let j = 0; j < 7; j++) {
        const cell = row.insertCell();
        cell.textContent = "";
    }
}

// Variables del juego
let currentPlayer = "X";
let gameOver = false;
let winningCombos = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], // horizontal
    [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24], // vertical
    [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27], // diagonal izquierda
    [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24] // diagonal derecha
];

// Función para manejar el click en una celda
gameBoard.addEventListener("click", (e) => {
    if (gameOver) return;
    const cell = e.target;
    if (cell.textContent !== "") return;
    cell.textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
});

// Función para verificar si hay un ganador
function checkWin() {
    for (let combo of winningCombos) {
        let cells = combo.map((index) => gameBoard.rows[Math.floor(index / 7)].cells[index % 7]);
        if (cells.every((cell) => cell.textContent === currentPlayer)) {
            alert(`El jugador ${currentPlayer} ha ganado!`);
            gameOver = true;
            return;
        }
    }
}