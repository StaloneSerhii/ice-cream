(() => {
  const refs = {
    closeModalBtn: document.querySelector('[hero-modal-close]'),
    modal: document.querySelector('[hero-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  document.addEventListener('click', e => {
    if (e.target.matches('[hero-modal-open]')) {
      toggleModal();
    }
  });
})();
