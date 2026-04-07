import { Board } from "./board.js";
import { boardState } from "./boardState.js";
const board = document.getElementById("board");
Board.createBoard(board);
console.log(boardState);
