export class GamingTheme {
  themeName: string;
  backgroundcolor: string;
  headerBackgroundColor: string;
  playerOneImg: string;
  playerTwoImg: string;
  exitButtonBorderColor: string;

  constructor() {
    this.themeName = 'Gaming theme';
    this.backgroundcolor = '#294f60';
    this.headerBackgroundColor = '#535d75';
    this.playerOneImg = '../assets/icons/blue-gaming-label.svg';
    this.playerTwoImg = '../assets/icons/orange-gaming-label.svg';
    this.exitButtonBorderColor = '#e71c4f';
    this.setTheme();
  }

  setTheme(): void {
    document.getElementById('bluePlayerImg')?.setAttribute('src', this.playerOneImg);
    document.getElementById('orangePlayerImg')?.setAttribute('src', this.playerTwoImg);
    document.body.style.backgroundColor = this.backgroundcolor;

    const scoreBoard = document.querySelector<HTMLElement>('.score_board');
    if (scoreBoard) scoreBoard.style.backgroundColor = 'transparent';

    const header = document.querySelector<HTMLElement>('header');
    if (header) {
      header.style.backgroundColor = this.headerBackgroundColor;
      header.style.borderRadius = '8px';
    }

    const currentPlayerSection = document.getElementById('currentPlayer');
    if (currentPlayerSection) currentPlayerSection.setAttribute('src', this.playerOneImg);

    const exitButton = document.querySelector<HTMLElement>('.exit_button');
    if (exitButton) this.applyExitButtonHover(exitButton);

  }

  private applyExitButtonHover(exitButton: HTMLElement): void {
    exitButton.style.backgroundColor = 'transparent';
    exitButton.style.border = 'solid 2px ' + this.exitButtonBorderColor;
    exitButton.style.borderRadius = '8px';
    exitButton.style.boxShadow = 'transparent 0px 0px 0px 0px';

    exitButton.addEventListener('mouseover', () => {
      exitButton.style.border = 'solid 3px ' + this.exitButtonBorderColor;
    });

    exitButton.addEventListener('mouseout', () => {
      exitButton.style.border = 'solid 2px ' + this.exitButtonBorderColor;
    });
  }
}