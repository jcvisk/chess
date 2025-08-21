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
    console.log($board);
    renderBoard();
}

function getSquareColor(rowIndex, columnIndex) {
    if (rowIndex % 2 === 0) {
        if (columnIndex % 2 === 0) {
            return 'light';
        } else {
            return 'dark';
        }
    } else {
        if (columnIndex % 2 === 0) {
            return 'dark';
        } else {
            return 'light';
        }
    }
}

function renderBoard() {
    for (let i = 0; i < $board.length; i++) {
        const fila = $board[i];
        for (let j = 0; j < fila.length; j++) {
            const celda = fila[j];
            const div = document.createElement("div");
            div.classList.add("square");
            div.setAttribute("cell", celda.columna + celda.fila);
            div.classList.add(celda.color);
            boardContainer.appendChild(div);
        }
    }
}

function pieces(){
    function setPiece(){

    }

    function movePiece(){

    }
}
buildBoard();

