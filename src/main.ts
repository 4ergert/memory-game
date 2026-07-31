import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection, } from './ts/settings/settings';
import { applyTheme, getSelectedTheme } from './ts/theme/theme';
import { renderGamingHeader, renderGameBoard, renderQuitGameModal, renderGameSection } from './ts/game/game';
import { startGame } from './ts/game/cards';
import { initQuitGameModal } from './ts/components/modal';



if (document.body.classList.contains('settings')) {
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}

if (document.body.classList.contains('memory_game_body')) {
  renderGamingHeader();
  renderGameSection();
  renderGameBoard();
  renderQuitGameModal();
  initQuitGameModal();
  const theme = getSelectedTheme();
  applyTheme(theme);
  startGame(theme);
}

if (document.body.classList.contains('game-over-page')) {
  const blueScore = localStorage.getItem('blueScore') ?? '0';
  const orangeScore = localStorage.getItem('orangeScore') ?? '0';

  document.querySelector<HTMLElement>('.blue_player_score')!.textContent = blueScore;
  document.querySelector<HTMLElement>('.orange_player_score')!.textContent = orangeScore;
  setWinnerName(Number(blueScore), Number(orangeScore));
  applyTheme(getSelectedTheme());
  showWinnerFeedback();
  initBackToStartButton();
}

function setWinnerName(blueScore: number, orangeScore: number): void {
  const winnerName = document.getElementById('winnerName');
  const winnerImg = document.getElementById('winnerImg') as HTMLImageElement | null;
  if (!winnerImg) return;
  if (!winnerName) return;

  if (blueScore === orangeScore) {
    winnerName.textContent = 'Tie';
    winnerName.style.color = '#ffffff';
    return;
  }

  const isBlueWinner = blueScore > orangeScore;
  winnerName.textContent = isBlueWinner ? 'Blue Player' : 'Orange Player';
  winnerName.style.color = isBlueWinner ? '#2bb1ff' : '#f58e39';
  winnerImg.src = isBlueWinner ? '../assets/img/player-blue.svg' : '../assets/img/player-orange.svg';
}

function showWinnerFeedback(): void {
  const gameOver = document.querySelector<HTMLElement>('.game-over');
  const winnerFeedback = document.getElementById('winnerFeedback') as HTMLDialogElement | null;
  if (!gameOver || !winnerFeedback) return;

  window.setTimeout(() => {
    gameOver.remove();
    winnerFeedback.showModal();
    winnerFeedback.classList.add('is-visible');
  }, 3000);
}

function initBackToStartButton(): void {
  const backToStartButton = document.getElementById('backToStart');
  backToStartButton?.addEventListener('click', () => {
    window.location.href = './settings-page.html';
  });
}
