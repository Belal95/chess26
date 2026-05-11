import { boardState } from "../../Logic/boardState.js";
import { game } from "../../Logic/gameState.js";
import { handleFirstClick } from "./handelFirstClick.js";
import { handleSecondClick } from "./handleSecondClick.js";

/**
 * Handle any click interaction on the board
 * @param {Event} e The event object
 */
export function handleClick(e) {
  if (!!game.getPendingPromotion() || !!game.getGameOver()) {
    return;
  } else {
    const index = Number(e.target.closest(".square")?.getAttribute("index"));
    const clickedSquare = boardState.get()[index];
    const active = game.getActive();
    if (active === null) handleFirstClick(clickedSquare);
    else handleSecondClick(active, clickedSquare, index);
  }
}
