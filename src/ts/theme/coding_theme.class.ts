export class CodingTheme {
  themeName: string;
  backgroundcolor: string;
  playerOneImg: string;
  playerTwoImg: string;

  constructor() {
    this.themeName = 'Code vibes theme';
    this.backgroundcolor = '#303131';
    this.playerOneImg = '../assets/icons/blue-code-label.svg';
    this.playerTwoImg = '../assets/icons/orange-code-label.svg';
    this.setTheme();
  }

  setTheme(): void {
    document.getElementById('bluePlayerImg')?.setAttribute('src', this.playerOneImg);
    document.getElementById('orangePlayerImg')?.setAttribute('src', this.playerTwoImg);
    document.body.style.backgroundColor = this.backgroundcolor;
  }
}