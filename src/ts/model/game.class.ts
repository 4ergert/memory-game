import type { PlayerColor, Theme } from '../model/theme.class';
import { Card } from '../model/card.class';
import { ScoreBoard } from '../components/score-board';

/** Coordinates turns, card comparison, scoring, and game completion. */
class Game {
  private readonly cards = new WeakMap<HTMLButtonElement, Card>();
  private readonly scoreBoard = new ScoreBoard();
  private selectedCards: Card[] = [];
  private isComparing = false;
  private blueScore = 0;
  private orangeScore = 0;
  private currentPlayer: PlayerColor;

  constructor(
    private readonly field: HTMLElement,
    private readonly theme: Theme,
  ) {
    this.currentPlayer = getStartingPlayer();
  }

  /** Resets the board state and registers card-click handling. */
  start(): void {
    this.resetScores();
    this.updateCurrentPlayer();
    this.field.addEventListener('click', this.handleCardClick);
  }

  /** Selects a clickable card unless the current turn cannot accept it. */
  private readonly handleCardClick = (event: MouseEvent): void => {
    const element = (event.target as HTMLElement).closest<HTMLButtonElement>('.card');
    if (!element) return;

    const card = this.getCard(element);
    if (card.matched || card.flipped || this.isComparing) return;

    this.selectCard(card);
  };

  /** Reveals one card and starts a comparison after the second selection. */
  private selectCard(card: Card): void {
    card.flip();
    this.selectedCards.push(card);
    if (this.selectedCards.length < 2) return;

    this.isComparing = true;
    this.compareSelectedCards();
  }

  /** Compares the two selected cards after the matching delay. */
  private compareSelectedCards(): void {
    const [firstCard, secondCard] = this.selectedCards;
    const isMatch = firstCard.image === secondCard.image;
    window.setTimeout(isMatch ? this.handleMatch : this.handleMiss, isMatch ? 400 : 800);
  }

  /** Locks in a matched pair, awards a point, and checks for game completion. */
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

  /** Returns the cached card state or creates it from a card element. */
  private getCard(element: HTMLButtonElement): Card {
    const existingCard = this.cards.get(element);
    if (existingCard) return existingCard;

    const image = element.querySelector('.card__face--back')?.getAttribute('data-card-image') ?? null;
    const card = new Card(element, image);
    this.cards.set(element, card);
    return card;
  }

  /** Awards one point to the active player. */
  private addPoint(): void {
    if (this.currentPlayer === 'blue') this.blueScore += 1;
    else this.orangeScore += 1;

    this.updateScores();
  }

  /** Clears the in-memory and persisted scores. */
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

  /** Returns whether every card on the board belongs to a matched pair. */
  private isComplete(): boolean {
    return this.field.querySelectorAll('.card').length === this.field.querySelectorAll('.card.is-matched').length;
  }
}

/** Returns the player stored as the starting player, defaulting to blue. */
function getStartingPlayer(): PlayerColor {
  const selectedPlayer = localStorage.getItem('selectedPlayer') ?? 'Blue player';
  return selectedPlayer.toLowerCase().includes('orange') ? 'orange' : 'blue';
}

/** Starts a new game on the rendered board with the selected theme. */
export function startGame(theme: Theme): void {
  const field = document.getElementById('field');
  if (field) new Game(field, theme).start();
}