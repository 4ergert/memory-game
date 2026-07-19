import { getBoardSizeSectionTemplate, getChoosePlayerSectionTemplate, getThemeSectionTemplate } from './settings-templates';

/**
 * Renders the settings sections if their placeholders exist on the page.
 */
export function initSettingsSection(): void {
  renderSection('[theme-section]', getThemeSectionTemplate);
  renderSection('[choose-player-section]', getChoosePlayerSectionTemplate);
  renderSection('[board-size-section]', getBoardSizeSectionTemplate);
}

/**
 * Replaces a section placeholder with its rendered template markup, if the
 * placeholder exists on the page.
 *
 * @param selector The CSS selector matching the placeholder element.
 * @param template A function returning the markup to render in its place.
 */
function renderSection(selector: string, template: () => string): void {
  const section = document.querySelector<HTMLElement>(selector);

  if (section) section.outerHTML = template();
}

/**
 * Registers click handlers for the theme, player, and board size toggle
 * buttons on the settings page.
 */
export function initSettingsButtons(): void {
  initButtonGroup('.theme_button');
  initButtonGroup('.choose_player_button');
  initButtonGroup('.board_size_button');
}

/**
 * Registers click handlers for one group of toggle buttons so that selecting
 * a button updates the icons within that same group only.
 *
 * @param selector The CSS selector matching the button group.
 */
function initButtonGroup(selector: string): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(selector);

  buttons.forEach((button) => button.addEventListener('click', () => handleButtonClick(button, buttons)));
}

/**
 * Applies the active icon to the selected button and the inactive icon to
 * every other button in the same button group.
 *
 * @param selected The button that was clicked.
 * @param buttons All buttons within the same group.
 */
function handleButtonClick(selected: HTMLButtonElement, buttons: NodeListOf<HTMLButtonElement>): void {
  buttons.forEach((button) => {
    const icon = button.querySelector('img');
    if (icon) {
      icon.src = button === selected
        ? '../assets/icons/on.svg'
        : '../assets/icons/off.svg';
    }
  });
}