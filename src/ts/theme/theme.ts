import { Theme, type PlayerColor } from '../model/theme.class';
import { CodingTheme } from '../model/coding_theme.class';
import { GamingTheme } from '../model/gaming_theme.class';

export type { PlayerColor } from '../model/theme.class';
export type GameTheme = Theme;

const themes: Record<string, GameTheme> = {
  'Code vibes theme': new CodingTheme(),
  'Gaming theme': new GamingTheme(),
};

export function getSelectedTheme(): GameTheme {
  return themes[localStorage.getItem('selectedTheme') ?? ''] ?? themes['Code vibes theme'];
}

export function applyTheme(theme: GameTheme): void {
  document.body.style.backgroundColor = theme.backgroundColor;
  setPlayerLabels(theme);
  setCardFaces(theme.cardFaceImage);
  setScoreBoardBackground(theme.scoreBoardBackgroundColor);
  setHeaderStyle(theme.headerBackgroundColor);
  setExitButtonStyle(theme.exitButtonBorderColor);
}

function setPlayerLabels(theme: GameTheme): void {
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