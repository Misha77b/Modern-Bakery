const modal = document.querySelector(".backdrop");
const modalBtnClose = document.querySelector(".modal-btn-close");
const modalBtnOpen = document.querySelector(".modal-btn-open");

const toogleModal = () => modal.classList.toggle("is-hidden");

modalBtnClose.addEventListener("click", toogleModal);
modalBtnOpen.addEventListener("click", toogleModal);

console.log(modal, modalBtnClose, modalBtnOpen);
