import type { Scores } from './score-board';
import { getSelectedTheme } from '../theme/selected-theme';

/** DOM elements required to render the winner feedback dialog. */
type WinnerFeedbackElements = {
  winnerName: HTMLElement;
  title: HTMLElement;
  image: HTMLImageElement;
  confetti: HTMLImageElement;
  dialog: HTMLDialogElement;
};

/** Renders and opens the feedback dialog once the game has ended. */
export function initWinnerFeedback(scores: Scores): void {
  const elements = getWinnerFeedbackElements();
  if (!elements) return;

  renderFeedback(scores, elements);
  showFeedbackAfterDelay(elements.dialog);
  initBackToStartButton();
}

/** Collects the winner feedback elements, or returns null when incomplete. */
function getWinnerFeedbackElements(): WinnerFeedbackElements | null {
  const winnerName = document.getElementById('winnerName');
  const title = document.getElementById('winnerFeedbackTitle');
  const image = document.getElementById('winnerImg') as HTMLImageElement | null;
  const confetti = document.getElementById('confetti') as HTMLImageElement | null;
  const dialog = document.getElementById('winnerFeedback') as HTMLDialogElement | null;

  if (!winnerName || !title || !image || !confetti || !dialog) return null;
  return { winnerName, title, image, confetti, dialog };
}

/** Selects draw or winner feedback according to the final scores. */
function renderFeedback(scores: Scores, elements: WinnerFeedbackElements): void {
  if (scores.blueScore === scores.orangeScore) return renderDrawFeedback(elements);
  renderWinnerFeedback(scores.blueScore > scores.orangeScore, elements);
}

/** Renders the winning player with the selected theme's optional assets. */
function renderWinnerFeedback(isBlueWinner: boolean, elements: WinnerFeedbackElements): void {
  const winner = isBlueWinner ? getBlueWinner() : getOrangeWinner();
  elements.title.textContent = 'The winner is'; 
  elements.winnerName.textContent = winner.name;
  elements.winnerName.style.color = winner.color;
  elements.image.src = getSelectedTheme().winnerImage ?? winner.image;
  elements.confetti.hidden = getSelectedTheme().showWinnerConfetti === false;
  if (!elements.confetti.hidden) elements.confetti.src = elements.confetti.dataset.src ?? '';
  elements.dialog.classList.remove('is-draw');
}

/** Returns the display data for the blue player. */
function getBlueWinner(): { name: string; color: string; image: string } {
  return { name: 'Blue Player', color: '#2bb1ff', image: '../assets/img/player-blue.svg' };
}

/** Returns the display data for the orange player. */
function getOrangeWinner(): { name: string; color: string; image: string } {
  return { name: 'Orange Player', color: '#f58e39', image: '../assets/img/player-orange.svg' };
}

/** Renders the special feedback state for a tied game. */
function renderDrawFeedback(elements: WinnerFeedbackElements): void {
  elements.title.textContent = "It's a";
  elements.winnerName.textContent = 'Draw';
  elements.winnerName.style.color = '#4dd5bc';
  elements.image.src = '../assets/img/draw.svg';
  elements.confetti.hidden = true;
  elements.dialog.classList.add('is-draw');
}

/** Replaces the game-over view with the feedback dialog after a short delay. */
function showFeedbackAfterDelay(dialog: HTMLDialogElement): void {
  const gameOver = document.querySelector<HTMLElement>('.game-over');
  if (!gameOver) return;

  window.setTimeout(() => {
    gameOver.remove();
    dialog.showModal();
    dialog.classList.add('is-visible');
  }, 3000);
}

/** Sends the player back to the settings page from the feedback dialog. */
function initBackToStartButton(): void {
  document.getElementById('backToStart')?.addEventListener('click', () => {
    window.location.href = './settings-page.html';
  });
}