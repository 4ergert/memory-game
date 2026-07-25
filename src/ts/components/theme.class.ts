export class Theme {
  backgroundColor = 'base.$dark';
  playerOneColor = '#2bb1ff';
  playerTwoColor = '#f58e39';
  images = {
    currentPlayerBlue: '../public/assets/icons/blue-code-label.svg',
    currentPlayerOrange: '../public/assets/icons/orange-code-label.svg',
  }

  setTheme(themeName: string): void {
    if (themeName === 'Code vibes theme') {
      document.body.classList.add('code_vibes_theme');
      document.body.classList.remove('gaming_theme');
    } else if (themeName === 'Gaming theme') {
      document.body.classList.add('gaming_theme');
      document.body.classList.remove('code_vibes_theme');
    }
  }
}