/**
 * All knight moves direction
 */
const knight = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

/**
 * All bishop moves direction
 */
const bishop = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

/**
 * All rook moves direction
 */
const rook = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * All queen moves direction
 */
const queen = [...bishop, ...rook];

/**
 * All king moves direction
 */
const king = queen;

/**
 * All pieces moves directions except for the pawn
 */
export const direction = { bishop, knight, rook, queen, king };
