import { piecesSymbols } from "../Data/symbols.js";
import { boardState } from "../Logic/boardState.js";
/**
 * Render piecesSymbols from the board state to the ui board
 */
export function render() {
  const state = boardState.get();
  for (let i = 0; i < state.length; i++) {
    const square = document.querySelector(`[index="${i}"]`);
    if (state[i] === null) square.innerHTML = null;
    else {
      const { type, color } = state[i];
      const div = document.createElement("div");
      div.classList = "piece";
      div.innerHTML = `${piecesSymbols[`${color}`][`${type}`]}`;
      square.innerHTML = null;
      square.appendChild(div);
    }
  }
}
