import type { Theme } from '../model/theme.class';

export function applyTheme(theme: Theme): void {
  document.body.style.backgroundColor = theme.backgroundColor;
  setPlayerLabels(theme);
  setCardFaces(theme.cardFaceImage);
  setScoreBoardBackground(theme.scoreBoardBackgroundColor);
  setHeaderStyle(theme.headerBackgroundColor);
  setExitButtonStyle(theme.exitButtonBorderColor);
  setText('quitGameModal_backToGame_button', theme.quitDialogBackButtonLabel ?? 'Back to game');
  setText('quitGameModal_exitGame_button', theme.quitDialogExitButtonLabel ?? 'Exit game');
  setText('backToStart', theme.winnerDialogBackButtonLabel ?? 'Back to Start');
  document.body.classList.toggle('has-exit-button-hover-scale', theme.exitButtonHoverScale === true);
  document.body.classList.toggle('has-gaming-font', theme.fontFamily === 'Orbitron');
}

function setPlayerLabels(theme: Theme): void {
  setImageSource('bluePlayerImg', theme.getPlayerImage('blue'));
  setImageSource('orangePlayerImg', theme.getPlayerImage('orange'));
  setText('blueCodingLabel', 'Blue');
  setText('orangeCodingLabel', 'Orange');
}

function setCardFaces(image: string): void {
  document.querySelectorAll<HTMLElement>('.card__face:not(.card__face--back)').forEach((face) => {
    face.style.backgroundImage = `url('${image}')`;
  });
}

function setScoreBoardBackground(color: string): void {
  const scoreBoard = document.querySelector<HTMLElement>('.score_board');
  if (scoreBoard) scoreBoard.style.backgroundColor = color;
}

function setHeaderStyle(color?: string): void {
  const header = document.querySelector<HTMLElement>('header');
  if (!header || !color) return;

  header.style.backgroundColor = color;
  header.style.borderRadius = '8px';
}

function setExitButtonStyle(color?: string): void {
  const exitButton = document.querySelector<HTMLElement>('.exit_button');
  if (!exitButton || !color) return;

  exitButton.style.backgroundColor = 'transparent';
  exitButton.style.border = `solid 2px ${color}`;
  exitButton.style.borderRadius = '8px';
  exitButton.style.boxShadow = 'none';
}

function setImageSource(id: string, source: string): void {
  document.getElementById(id)?.setAttribute('src', source);
}

function setText(id: string, value: string): void {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}