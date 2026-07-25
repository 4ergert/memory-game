import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection, } from './ts/settings/settings';
import { CodingTheme } from './ts/theme/coding_theme.class';
import { GamingTheme } from './ts/theme/gaming_theme.class';

if (document.body.classList.contains('settings')) {
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}

if (document.body.classList.contains('memory_game_body')) {
  const selectedTheme = localStorage.getItem('selectedTheme');

  switch (selectedTheme) {
    case 'Code vibes theme':
      const codingTheme = new CodingTheme();
      break;
    case 'Gaming theme':
      const gamingTheme = new GamingTheme();
      break;
    default:
      console.warn('No valid theme selected');
  }
} 
