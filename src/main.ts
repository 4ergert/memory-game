import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection, } from './ts/settings/settings';
import { applyTheme, getSelectedTheme } from './ts/theme/theme';
import { renderGamingHeader, renderGameBoard, renderQuitGameModal, renderGameSection } from './ts/game/game';
import { startGame } from './ts/game/game.class';
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
  const winnerFeedbackTitle = document.getElementById('winnerFeedbackTitle');
  const winnerImg = document.getElementById('winnerImg') as HTMLImageElement | null;
  const confetti = document.getElementById('confetti');
  const winnerFeedback = document.getElementById('winnerFeedback');
  if (!winnerName || !winnerFeedbackTitle || !winnerImg || !confetti || !winnerFeedback) return;

  if (blueScore === orangeScore) return renderDrawFeedback(winnerName, winnerFeedbackTitle, winnerImg, confetti, winnerFeedback);

  renderWinnerFeedback(blueScore, orangeScore, winnerName, winnerFeedbackTitle, winnerImg, confetti, winnerFeedback);

  confetti.hidden = false;
  winnerFeedback.classList.remove('is-draw');
}

function renderWinnerFeedback(blueScore: number, orangeScore: number, winnerName: HTMLElement, winnerFeedbackTitle: HTMLElement, winnerImg: HTMLImageElement, confetti: HTMLElement, winnerFeedback: HTMLElement): void {
  const isBlueWinner = blueScore > orangeScore;
  winnerFeedbackTitle.textContent = 'The winner is';
  winnerName.textContent = isBlueWinner ? 'Blue Player' : 'Orange Player';
  winnerName.style.color = isBlueWinner ? '#2bb1ff' : '#f58e39';
  winnerImg.src = isBlueWinner ? '../assets/img/player-blue.svg' : '../assets/img/player-orange.svg';
}

function renderDrawFeedback(winnerName: HTMLElement, winnerFeedbackTitle: HTMLElement, winnerImg: HTMLImageElement, confetti: HTMLElement, winnerFeedback: HTMLElement): void {
  winnerFeedbackTitle.textContent = "It's a";
  winnerName.textContent = 'Draw';
  winnerName.style.color = '#4dd5bc';
  winnerImg.src = '../assets/img/draw.svg';
  confetti.hidden = true;
  winnerFeedback.classList.add('is-draw');
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
