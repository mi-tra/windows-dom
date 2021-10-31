'use strict';
//definisco variabili per tutte le classi con la query

// definisco variabile selezione classe modal
const modal = document.querySelector('.modal');

// definisco variabile selezione classe overlay
const overlay = document.querySelector('.overlay');

// definisco variabile selezione classe close-modal
const btnCloseModal = document.querySelector('.close-modal');

// definisco variabile selezione classe show-modal
const btnsOpenModal = document.querySelectorAll('.show-modal');

// definisco funzione per disabilitare nascondi finestra
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// definisco funzione per nascondi finestra
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// definisco il loop per interagire con i bottoni
for (let i = 0; i < btnsOpenModal.length; i++)
  // definisco il click sul bottone qualsiasi del loop
  btnsOpenModal[i].addEventListener('click', openModal);

// definisco cosa fa il click sulla X della finestra
btnCloseModal.addEventListener('click', closeModal);

// definisco cosa fa il click su overlay
overlay.addEventListener('click', closeModal);

// definisco cosa fa il tasto ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
