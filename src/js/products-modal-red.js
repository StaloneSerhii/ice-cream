(() => {
  const refs = {
    openModalBtn: document.querySelector('[products-modal-red-open]'),
    closeModalBtn: document.querySelector('[products-modal-red-close]'),
    modal: document.querySelector('[products-modal-red]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('products-hidden');
  }
})();
