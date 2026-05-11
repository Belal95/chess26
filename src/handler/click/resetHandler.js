import { resetGame } from "../../Logic/resetGame.js";
import { render } from "../../UI/render.js";
import { updateTurnIndicator } from "../../UI/updateTurnIndicator.js";

/**
 * @param {Event} e The event object
 */
export function resetHandler(e) {
  resetGame();
  updateTurnIndicator("white");
  render();
}
