import { player0El } from './script.js';
import { player1El } from './script.js';

const switchPlayer = (activePlayer, currentScore) => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Prebacivanje sa igraca na igraca
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  // Provera igraca
  return (activePlayer = activePlayer === 0 ? 1 : 0);
};

export { switchPlayer };
