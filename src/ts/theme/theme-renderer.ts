import type { Theme } from '../model/theme.class';

/** Applies the selected theme's assets, labels, and CSS state to the page. */
export function applyTheme(theme: Theme): void {
  setPlayerLabels(theme);
  setCardFaces(theme.cardFaceImage);
  setText('quitGameModal_backToGame_button', theme.quitDialogBackButtonLabel ?? 'Back to game');
  setText('quitGameModal_exitGame_button', theme.quitDialogExitButtonLabel ?? 'Exit game');
  setText('backToStart', theme.winnerDialogBackButtonLabel ?? 'Back to Start');
  document.body.classList.toggle('has-gaming-font', theme.fontFamily === 'Orbitron');
  document.body.classList.toggle('has-coding-theme', theme.fontFamily !== 'Orbitron');
}

/** Renders player label images and text for the active theme. */
function setPlayerLabels(theme: Theme): void {
  setImageSource('bluePlayerImg', theme.getPlayerImage('blue'));
  setImageSource('orangePlayerImg', theme.getPlayerImage('orange'));
  setText('blueCodingLabel', 'Blue');
  setText('orangeCodingLabel', 'Orange');
}

/** Sets the front-face background image for every rendered card. */
function setCardFaces(image: string): void {
  document.querySelectorAll<HTMLElement>('.card__face:not(.card__face--back)').forEach((face) => {
    face.style.backgroundImage = `url('${image}')`;
  });
}

/** Sets the source attribute of an image element when it exists. */
function setImageSource(id: string, source: string): void {
  document.getElementById(id)?.setAttribute('src', source);
}

/** Sets the text content of an element when it exists. */
function setText(id: string, value: string): void {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}