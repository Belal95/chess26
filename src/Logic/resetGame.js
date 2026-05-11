import { boardState } from "./boardState.js";
import { game } from "./gameState.js";

/**
 * Resets the game state and board state
 */
export function resetGame() {
  game.reset();
  boardState.reset();
}
