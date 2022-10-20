(() => {
  const refs = {
    openModalBtn: document.querySelector('[products-modal-yel-open]'),
    closeModalBtn: document.querySelector('[products-modal-yel-close]'),
    modal: document.querySelector('[products-modal-yel]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('products-hidden');
  }
})();
