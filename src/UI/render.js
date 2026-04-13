import { pieces } from "../Data/symbols.js";
import { boardState } from "../Logic/boardState.js";
/**
 * Render Pieces from the board state to the ui board
 */
export function render() {
  for (let i = 0; i < boardState.get().length; i++) {
    const square = document.querySelector(`[index="${i}"]`);
    if (boardState.get()[i] === null) square.innerHTML = null;
    else {
      const { type, color } = boardState.get()[i];
      const div = document.createElement("div");
      div.classList = "piece";
      div.innerHTML = `${pieces[`${color}`][`${type}`]}`;
      square.innerHTML = null;
      square.appendChild(div);
    }
  }
}
