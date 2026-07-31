export type PlayerColor = 'blue' | 'orange';

export type GameTheme = {
  backgroundColor: string;
  cardFaceImage: string;
  cardImages: string[];
  exitButtonBorderColor?: string;
  headerBackgroundColor?: string;
  playerImages: Record<PlayerColor, string>;
  scoreBoardBackgroundColor: string;
};

const codingCardImages = Array.from({ length: 18 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return `../assets/img/theme/coding/${number}.svg`;
});

const themes: Record<string, GameTheme> = {
  'Code vibes theme': {
    backgroundColor: '#303131',
    cardFaceImage: '../assets/img/coding-card-face.svg',
    cardImages: codingCardImages,
    playerImages: {
      blue: '../assets/icons/blue-code-label.svg',
      orange: '../assets/icons/orange-code-label.svg',
    },
    scoreBoardBackgroundColor: '#415652',
  },
  'Gaming theme': {
    backgroundColor: '#294f60',
    cardFaceImage: '../assets/img/gaming-card-face.svg',
    cardImages: ['../assets/img/gaming-card-face.svg'],
    exitButtonBorderColor: '#e71c4f',
    headerBackgroundColor: '#535d75',
    playerImages: {
      blue: '../assets/icons/blue-gaming-label.svg',
      orange: '../assets/icons/orange-gaming-label.svg',
    },
    scoreBoardBackgroundColor: 'transparent',
  },
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
  setImageSource('bluePlayerImg', theme.playerImages.blue);
  setImageSource('orangePlayerImg', theme.playerImages.orange);
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