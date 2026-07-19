/**
 * Returns the markup for the game theme selection section on the settings page.
 *
 * @returns The HTML string for the game theme section.
 */
export function getThemeSectionTemplate(): string {
  return `
    <section class="game_mode">
      <header class="game_mode_header">
        <img src="../assets/icons/palette.svg" alt="Palette Icon" class="game_mode_header_icon">
        <h3>Game themes</h3>
      </header>

      <button class="theme_button" id="code_vibes_theme">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Code vibes theme
      </button>
      <button class="theme_button" id="gaming_theme">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Gaming theme
      </button>
      <button class="theme_button" id="da_projects_theme">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        DA Projects theme
      </button>
      <button class="theme_button" id="food_theme">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Food theme
      </button>
    </section>
  `;
}

/**
 * Returns the markup for the player selection section on the settings page.
 *
 * @returns The HTML string for the choose player section.
 */
export function getChoosePlayerSectionTemplate(): string {
  return `
    <section class="choose_player">
      <header class="choose_player_header">
        <img src="../assets/icons/chess_pawn.svg" alt="Chess Pawn Icon" class="game_mode_header_icon">
        <h3>Choose player</h3>
      </header>

      <button class="choose_player_button" id="playerBlue">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Blue
      </button>
      <button class="choose_player_button" id="playerOrange">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        Orange
      </button>
    </section>
  `;
}

/**
 * Returns the markup for the board size selection section on the settings page.
 *
 * @returns The HTML string for the board size section.
 */
export function getBoardSizeSectionTemplate(): string {
  return `
    <section class="board_size">
      <header class="board_size_header">
        <img src="../assets/icons/size.svg" alt="Size Icon" class="board_size_header_icon">
        <h3>Board size</h3>
      </header>

      <button class="board_size_button" id="board_4x4">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        16 cards
      </button>
      <button class="board_size_button" id="board_6x6">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        24 cards
      </button>
      <button class="board_size_button" id="board_8x8">
        <img src="../assets/icons/off.svg" alt="Off Icon">
        32 cards
      </button>
    </section>
  `;
}