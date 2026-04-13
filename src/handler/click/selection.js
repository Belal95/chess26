import { game } from "../../Logic/gameState.js";
import { getLegalMoves } from "../../Logic/moves/index.js";
import { UI } from "../../UI/UI.js";
import { boardState as state } from "../../Logic/boardState.js";
const select = (piece, boardState = state) => {
  const moves = getLegalMoves(piece, boardState);
  UI.select(piece, moves);
  game.select(piece, moves);
};
const deselect = (piece) => {
  const moves = game.getActiveLegalMoves();
  UI.deselect(piece, moves);
  game.deselect();
};

export const selection = { select, deselect };
