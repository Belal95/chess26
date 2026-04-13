let active = null;
let white = true;
let activeLegalMoves = [];

/**
 * Set the currently selected piece by the player
 * @param {Object} piece The piece that is currently selected by the player
 */
const setActive = (piece) => {
  active = piece;
};
/**
 * Get the currently selected piece by the player
 * @returns The piece that is currently selected by the player
 */
const getActive = () => active;
/**
 * Get the current player turn
 * @returns True if it's white's turn and false if it's black's turn.
 */
const isWhite = () => white;
/**
 * Switches the player's turn
 */
const switchTurn = () => {
  white = !white;
};
/**
 * Set the current legal moves for the active piece
 * @param {Array} moves index of the squares the active piece can move to
 */
const setActiveLegalMoves = (moves) => {
  activeLegalMoves = moves;
};
/**
 * Get the current legal moves for the active piece
 * @returns index of the squares the active piece can move to
 */
const getActiveLegalMoves = () => activeLegalMoves;
/**
 * Object with methods to set and get active and move list
 */

/**
 * Nulls active piece and legal moves
 */
const deselect = () => {
  game.setActive(null);
  game.setActiveLegalMoves([]);
};

/**
 * Put piece and legalMoves in the active state
 * @param {Object} piece
 * @param {Array} moves
 */
const select = (piece, moves) => {
  game.setActive(piece);
  game.setActiveLegalMoves(moves);
};

export const game = {
  setActive,
  getActive,
  isWhite,
  switchTurn,
  setActiveLegalMoves,
  getActiveLegalMoves,
  deselect,
  select,
};
