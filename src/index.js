
// Contacts map-modal.js
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-map-modal-open]"),
    closeModalBtn: document.querySelector("[data-map-modal-close]"),
    modal: document.querySelector("[data-map-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Contacts franchise-modal.js
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franch-modal-open]"),
    closeModalBtn: document.querySelector("[data-franch-modal-close]"),
    modal: document.querySelector("[data-franch-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
=======
import './js/anchrol-scroll';
import './js/header-scroll';

