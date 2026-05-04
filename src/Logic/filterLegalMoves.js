import { boardState } from "./boardState.js";
import { checkedKing } from "./checkedKing.js";
import { simulateMove } from "./simulateMove.js";

/**
 * Filters all the legal moves from all the possible moves
 * @param {Number} from Stating square of a piece
 * @param {Number[]} moves Array of all possible moves
 * @param {"white"|"black"} color The color of the piece
 * @returns {Number[]} All Legal Moves
 */

export const filterLegalMoves = (from, moves, color) => {
  return moves.filter((to) => {
    const stateCopy = simulateMove(boardState.get(), from, to);
    return !checkedKing(color, stateCopy);
  });
};
