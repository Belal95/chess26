import { piecesSymbols } from "../Data/symbols.js";

/**
 * The promotion modal
 * @param {String} color
 */
function promotionModal(color, onChoice) {
  const modal = document.querySelector("#promotion_modal");
  const open = modal.hasChildNodes();
  //Check i the modal is open
  if (!open) {
    const pieces = ["queen", "rook", "bishop", "knight"];

    // Append pieces to modal
    pieces.forEach((piece) => {
      const modalSquare = document.createElement("div");
      modalSquare.innerHTML = piecesSymbols[`${color}`][`${piece}`];
      modalSquare.setAttribute("data-piece", piece);
      modal.append(modalSquare);
    });
    // Event Listener
    modal.addEventListener(
      "click",
      (e) => {
        const piece = e.target.getAttribute("data-piece");
        if (!piece) return;
        onChoice(piece);
        modal.innerHTML = "";
      },
      { once: true },
    );
  }
}

export function showPromotionModal(color, onChoice) {
  promotionModal(color, onChoice);
}
