import { boardState } from "./boardState.js";
import { Board } from "./board.js";
import { pieces } from "../Logic/piecesSymbols.js";

export function renderPieces() {
  for (let i = 0; i < boardState.length; i++) {
    // const { row, col } = Board.getSquarePosition(i);
    const square = document.querySelector(`[index="${i}"]`);
    if (boardState[i] === null) square.innerHTML = null;
    else {
      const { type, color } = boardState[i];
      const div = document.createElement("div");
      div.classList = "piece";
      div.innerHTML = `${pieces[`${color}`][`${type}`]}`;
      square.innerHTML = null;
      square.appendChild(div);
    }
  }
}
