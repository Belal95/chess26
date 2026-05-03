import { movePiece } from "./movePiece.js";
/**
 * Simulate a move on a copy of the sent boeardstate
 * @param {*} boardState
 * @param {*} from
 * @param {*} to
 * @returns
 */
export const simulateMove = (boardState, from, to) => {
  const copyState = structuredClone(boardState);
  movePiece(copyState, from, to);
  return copyState;
};
