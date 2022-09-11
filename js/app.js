const btns = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('[data-close]'),
  body = document.querySelector('body');

function showModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');
  body.style.overflow = '';
}

btns.forEach(item => {
  item.addEventListener('click', showModal);
});
modal.addEventListener('click', function (e) {
  const target = e.target;
  if (target === modal) {
    closeModal();
  }
});

modalClose.addEventListener('click', closeModal);