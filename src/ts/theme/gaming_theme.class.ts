export class GamingTheme {
  themeName: string;
  backgroundcolor: string;
  playerOneImg: string;
  playerTwoImg: string;

  constructor() {
    this.themeName = 'Gaming theme';
    this.backgroundcolor = '#294f60';
    this.playerOneImg = '../assets/icons/blue-gaming-label.svg';
    this.playerTwoImg = '../assets/icons/orange-gaming-label.svg';
    this.setTheme();
  }

  setTheme(): void {
    document.getElementById('bluePlayerImg')?.setAttribute('src', this.playerOneImg);
    document.getElementById('orangePlayerImg')?.setAttribute('src', this.playerTwoImg);
    document.body.style.backgroundColor = this.backgroundcolor;
  }
}