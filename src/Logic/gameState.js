/**
 * Holds current selected Piece
 */
let active = null;
/**
 * Holds true if white turn and false if blacks turn
 */
let turn = "white";
/**
 * Holds all the legal move for the selected piece
 */
let activeLegalMoves = [];

let pendingPromotion = null;

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
 * @returns {'white'|'black'} white or black
 */
const getPlayerTurn = () => turn;
/**
 * Switches the player's turn
 */
const switchTurn = () => {
  turn = turn === "white" ? "black" : "white";
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
 * Set Pending Promotion
 * @param {Object} pawn A pawn that's pending promotion
 */
const setPendingPromotion = (pawn) => {
  pendingPromotion = pawn;
};
/**
 * Returns the pawn pending promotion or null
 * @returns {Object|null} Get pending promotion
 */
const getPendingPromotion = () => pendingPromotion;

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
  getPlayerTurn,
  switchTurn,
  setActiveLegalMoves,
  getActiveLegalMoves,
  deselect,
  select,
  getPendingPromotion,
  setPendingPromotion,
};
