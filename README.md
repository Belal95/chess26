# ♟️ Chess

A fully functional chess game built with vanilla JavaScript, HTML, and CSS — no frameworks, no libraries.

## Features

- ✅ Chessboard rendering
- ✅ Piece selection & movement
- ✅ Legal move highlighting (valid moves, captures)
- ✅ Illegal move filtering (cannot expose own king to check)
- ✅ Castling (kingside & queenside)
- ✅ En passant
- ✅ Pawn promotion (with piece selection modal)
- ✅ Check, checkmate & stalemate detection
- ✅ Move history tracking

## Planned Features

- [ ] Turn indicator
- [ ] Visual check warning
- [ ] Game over screen improvements
- [ ] Move history UI
- [ ] Captured pieces display & material difference
- [ ] Flip board
- [ ] Dark mode
- [ ] Welcome / start screen
- [ ] Timed modes (bullet, blitz, rapid)
- [ ] Chess notation
- [ ] Chess engine (AI opponent)
- [ ] Move suggestion engine
- [ ] Multiplayer (LAN & online)

## Project Structure

```
chess/
├── index.html
├── script.js
├── style.css
├── src/
│   ├── Data/
│   │   └── symbols.js           # Unicode piece symbols
│   ├── Logic/
│   │   ├── boardState.js        # Singleton board state
│   │   ├── gameState.js         # Turn, selection, move history
│   │   ├── movePiece.js         # Move execution (castling, en passant)
│   │   ├── simulateMove.js      # Move simulation for legality checks
│   │   ├── filterLegalMoves.js  # Filters moves that expose king
│   │   ├── checkedKing.js       # Check detection
│   │   ├── hasLegalMoves.js     # Checkmate / stalemate detection
│   │   ├── getPromotablePawn.js # Promotion detection
│   │   ├── helpers.js           # Index / row / col utilities
│   │   └── moves/
│   │       ├── index.js         # getRawMoves / getLegalMoves
│   │       ├── pawn.js
│   │       ├── knight.js
│   │       ├── bishop.js
│   │       ├── rook.js
│   │       ├── queen.js
│   │       ├── king.js
│   │       ├── sliding.js       # Shared sliding piece logic
│   │       ├── castling.js
│   │       ├── enPassant.js
│   │       └── direction.js     # Direction vectors per piece
│   ├── UI/
│   │   ├── board.js             # Board DOM creation
│   │   ├── square.js            # Square DOM utilities
│   │   ├── render.js            # Renders board state to DOM
│   │   ├── UI.js                # Select / deselect highlighting
│   │   ├── promotionModal.js    # Promotion piece picker
│   │   └── gameOver.js          # Game over display
│   └── handler/
│       └── click/
│           ├── click.js         # Main click handler
│           ├── handelFirstClick.js
│           ├── handleSecondClick.js
│           └── selection.js     # Select / deselect logic
```

## How to Run

No build step required. Serve with any static file server:

```bash
# Using VS Code Live Server, or:
npx serve .
# Then open http://localhost:3000
```

## Architecture Notes

- **boardState** is a singleton array of 64 squares (`null` or a piece object)
- **gameState** tracks turn, active piece, legal moves, move history, and pending promotion
- **simulateMove + filterLegalMoves** pattern ensures no move leaves the king in check
- **movePiece** handles all special moves: castling (rook relocation), en passant (captured pawn removal), and `hasMoved` tracking
- Piece moves are split into raw moves (all reachable squares) and legal moves (filtered for king safety)

## Board Indexing

```
 0  1  2  3  4  5  6  7   ← row 1 (black back rank)
 8  9 10 11 12 13 14 15   ← row 2
...
56 57 58 59 60 61 62 63   ← row 8 (white back rank)
```

- `col = (index % 8) + 1`
- `row = Math.floor(index / 8) + 1`
