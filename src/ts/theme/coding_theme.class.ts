export class CodingTheme {
  themeName: string;
  backgroundcolor: string;
  playerOneImg: string;
  playerTwoImg: string;
  cardFaceImg: string;
  cards: string[] = CodingTheme.getCardImages();

  static getCardImages(): string[] {
    return Array.from({ length: 18 }, (_, index) => {
      const number = String(index + 1).padStart(2, '0');
      return `../assets/img/theme/coding/${number}.svg`;
    });
  }

  constructor() {
    this.themeName = 'Code vibes theme';
    this.backgroundcolor = '#303131';
    this.playerOneImg = '../assets/icons/blue-code-label.svg';
    this.playerTwoImg = '../assets/icons/orange-code-label.svg';
    this.cardFaceImg = '../assets/img/coding-card-face.svg';
    this.setTheme();
  }

  setTheme(): void {
    document.body.style.backgroundColor = this.backgroundcolor;
    document.getElementById('bluePlayerImg')?.setAttribute('src', this.playerOneImg);
    document.getElementById('blueCodingLabel')!.textContent = 'Blue';
    document.getElementById('orangePlayerImg')?.setAttribute('src', this.playerTwoImg);
    document.getElementById('orangeCodingLabel')!.textContent = 'Orange';

    document.getElementById('currentPlayer')?.setAttribute('src', this.playerOneImg);

    this.applyCardFaceStyles();
  }

  private applyCardFaceStyles(): void {
    document.querySelectorAll<HTMLElement>('.card__face:not(.card__face--back)').forEach((face) => {
      face.style.backgroundImage = `url('${this.cardFaceImg}')`;
    });

    document.querySelectorAll<HTMLElement>('.card__face--back').forEach((face) => {
      const image = face.getAttribute('data-card-image');
      face.style.backgroundImage = image ? `url('${image}')` : 'none';
    });
  }
}