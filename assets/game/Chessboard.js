import Piece from "./Piece.js";
import Square from "./Square.js";

const boardContainer = document.getElementById('chess-board');

const COLUMNS = 'ABCDEFGH'.split('');
const ROWS = '87654321'.split('');
const $board = [];

const STATUS = {
    ACTIVE: 'active',
}

function buildBoard() {
    for (let i = 0; i < ROWS.length; i++) {
        if (!$board[i]) {
            $board[i] = [];
        }
        for (let j = 0; j < COLUMNS.length; j++) {
            $board[i].push(new Square(ROWS[i], COLUMNS[j], getSquareColor(i, j), null));
        }
    }
}

function getSquareColor(rowIndex, columnIndex) {
    if (rowIndex % 2 === 0) {
        return columnIndex % 2 === 0 ? 'light' : 'dark';
    } else {
        return columnIndex % 2 === 0 ? 'dark' : 'light';
    }
}

function renderBoard() {

    $board.forEach((fila, index) => {
        fila.forEach(casilla => {
            console.log(casilla);

            const cell = document.createElement("div");
            cell.classList.add("square");
            cell.setAttribute("cell", casilla.column + casilla.row);
            cell.classList.add(casilla.color);
            if (casilla.piece){
                console.log(casilla.piece.color);
                const piece = document.createElement("span");
                piece.classList.add("sprite");
                piece.classList.add(`${casilla.piece.color}-${casilla.piece.type}`);
                cell.appendChild(piece);
            }
            boardContainer.appendChild(cell);
        });
    });
}

function resetBoard() {
    $board.forEach((row, index) => {
        row.forEach(cell => {
            if (index === 1){
                cell.piece = new Piece('pawn', 'b', `${cell.column}${cell.row}`, STATUS.ACTIVE);
            }

            if (index === 6){
                cell.piece = new Piece('pawn', 'w', `${cell.column}${cell.row}`, STATUS.ACTIVE);
            }
        });
    });
}


function initGame() {
    buildBoard();
    resetBoard();
    renderBoard();
}

initGame();
