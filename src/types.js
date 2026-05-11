/**
 * @typedef {Object} Move a move for the move history array
 * @property {Object} piece - The piece being moved.
 * @property {string} piece.type - The type of piece (e.g., 'pawn').
 * @property {"white"|"black"} piece.color - The color of the piece (e.g., 'white').
 * @property {number} from - The starting square index.
 * @property {number} to - The destination square index.
 * @property {Object|Null} captured - The piece being captured or null if not found
 */

/**
 * @typedef {Object} Piece the piece object inside the board state
 * @property {String} type
 * @property {Number} index
 * @property {"white"|"black"} color
 * @property {Boolean} hasMoved
 */

/**
 * @typedef {"white"|"black"} Turn The current player turn
 */

/**
 * @typedef {Piece[]|Null} BoardState The Board State
 */

export const _ = {};
