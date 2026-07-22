import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection } from './ts/settings/settings';

if (document.body.classList.contains('settings')) {
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}