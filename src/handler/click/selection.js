import { game } from "../../Logic/gameState.js";
import { getLegalMoves } from "../../Logic/moves/index.js";
import { UI } from "../../UI/UI.js";
import { boardState as state } from "../../Logic/boardState.js";
const select = (piece, boardState = state) => {
  const moves = getLegalMoves(piece, boardState);
  UI.select(piece, moves);
  game.deselect(piece, moves);
};
const deselect = (piece) => {
  UI.deselect(piece);
  game.deselect();
};

export const selection = { select, deselect };
