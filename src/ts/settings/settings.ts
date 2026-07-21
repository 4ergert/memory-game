import { getCustomUnderlineTemplate, getBoardSizeSectionTemplate, getChoosePlayerSectionTemplate, getThemeSectionTemplate } from './settings-templates';

/** Maps theme button ids to the feedback icon shown once selected. */
const THEME_ICONS: Record<string, string> = {
  code_vibes_theme: '../assets/img/IT_theme.svg',
  gaming_theme: '../assets/img/gaming_theme.svg',
};

/**
 * Replaces the custom underline placeholder with its rendered template
 * markup, if the placeholder exists on the page.
 */
export function renderCustomUnderline(): void {
  const refUnderline = document.querySelector<HTMLElement>('[custom-underline]');
  if (refUnderline) refUnderline.outerHTML = getCustomUnderlineTemplate();
}

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
  initButtonGroup('.theme_button', showThemeFeedback);
  initButtonGroup('.choose_player_button', showSelectedPlayer);
  initButtonGroup('.board_size_button', showSelectedBoardSize);
}

/**
 * Registers click handlers for one group of toggle buttons so that selecting
 * a button updates the icons within that same group only.
 *
 * @param selector The CSS selector matching the button group.
 * @param onSelect Optional callback invoked with the selected button.
 */
function initButtonGroup(selector: string, onSelect?: (button: HTMLButtonElement) => void): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(selector);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      handleButtonClick(button, buttons);
      onSelect?.(button);
    });
  });
}

/**
 * Displays the icon matching the selected theme button inside the settings
 * feedback section.
 *
 * @param button The selected theme button.
 */
function showThemeFeedback(button: HTMLButtonElement): void {
  const feedback = document.getElementById('settingsFeedback');
  const selectedTheme = document.getElementById('selectedGameTheme');
  const icon = THEME_ICONS[button.id];
  const label = getButtonLabel(button);

  if (feedback && icon) {
    feedback.innerHTML = `<img src="${icon}" alt="${label}">`;
  }

  if (selectedTheme) {
    selectedTheme.textContent = label;
  }
}

/**
 * Displays the selected player label inside the start section.
 *
 * @param button The selected player button.
 */
function showSelectedPlayer(button: HTMLButtonElement): void {
  const selectedPlayer = document.getElementById('selectedPlayer');

  if (selectedPlayer) {
    selectedPlayer.textContent = getButtonLabel(button) + ' player';
  }
}

/**
 * Displays the selected board size label inside the start section.
 *
 * @param button The selected board size button.
 */
function showSelectedBoardSize(button: HTMLButtonElement): void {
  const selectedBoardSize = document.getElementById('selectedBoardSize');

  if (selectedBoardSize) {
    selectedBoardSize.textContent = getButtonLabel(button);
  }
}

/**
 * Returns the trimmed visible label from a settings button.
 *
 * @param button The button whose label should be read.
 * @returns The button label or an empty string.
 */
function getButtonLabel(button: HTMLButtonElement): string {
  return button.textContent?.trim() ?? '';
}

/**
 * Inserts the custom underline markup into a button, unless it is already
 * present there.
 *
 * @param button The selected button.
 */
function showButtonUnderline(button: HTMLButtonElement): void {
  if (!button.querySelector('.underline')) {
    button.insertAdjacentHTML('beforeend', getCustomUnderlineTemplate());
  }
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
    const isSelected = button === selected;
    const icon = button.querySelector('img');
    if (icon) {
      icon.src = isSelected ? '../assets/icons/on.svg' : '../assets/icons/off.svg';
    }

    button.classList.toggle('is-selected', isSelected);
    if (isSelected) {
      showButtonUnderline(button);
    } else {
      button.querySelector('.underline')?.remove();
    }
  });
}