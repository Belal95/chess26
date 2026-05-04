import { createBoard } from "./src/UI/board.js";
import { handleClick } from "./src/handler/click/click.js";
import { render } from "./src/UI/render.js";
import { updateTurnIndicator } from "./src/UI/updateTurnIndicator.js";
export const board = document.getElementById("board");
createBoard(board);
updateTurnIndicator("white");
render();
board.addEventListener("click", handleClick);
