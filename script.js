import { Board } from "./board.js";
import { boardState } from "./boardState.js";
import { renderPieces } from "./renderPieces.js";
const board = document.getElementById("board");
Board.createBoard(board);
renderPieces();
// console.log(boardState);
