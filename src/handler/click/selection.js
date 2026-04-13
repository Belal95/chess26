import { game } from "../../Logic/gameState.js";
import { getLegalMoves } from "../../Logic/moves/index.js";
import { UI } from "../../UI/UI.js";
import { boardState } from "../../Logic/boardState.js";
const select = (piece, state = boardState.get()) => {
  const moves = getLegalMoves(piece, state);
  UI.select(piece, moves);
  game.select(piece, moves);
};
const deselect = (piece) => {
  const moves = game.getActiveLegalMoves();
  UI.deselect(piece, moves);
  game.deselect();
};

export const selection = { select, deselect };
