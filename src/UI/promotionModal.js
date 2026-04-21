import { piecesSymbols } from "../Data/symbols.js";

/**
 * The promotion modal
 * @param {String} color
 */
function promotionModal(color) {
  const modal = document.querySelector("#promotion_modal");
  const pieces = ["queen", "rook", "bishop", "knight"];
  // Append pieces to modal
  pieces.forEach((piece) => {
    const modalSquare = document.createElement("div");
    modalSquare.innerHTML = piecesSymbols[`${color}`][`${piece}`];
    modalSquare.setAttribute("data-piece", piece);
    modal.append(modalSquare);
  });
  modal.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("data-piece"));
  });
}

function onChoice() {}

export function showPromotionModal(color) {
  promotionModal("white");
  // Show a UI element with 4 piece choices (queen, rook, bishop, knight)
  // When the player clicks one, call onChoice(pieceType) and hide the modal
}
