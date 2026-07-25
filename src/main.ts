import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection, } from './ts/settings/settings';
import { Theme } from './ts/components/theme.class';

const theme = new Theme();

if (document.body.classList.contains('settings')) {
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}

if (document.body.classList.contains('memory_game_body')) {
  const selectedTheme = localStorage.getItem('selectedTheme');
  
  if (selectedTheme) {
    theme.setTheme(selectedTheme);
    console.log(`Theme set to: ${selectedTheme}`);
  }
}