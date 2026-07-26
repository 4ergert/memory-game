export class CodingTheme {
  themeName: string;
  backgroundcolor: string;
  playerOneImg: string;
  playerTwoImg: string;
  cardFaceImg: string;


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
      face.style.backgroundSize = 'cover';
    });

    document.querySelectorAll<HTMLElement>('.card__face--back').forEach((face) => {
      face.style.backgroundImage = 'none';
    });
  }
}