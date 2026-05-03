import { boardState } from "../../Logic/boardState.js";
import { game } from "../../Logic/gameState.js";
import { handleFirstClick } from "./handelFirstClick.js";
import { handleSecondClick } from "./handleSecondClick.js";

/**
 * Handle any click interaction on the board
 * @param {Event} e The event object
 */
export function handleClick(e) {
  if (!!game.getPendingPromotion()) {
    return;
  } else {
    const index = Number(e.target.closest(".square").getAttribute("index"));
    const clickedPiece = boardState.get()[index];
    const active = game.getActive();
    if (active === null) handleFirstClick(clickedPiece);
    else handleSecondClick(active, clickedPiece, index);
  }
}
