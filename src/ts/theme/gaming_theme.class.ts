export class GamingTheme {
  themeName: string;
  backgroundcolor: string;
  headerBackgroundColor: string;
  playerOneImg: string;
  playerTwoImg: string;
  exitButtonBorderColor: string;
  cardFaceImg: string;

  constructor() {
    this.themeName = 'Gaming theme';
    this.backgroundcolor = '#294f60';
    this.headerBackgroundColor = '#535d75';
    this.playerOneImg = '../assets/icons/blue-gaming-label.svg';
    this.playerTwoImg = '../assets/icons/orange-gaming-label.svg';
    this.exitButtonBorderColor = '#e71c4f';
    this.cardFaceImg = '../assets/img/gaming-card-face.svg';
    this.setTheme();
  }

  setTheme(): void {
    document.body.style.backgroundColor = this.backgroundcolor;
    this.applyHeaderBackground();
    this.applyScoreBoard();
    this.applyCurrentPlayer();
    this.applyExitButtonHover();
    this.applyCardFaceStyles();
  }

  private applyHeaderBackground(): void {
    const header = document.querySelector<HTMLElement>('header');
    if (header) {
      header.style.backgroundColor = this.headerBackgroundColor;
      header.style.borderRadius = '8px';
    }
  }

  private applyScoreBoard(): void {
    const bluePlayerImg = document.getElementById('bluePlayerImg');
    const orangePlayer = document.getElementById('orangePlayerImg');
    const scoreBoard = document.querySelector<HTMLElement>('.score_board');

    if (bluePlayerImg) bluePlayerImg.setAttribute('src', this.playerOneImg);
    if (orangePlayer) orangePlayer.setAttribute('src', this.playerTwoImg);
    if (scoreBoard) scoreBoard.style.backgroundColor = 'transparent';
  }

  private applyCurrentPlayer(): void {
    const currentPlayerSection = document.getElementById('currentPlayer');
    if (currentPlayerSection) currentPlayerSection.setAttribute('src', this.playerOneImg);
  }


  private applyExitButtonHover(): void {
    const exitButton = document.querySelector<HTMLElement>('.exit_button');

    if (exitButton) {
      exitButton.style.backgroundColor = 'transparent';
      exitButton.style.border = 'solid 2px ' + this.exitButtonBorderColor;
      exitButton.style.borderRadius = '8px';
      exitButton.style.boxShadow = 'transparent 0px 0px 0px 0px';

      exitButton.addEventListener('mouseover', () => exitButton.style.border = 'solid 3px ' + this.exitButtonBorderColor);
      exitButton.addEventListener('mouseout', () => exitButton.style.border = 'solid 2px ' + this.exitButtonBorderColor);
    }
  }

  private applyCardFaceStyles(): void {

    document.querySelectorAll<HTMLElement>('.card__face:not(.card__face--back)').forEach((face) => {
      face.style.backgroundImage = `url('${this.cardFaceImg}')`;
      face.style.backgroundSize = 'cover';
      face.style.borderRadius = '12px';
    });

    document.querySelectorAll<HTMLElement>('.card__face--back').forEach((face) => {
      face.style.backgroundImage = 'none';
      face.style.borderRadius = '12px';
    });
  }
}