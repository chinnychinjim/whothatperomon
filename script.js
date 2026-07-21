const pokeballWrapper = document.getElementById('pokeballWrapper');
const pokeball = document.getElementById('pokeball');
const flashOverlay = document.getElementById('flashOverlay');
const buttonInner = document.getElementById('buttonInner');
const dialogText = document.getElementById('dialogText');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

let isOpening = false;

pokeballWrapper.addEventListener('click', () => {
  if (isOpening) return;
  isOpening = true;

  // Step 1: Update Text & Wobble Pokeball
  dialogText.textContent = "CLICKING POKÉBALL...";
  pokeball.classList.add('wobble-anim');
  buttonInner.classList.add('btn-glow');

  // Step 2: Screen Flash / Shine Effect
  setTimeout(() => {
    flashOverlay.classList.add('flash-anim');
  }, 400);

  // Step 3: Open Invitation Modal & Update Dialog
  setTimeout(() => {
    dialogText.textContent = "YOU'RE INVITED!";
    modalOverlay.classList.add('active');
  }, 800);
});

// Close Modal
closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

function closeModal() {
  modalOverlay.classList.remove('active');
  
  // Reset state after closing
  setTimeout(() => {
    pokeball.classList.remove('wobble-anim');
    flashOverlay.classList.remove('flash-anim');
    buttonInner.classList.remove('btn-glow');
    dialogText.textContent = "CLICK ME!";
    isOpening = false;
  }, 300);
}
