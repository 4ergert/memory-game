import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection, } from './ts/settings/settings';
import { CodingTheme } from './ts/theme/coding_theme.class';
import { GamingTheme } from './ts/theme/gaming_theme.class';
import { renderGamingHeader, renderGameBoard, renderQuitGameModal, renderGameSection } from './ts/game/game';
import { flipCards } from './ts/game/cards';
import { initQuitGameModal } from './ts/components/modal';



if (document.body.classList.contains('settings')) {
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}

if (document.body.classList.contains('memory_game_body')) {
  const selectedTheme = localStorage.getItem('selectedTheme');

  renderGamingHeader();
  renderGameSection();
  renderGameBoard();
  renderQuitGameModal();
  initQuitGameModal();
  flipCards();

  switch (selectedTheme) {
    case 'Code vibes theme':
      new CodingTheme();
      break;
    case 'Gaming theme':
      new GamingTheme();
      break;
    default:
      console.warn('No valid theme selected');
  }

}

if (document.body.classList.contains('game-over-page')) {
  const selectedTheme = localStorage.getItem('selectedTheme');
  const blueScore = localStorage.getItem('blueScore') ?? '0';
  const orangeScore = localStorage.getItem('orangeScore') ?? '0';

  document.querySelector<HTMLElement>('.blue_player_score')!.textContent = blueScore;
  document.querySelector<HTMLElement>('.orange_player_score')!.textContent = orangeScore;

  switch (selectedTheme) {
    case 'Code vibes theme':
      new CodingTheme();
      break;
    case 'Gaming theme':
      new GamingTheme();
      break;
    default:
      console.warn('No valid theme selected');
  }
}
