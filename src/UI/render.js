import { pieces } from "../Data/symbols.js";
import { boardState } from "../Logic/boardState.js";
/**
 * Render Pieces from the board state to the ui board
 */
export function render() {
  for (let i = 0; i < boardState.length; i++) {
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
