import { Board } from "./UI/board.js";
import { boardState } from "./UI/boardState.js";
import { renderPieces } from "./UI/renderPieces.js";
const board = document.getElementById("board");
Board.createBoard(board);
renderPieces();
board.addEventListener("click", (e) => {
  console.log(e.target);
});
// console.log(boardState);
