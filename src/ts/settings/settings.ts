import { getSettingsSectionsMarkup } from './settings-templates';

/**
 * Renders the settings page button sections and wires the theme buttons.
 */
export function initSettingsPage(): void {
  const settingsSection = document.querySelector<HTMLElement>('.settings_section');

  if (settingsSection) {
    settingsSection.innerHTML = getSettingsSectionsMarkup();
    initThemeButtons();
  }
}

/**
 * Registers click handlers for all theme toggle buttons on the settings page.
 * Each click updates the selected button icon and resets the remaining buttons.
 */
function initThemeButtons(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.theme_button');

  buttons.forEach((button) => button.addEventListener('click', () => handleThemeClick(button, buttons)));
}

/**
 * Applies the active icon to the selected theme button and the inactive icon
 * to every other theme button in the same button list.
 *
 * @param selected The button that was clicked.
 * @param buttons All available theme buttons.
 */
function handleThemeClick(selected: HTMLButtonElement, buttons: NodeListOf<HTMLButtonElement>): void {
  buttons.forEach((button) => {
    const icon = button.querySelector('img');
    if (icon) {
      icon.src = button === selected
        ? '../assets/icons/on.svg'
        : '../assets/icons/off.svg';
    }
  });
}