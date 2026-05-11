import { resetGame } from "../../Logic/resetGame.js";
import { updateTurnIndicator } from "../../UI/updateTurnIndicator.js";

/**
 * @param {Event} e The event object
 */
export function resetHandler(e) {
  resetGame();
  updateTurnIndicator();
  render();
}
