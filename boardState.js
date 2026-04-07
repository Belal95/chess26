const getFirstSquareIndexInRow = (row) => (row - 1) * 8;
/**
 * @param boardState The actual board state
 */
export const boardState = new Array(64).fill(null);

/**
 * Fills board state black or white back row with pieces, takes row number and pieces color
 * @param {Number} row - row number that needs to be filled
 * @param {String} color - pieces color
 */
const fillBackRow = (row, color) => {
  const backRow = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
  ];
  let index = getFirstSquareIndexInRow(row);
  backRow.forEach((type) => {
    boardState[index] = { type, color, index };
    index++;
  });
};
/**
 * Fills board state black or white second row with pawns, takes row number and pieces color
 * @param {Number} row - row number that needs to be filled
 * @param {String} color -pieces color
 */
const fillPawnRow = (row, color) => {
  const type = "pawn";
  let index = getFirstSquareIndexInRow(row);

  for (let i = 0; i < 8; i++) {
    boardState[index] = { type, color, index };
    index++;
  }
};

fillBackRow(1, "black");
fillPawnRow(2, "black");
fillPawnRow(7, "white");
fillBackRow(8, "white");
