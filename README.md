# ♟️ Chess

> A fully functional chess game built with **vanilla JavaScript, HTML, and CSS** — no frameworks, no libraries, no build step.

![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Modules](https://img.shields.io/badge/Modules-ES%20Modules-green?style=flat)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=flat)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to Run](#how-to-run)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Architecture Deep Dive](#architecture-deep-dive)
- [Data Structures](#data-structures)
- [Game Flow](#game-flow)
- [Special Move Implementation](#special-move-implementation)
- [Roadmap](#roadmap)
- [Design Decisions](#design-decisions)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is a fully playable two-player chess game running entirely in the browser. It implements the complete FIDE ruleset for standard chess, including all special moves. The codebase is intentionally built without any frameworks or build tools — the goal is clean, readable, modular vanilla JavaScript using native ES Modules.

---

## Features

### ✅ Implemented

| Feature                     | Description                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Chessboard rendering**    | 8×8 grid built dynamically from JavaScript — no hardcoded HTML squares                                     |
| **Piece rendering**         | Unicode chess symbols synced from a state array on every update                                            |
| **Piece selection**         | Click to select; highlights the selected piece in green                                                    |
| **Legal move highlighting** | Valid moves shown in yellow, captures in red                                                               |
| **Illegal move filtering**  | No move is allowed if it leaves the player's own king in check                                             |
| **Castling**                | Kingside & queenside — validates king/rook `hasMoved`, clear path, and king safety on every transit square |
| **En passant**              | Detected from move history; captured pawn silently removed from board state                                |
| **Pawn promotion**          | Modal appears on promotion rank; player picks queen, rook, bishop, or knight                               |
| **Check detection**         | Scans all raw enemy moves against the king's current square                                                |
| **Checkmate detection**     | Triggers when the active color has zero legal moves and king is in check                                   |
| **Stalemate detection**     | Triggers when the active color has zero legal moves and king is not in check                               |
| **Move history tracking**   | Every move recorded as `{ piece, from, to }` in a history array                                            |

### 🔲 Planned

#### Phase 2 — Game UX

- [ ] Turn indicator (whose turn it is)
- [ ] Visual check warning (highlight king square)
- [ ] Game over screen improvements
- [ ] Move history UI (scrollable algebraic notation list)
- [ ] Captured pieces display & material difference
- [ ] Flip board

#### Phase 3 — Polish

- [ ] Dark mode
- [ ] Welcome / start screen
- [ ] Timed modes (bullet · blitz · rapid)
- [ ] Algebraic chess notation

#### Phase 4 — AI & Analysis

- [ ] Chess engine (AI opponent with difficulty levels)
- [ ] Move suggestion engine (best move viewer)

#### Phase 5 — Multiplayer

- [ ] LAN multiplayer
- [ ] Online multiplayer

---

## How to Run

No installation or build step required. Just serve the project with any static file server:

```bash
# Option 1 — Node (npx, no install needed)
npx serve .

# Option 2 — Python 3
python -m http.server 3000

# Option 3 — VS Code
# Install the "Live Server" extension → right-click index.html → Open with Live Server
```

Then open **http://localhost:3000** in your browser.

> ⚠️ Must be served over HTTP — ES Modules don't load from `file://` due to CORS restrictions.

---

## How to Play

1. **Select a piece** — click any piece belonging to the current player (white goes first)
2. **See legal moves** — valid destination squares highlight automatically
3. **Move** — click any highlighted square to move the piece
4. **Reselect** — click a different own piece to switch selection
5. **Deselect** — click the same piece again to cancel selection
6. **Promotion** — when a pawn reaches the back rank, a modal appears to choose the promoted piece
7. **Game over** — checkmate or stalemate is detected automatically after each move

---

## Project Structure

```
chess/
├── index.html                           # Shell — board, promotion modal, win display
├── script.js                            # Entry point — init board, render, attach listener
├── style.css                            # All styles including CSS custom properties
└── src/
    ├── Data/
    │   └── symbols.js                   # Unicode piece symbol map { white, black }
    │
    ├── Logic/
    │   ├── boardState.js                # Singleton — the 64-square source of truth
    │   ├── gameState.js                 # Turn, active piece, legal moves, history, promotion
    │   ├── movePiece.js                 # Executes moves + side effects (castling, en passant)
    │   ├── simulateMove.js              # Clones state and applies move without recording
    │   ├── filterLegalMoves.js          # Filters moves that expose own king to check
    │   ├── checkedKing.js               # Returns true if a color's king is under attack
    │   ├── hasLegalMoves.js             # Detects checkmate / stalemate
    │   ├── getPromotablePawn.js         # Finds any pawn sitting on promotion rank
    │   ├── helpers.js                   # Index ↔ row/col math utilities
    │   └── moves/
    │       ├── index.js                 # getRawMoves / getLegalMoves — central dispatcher
    │       ├── pawn.js                  # Push, double push, diagonal captures
    │       ├── knight.js                # L-shape jumps
    │       ├── bishop.js                # Diagonal slides
    │       ├── rook.js                  # Rank & file slides
    │       ├── queen.js                 # Bishop + rook combined
    │       ├── king.js                  # One-square all directions (no castling here)
    │       ├── sliding.js               # Reusable sliding logic for bishop/rook/queen/king
    │       ├── castling.js              # Castling legality — hasMoved + path + safety
    │       ├── enPassant.js             # En passant detection via last move record
    │       └── direction.js             # Direction vectors per piece type
    │
    ├── UI/
    │   ├── board.js                     # Creates 64 square divs and appends to #board
    │   ├── square.js                    # Square factory + addClass / removeClass helpers
    │   ├── render.js                    # Reads boardState → writes piece symbols to DOM
    │   ├── UI.js                        # Applies/removes highlight classes on select/deselect
    │   ├── promotionModal.js            # Builds promotion picker and fires callback on choice
    │   └── gameOver.js                  # Writes checkmate / stalemate message to #win
    │
    └── handler/
        └── click/
            ├── click.js                 # Entry — reads index, routes to first or second click
            ├── handelFirstClick.js      # First click — select own piece or ignore
            ├── handleSecondClick.js     # Second click — move, reselect, deselect, or ignore
            └── selection.js             # Coordinates UI highlight + game state on select/deselect
```

---

## Architecture Deep Dive

### Board Indexing

The board is a flat array of 64 elements. Index `0` is the top-left square (black's back rank), index `63` is the bottom-right (white's back rank).

```
     a    b    c    d    e    f    g    h
   ┌────┬────┬────┬────┬────┬────┬────┬────┐
 1 │  0 │  1 │  2 │  3 │  4 │  5 │  6 │  7 │  ← black back rank
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 2 │  8 │  9 │ 10 │ 11 │ 12 │ 13 │ 14 │ 15 │
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 3 │ 16 │ 17 │ 18 │ 19 │ 20 │ 21 │ 22 │ 23 │
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 4 │ 24 │ 25 │ 26 │ 27 │ 28 │ 29 │ 30 │ 31 │
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 5 │ 32 │ 33 │ 34 │ 35 │ 36 │ 37 │ 38 │ 39 │
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 6 │ 40 │ 41 │ 42 │ 43 │ 44 │ 45 │ 46 │ 47 │
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 7 │ 48 │ 49 │ 50 │ 51 │ 52 │ 53 │ 54 │ 55 │
   ├────┼────┼────┼────┼────┼────┼────┼────┤
 8 │ 56 │ 57 │ 58 │ 59 │ 60 │ 61 │ 62 │ 63 │  ← white back rank
   └────┴────┴────┴────┴────┴────┴────┴────┘
```

```js
col = (index % 8) + 1; // 1–8 (a–h)
row = Math.floor(index / 8) + 1; // 1–8
index = (row - 1) * 8 + (col - 1);
```

White pawns move **toward row 1** — negative index direction (`index - 8`).  
Black pawns move **toward row 8** — positive index direction (`index + 8`).

---

### Core Architecture Patterns

#### 1. Singleton State

`boardState` and `gameState` are module-level singletons. They are never instantiated — they are imported and mutated in place. This keeps state centralized and avoids passing data through layers.

```
boardState  →  array[64]  →  source of truth for all piece positions
gameState   →  turn, active piece, legalMoves, moveHistory, pendingPromotion
```

#### 2. Raw Moves vs Legal Moves

Every piece has two move generation layers:

```
getRawMoves(piece, boardState)
  └─ All geometrically reachable squares
  └─ Used for: check detection (scanning enemy threats)

getLegalMoves(piece, boardState)
  └─ getRawMoves filtered through filterLegalMoves
  └─ Used for: player interaction + checkmate/stalemate detection
```

This separation is critical. Check detection must use **raw** moves — if enemy moves were also filtered, you'd have circular logic: king safety depends on enemy legal moves, which depend on king safety.

#### 3. Simulate → Filter Pattern

No move touches the real board until it passes legality. Every candidate is tested on a deep clone:

```
for each candidateMove in rawMoves:
  clone = structuredClone(boardState)
  apply move to clone
  if own king NOT in check on clone → move is legal → keep it
```

#### 4. Unidirectional UI Sync

The DOM is never the source of truth. The render cycle flows in one direction only:

```
User click
  → mutate gameState / boardState
  → call render()
  → render() reads boardState → writes piece symbols to DOM squares
```

---

## Data Structures

### Piece Object

```js
// Standard piece (pawn, bishop, knight, queen)
{ type: "pawn", color: "white", index: 52 }

// Tracked piece — king and rooks only (needed for castling validation)
{ type: "king", color: "white", index: 60, hasMoved: false }

// After pawn promotion — type mutated in place
{ type: "queen", color: "white", index: 0 }
```

### Board State Array

```js
// 64 entries — null (empty) or a piece object
const state = [
  { type: "rook", color: "black", index: 0, hasMoved: false }, // a1
  { type: "knight", color: "black", index: 1 }, // b1
  { type: "bishop", color: "black", index: 2 }, // c1
  // ...
  null, // empty square
  // ...
  { type: "king", color: "white", index: 60, hasMoved: false }, // e8
];
```

### Move History Entry

```js
// index and hasMoved are stripped — history records intent, not live state
{
  piece: { type: "pawn", color: "white" },
  from: 52,
  to: 36
}
```

### Game State

```js
{
  active: Piece | null,          // currently selected piece
  turn: "white" | "black",       // whose turn it is
  activeLegalMoves: number[],    // indexes the active piece can move to
  pendingPromotion: Piece | null,// pawn awaiting promotion choice
  moveHistory: Move[]            // full game history
}
```

---

## Game Flow

### Click Routing

```
click on #board
  │
  ├─ pendingPromotion set? → block all input, return
  │
  ├─ no active piece?
  │     └─ handleFirstClick(clickedSquare)
  │           └─ clicked own piece? → select → highlight legal moves
  │           └─ clicked enemy / empty? → ignore
  │
  └─ active piece exists?
        └─ handleSecondClick(active, clickedSquare, index)
              ├─ same square as active?  → deselect
              ├─ own piece?              → deselect → select new piece
              ├─ index in legalMoves?    → move → render → check promotion → afterMove
              └─ anything else?          → deselect
```

### Move Execution Pipeline

```
move(to)
  │
  ├─ deselect(active)              — clears UI highlights + game state selection
  ├─ movePiece(boardState, from, to)
  │     ├─ record to history       — { piece, from, to }
  │     ├─ handelEnPassant         — remove captured pawn if diagonal + empty target
  │     ├─ boardState[to] = boardState[from]
  │     ├─ boardState[to].index = to
  │     ├─ handleCastling          — relocate rook if king moved 2 squares
  │     │     └─ set hasMoved = true on king/rook
  │     └─ boardState[from] = null
  │
  ├─ render()                      — sync DOM from updated boardState
  │
  └─ promoting()?
        ├─ YES → show modal → on choice: mutate pawn type → render → afterMove
        └─ NO  → afterMove
                   ├─ switchTurn
                   └─ handleWinConditions → checkmate / stalemate → gameOver
```

---

## Special Move Implementation

### Castling

| Check             | Detail                                                    |
| ----------------- | --------------------------------------------------------- |
| King hasn't moved | `king.hasMoved === false`                                 |
| Rook hasn't moved | `rook.hasMoved === false`                                 |
| Clear path        | All squares between king and rook are `null`              |
| King safety       | King is not in check at start, transit, or landing square |

On execution: king moves 2 squares toward the rook; the rook teleports to the square the king crossed.

### En Passant

| Check                            | Detail                                                           |
| -------------------------------- | ---------------------------------------------------------------- |
| Correct rank                     | Capturing pawn is on row 4 (white) or row 5 (black)              |
| Last move was a double pawn push | `Math.abs(from - to) === 2` on last move                         |
| Adjacent                         | Last move's landing square is directly beside the capturing pawn |

On execution: pawn moves diagonally to the **empty** square behind the captured pawn; the captured pawn is removed from its physical square (one rank back from the destination).

### Pawn Promotion

| Step       | Detail                                                                    |
| ---------- | ------------------------------------------------------------------------- |
| Detection  | After each move, `getPromotablePawn` scans for any pawn on row 1 or row 8 |
| Input lock | `pendingPromotion` is set — all click events return early                 |
| Modal      | Player clicks a piece; callback fires with the chosen type                |
| Mutation   | `pawn.type` is overwritten in place on the live board state               |
| Resume     | `pendingPromotion` cleared → `render()` → `afterMove()` → turn switches   |

---

## Roadmap

| Phase                 | Focus                                                                                                 | Status         |
| --------------------- | ----------------------------------------------------------------------------------------------------- | -------------- |
| **1 — Core Rules**    | Board, rendering, movement, filtering, castling, en passant, promotion, check / checkmate / stalemate | ✅ Complete    |
| **2 — Game UX**       | Turn indicator, check warning, game over screen, move history UI, captured pieces, flip board         | 🔄 In Progress |
| **3 — Polish**        | Dark mode, welcome screen, timed modes, algebraic notation                                            | 🔲 Planned     |
| **4 — AI & Analysis** | Chess engine with difficulty levels, move suggestion engine                                           | 🔲 Planned     |
| **5 — Multiplayer**   | LAN multiplayer, online multiplayer                                                                   | 🔲 Planned     |

---

## Design Decisions

**Why no framework?**  
The goal is to rebuild JavaScript fluency through real implementation. Frameworks abstract away the exact concepts that need reinforcing — state management, DOM synchronization, event delegation, and modular design.

**Why a flat array instead of a 2D array?**  
A flat array with index math is idiomatic for chess engines. It simplifies sliding piece logic, direction vectors, and boundary checks. Converting to row/col only happens when the geometry explicitly requires it.

**Why `structuredClone` for move simulation?**  
Piece objects are nested inside the state array — a shallow copy would still share object references. `structuredClone` guarantees a fully independent deep copy in a single call.

**Why separate `getRawMoves` and `getLegalMoves`?**  
Check detection must scan raw enemy moves. If enemy moves were also filtered for legality, the filter would need to call check detection, which would call the filter — circular. Raw moves break the cycle cleanly.

**Why strip `index` and `hasMoved` from history entries?**  
Move history records intent: what piece moved, from where, to where. It is not a piece snapshot. Stripping mutable fields keeps each entry minimal, serializable, and free from stale data as the live piece object continues to change.

---

## Contributing

This is a personal learning project — built step by step as a way to rebuild JavaScript and frontend fundamentals through a real, complete system. Issues, suggestions, and code reviews are welcome.

---

## License

MIT © 2025
