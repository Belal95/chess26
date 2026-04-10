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
const bishop = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];
const rook = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const queen = [...bishop, ...rook];
const king = queen;
export const direction = { bishop, knight, rook, queen, king };
