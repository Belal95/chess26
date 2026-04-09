import { createBoard } from "./src/UI/board.js";
import { render } from "./src/UI/render.js";
const board = document.getElementById("board");
createBoard(board);
render();
board.addEventListener("click", (e) => {
  console.log(e.target);
});
