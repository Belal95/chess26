export const movePiece = (boardState, from, to) => {
  boardState[to] = boardState[from];
  boardState[to].index = to;
  boardState[from] = null;
};
