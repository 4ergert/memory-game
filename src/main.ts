import './styles/main.scss';
import { renderCustomUnderline, initSettingsButtons, initSettingsSection, } from './ts/settings/settings';
import { getSelectedTheme } from './ts/theme/selected-theme';
import { applyTheme } from './ts/theme/theme-renderer';
import { ScoreBoard } from './ts/components/score-board';
import { renderGamingHeader, renderGameBoard, renderQuitGameModal, renderGameSection } from './ts/game/game';
import { startGame } from './ts/model/game.class';
import { initQuitGameModal, initWinnerFeedback } from './ts/components/modal';

/** Initializes the page-specific UI and game behavior for the current route. */
if (document.body.classList.contains('settings')) {
  renderCustomUnderline();
  initSettingsSection();
  initSettingsButtons();
}

if (document.body.classList.contains('memory_game_body')) {
  renderGamingHeader();
  renderGameSection();
  renderGameBoard();
  renderQuitGameModal();
  initQuitGameModal();
  const theme = getSelectedTheme();
  applyTheme(theme);
  startGame(theme);
}

if (document.body.classList.contains('game-over-page')) {
  const scoreBoard = new ScoreBoard();
  const { blueScore, orangeScore } = scoreBoard.getScores();

  scoreBoard.render({ blueScore, orangeScore });
  initWinnerFeedback({ blueScore, orangeScore });
  applyTheme(getSelectedTheme());
}
