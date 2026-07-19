import { getBoardSizeSectionTemplate, getChoosePlayerSectionTemplate, getThemeSectionTemplate } from './settings-templates';

/**
 * Renders the settings sections if their placeholders exist on the page.
 */
export function initSettingsSection(): void {
  const themeSection = document.querySelector<HTMLElement>('[data-theme-section]');
  const choosePlayerSection = document.querySelector<HTMLElement>('[data-choose-player-section]');
  const boardSizeSection = document.querySelector<HTMLElement>('[data-board-size-section]');

  if (themeSection) themeSection.outerHTML = getThemeSectionTemplate();
  if (choosePlayerSection) choosePlayerSection.outerHTML = getChoosePlayerSectionTemplate();
  if (boardSizeSection) boardSizeSection.outerHTML = getBoardSizeSectionTemplate();
}

/**
 * Registers click handlers for all theme toggle buttons on the settings page.
 * Each click updates the selected button icon and resets the remaining buttons.
 */
export function initThemeButtons(): void {
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