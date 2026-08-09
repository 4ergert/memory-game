import './styles/main.scss';

/** Initializes the page-specific UI and game behavior for the current route. */
if (document.body.classList.contains('settings')) void initSettingsPage();
if (document.body.classList.contains('memory_game_body')) void initMemoryGamePage();
if (document.body.classList.contains('game-over-page')) void initGameOverPage();

/** Loads and initializes the settings-page modules. */
async function initSettingsPage(): Promise<void> {
  const { renderCustomUnderline, initSettingsButtons, initSettingsSection } = await import('./ts/settings/settings');
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}

/** Loads and initializes the interactive memory-game modules. */
async function initMemoryGamePage(): Promise<void> {
  const [game, themeSelection, themeRenderer, gameModel, dialogs] = await Promise.all([
    import('./ts/game/game'),
    import('./ts/theme/selected-theme'),
    import('./ts/theme/theme-renderer'),
    import('./ts/model/game.class'),
    import('./ts/components/dialogs'),
  ]);

  game.renderGamingHeader();
  game.renderGameSection();
  game.renderGameBoard();
  game.renderQuitGameModal();
  dialogs.initQuitGameModal();
  const theme = themeSelection.getSelectedTheme();
  themeRenderer.applyTheme(theme);
  gameModel.startGame(theme);
}

/** Loads and initializes the game-over modules. */
async function initGameOverPage(): Promise<void> {
  const [scoreBoardModule, dialogs, themeSelection, themeRenderer] = await Promise.all([
    import('./ts/components/score-board'),
    import('./ts/components/dialogs'),
    import('./ts/theme/selected-theme'),
    import('./ts/theme/theme-renderer'),
  ]);

  const scoreBoard = new scoreBoardModule.ScoreBoard();
  const { blueScore, orangeScore } = scoreBoard.getScores();
  scoreBoard.render({ blueScore, orangeScore });
  dialogs.initWinnerFeedback({ blueScore, orangeScore });
  themeRenderer.applyTheme(themeSelection.getSelectedTheme());
}
