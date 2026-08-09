import type { PlayerColor, Theme } from '../model/theme.class';
import { Card } from '../model/card.class';
import { ScoreBoard } from '../components/score-board';

/**
 * Coordinates game turns, card comparison, scoring, and game completion.
 *
 * One instance owns the state of a rendered game board for its entire lifetime.
 * It listens for card clicks, updates score persistence, and redirects when all
 * pairs have been found.
 */
class Game {
  private readonly cards = new WeakMap<HTMLButtonElement, Card>(); /** Caches one state object per rendered card button. */
  private readonly scoreBoard = new ScoreBoard(); /** Stores and renders scores for the current game. */
  private selectedCards: Card[] = []; /** Cards selected during the current turn, up to one pair. */
  private isComparing = false; /** Prevents card selection while a selected pair is being compared. */
  private blueScore = 0; /** Current score of the blue player. */
  private orangeScore = 0; /** Current score of the orange player. */
  private currentPlayer: PlayerColor; /** Player whose turn is active. */

  /**
   * Creates a game controller for a rendered board and selected theme.
   *
   * @param field - The element containing all selectable card buttons.
   * @param theme - The selected theme that supplies display assets.
   */
  constructor(
    private readonly field: HTMLElement /** Board element containing the card buttons. */,
    private readonly theme: Theme /** Theme that provides the display assets. */,
  ) {
    this.currentPlayer = getStartingPlayer(); /** Player selected to take the first turn. */
  }

  /**
   * Initializes a new game on the rendered board.
   *
   * Scores are reset before card clicks are handled, and the start player label
   * is rendered immediately.
   */
  start(): void {
    this.resetScores();
    this.updateCurrentPlayer();
    this.field.addEventListener('click', this.handleCardClick);
  }

  /**
   * Handles click events delegated from the game board.
   *
   * @param event - The click event originating from a card or its child element.
   */
  private readonly handleCardClick = (event: MouseEvent): void => {
    const element = (event.target as HTMLElement).closest<HTMLButtonElement>('.card');
    if (!element) return;

    const card = this.getCard(element);
    if (card.matched || card.flipped || this.isComparing) return;

    this.selectCard(card);
  };

  /**
   * Reveals a selected card and compares it after a pair has been selected.
   *
   * @param card - The card selected by the active player.
   */
  private selectCard(card: Card): void {
    card.flip();
    this.selectedCards.push(card);
    if (this.selectedCards.length < 2) return;

    this.isComparing = true;
    this.compareSelectedCards();
  }

  /**
   * Schedules the result of comparing the two selected cards.
   *
   * Matching pairs receive a short success delay; non-matches remain visible
   * slightly longer before the turn changes.
   */
  private compareSelectedCards(): void {
    const [firstCard, secondCard] = this.selectedCards;
    const isMatch = firstCard.image === secondCard.image;
    window.setTimeout(isMatch ? this.handleMatch : this.handleMiss, isMatch ? 400 : 800);
  }

  /**
   * Handles a successful pair by locking both cards and awarding a point.
   *
   * Redirects to the game-over page when the board contains only matched cards.
   */
  private readonly handleMatch = (): void => {
    this.selectedCards.forEach((card) => card.match());
    this.addPoint();
    this.finishTurn();
    if (this.isComplete()) window.location.href = './game-over-page.html';
  };

  /** Hides a non-matching pair and passes the turn to the other player. */
  private readonly handleMiss = (): void => {
    this.selectedCards.forEach((card) => card.reset());
    this.currentPlayer = this.currentPlayer === 'blue' ? 'orange' : 'blue';
    this.finishTurn();
  };

  /** Clears the current card selection and updates the active player display. */
  private finishTurn(): void {
    this.selectedCards = [];
    this.isComparing = false;
    this.updateCurrentPlayer();
  }

  /**
   * Returns the cached card state or creates it from a card element.
   *
   * @param element - The card button for which state is required.
   * @returns The state object associated with the card button.
   */
  private getCard(element: HTMLButtonElement): Card {
    const existingCard = this.cards.get(element);
    if (existingCard) return existingCard;

    const image = element.querySelector('.card__face--back')?.getAttribute('data-card-image') ?? null;
    const card = new Card(element, image);
    this.cards.set(element, card);
    return card;
  }

  /** Awards one point to the active player and persists the updated scores. */
  private addPoint(): void {
    if (this.currentPlayer === 'blue') this.blueScore += 1;
    else this.orangeScore += 1;

    this.updateScores();
  }

  /** Clears the in-memory and persisted scores before a new game starts. */
  private resetScores(): void {
    this.blueScore = 0;
    this.orangeScore = 0;
    this.scoreBoard.reset();
  }

  /** Renders and persists the current in-memory scores. */
  private updateScores(): void {
    this.scoreBoard.update({
      blueScore: this.blueScore,
      orangeScore: this.orangeScore,
    });
  }

  /** Updates the active-player image using the selected theme. */
  private updateCurrentPlayer(): void {
    const playerImage = document.getElementById('currentPlayer');
    playerImage?.setAttribute('src', this.theme.playerImages[this.currentPlayer]);
  }

  /**
   * Determines whether every rendered card belongs to a matched pair.
   *
   * @returns `true` when no unmatched card buttons remain on the board.
   */
  private isComplete(): boolean {
    return this.field.querySelectorAll('.card').length === this.field.querySelectorAll('.card.is-matched').length;
  }
}

/**
 * Gets the starting player selected on the settings page.
 *
 * Legacy labels such as `Player orange` are accepted, and blue is used when no
 * valid orange selection is stored.
 *
 * @returns The player color that begins the game.
 */
function getStartingPlayer(): PlayerColor {
  const selectedPlayer = localStorage.getItem('selectedPlayer') ?? 'Blue player';
  return selectedPlayer.toLowerCase().includes('orange') ? 'orange' : 'blue';
}

/**
 * Starts a new game on the rendered board with the selected theme.
 *
 * The game is only created when the game board exists on the current page.
 *
 * @param theme - The selected theme that supplies game assets and settings.
 */
export function startGame(theme: Theme): void {
  const field = document.getElementById('field');
  if (field) new Game(field, theme).start();
}