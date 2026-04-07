import { boardState } from "./boardState.js";
import { Board } from "./board.js";
import { pieces } from "./piecesSymbols.js";

export function renderPieces() {
  for (let i = 0; i < boardState.length; i++) {
    if (boardState[i] === null);
    else {
      const { row, col } = Board.getSquarePosition(i);
      const { type, color } = boardState[i];
      console.log(pieces[`${color}`][`${type}`]);
      const square = document.querySelector(`[row="${row}}"][col="${col}}"]`);
      console.log(square);
      square.innerHTML = `${pieces[`${color}`][`${type}`]}`;
    }
    // console.log(boardState);
  }
}
