import type { PlayerColor, Theme } from '../model/theme.class';
import { Card } from '../model/card.class';

class Game {
  private readonly cards = new WeakMap<HTMLButtonElement, Card>();
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

  start(): void {
    this.resetScores();
    this.updateCurrentPlayer();
    this.field.addEventListener('click', this.handleCardClick);
  }

  private readonly handleCardClick = (event: MouseEvent): void => {
    const element = (event.target as HTMLElement).closest<HTMLButtonElement>('.card');
    if (!element) return;

    const card = this.getCard(element);
    if (card.matched || card.flipped || this.isComparing) return;

    this.selectCard(card);
  };

  private selectCard(card: Card): void {
    card.flip();
    this.selectedCards.push(card);
    if (this.selectedCards.length < 2) return;

    this.isComparing = true;
    this.compareSelectedCards();
  }

  private compareSelectedCards(): void {
    const [firstCard, secondCard] = this.selectedCards;
    const isMatch = firstCard.image === secondCard.image;
    window.setTimeout(isMatch ? this.handleMatch : this.handleMiss, isMatch ? 400 : 800);
  }

  private readonly handleMatch = (): void => {
    this.selectedCards.forEach((card) => card.match());
    this.addPoint();
    this.finishTurn();
    if (this.isComplete()) window.location.href = './game-over-page.html';
  };

  private readonly handleMiss = (): void => {
    this.selectedCards.forEach((card) => card.reset());
    this.currentPlayer = this.currentPlayer === 'blue' ? 'orange' : 'blue';
    this.finishTurn();
  };

  private finishTurn(): void {
    this.selectedCards = [];
    this.isComparing = false;
    this.updateCurrentPlayer();
  }

  private getCard(element: HTMLButtonElement): Card {
    const existingCard = this.cards.get(element);
    if (existingCard) return existingCard;

    const image = element.querySelector('.card__face--back')?.getAttribute('data-card-image') ?? null;
    const card = new Card(element, image);
    this.cards.set(element, card);
    return card;
  }

  private addPoint(): void {
    if (this.currentPlayer === 'blue') this.blueScore += 1;
    else this.orangeScore += 1;

    this.updateScores();
  }

  private resetScores(): void {
    this.blueScore = 0;
    this.orangeScore = 0;
    this.updateScores();
  }

  private updateScores(): void {
    setScore('.blue_player_score', this.blueScore);
    setScore('.orange_player_score', this.orangeScore);
    localStorage.setItem('blueScore', String(this.blueScore));
    localStorage.setItem('orangeScore', String(this.orangeScore));
  }

  private updateCurrentPlayer(): void {
    const playerImage = document.getElementById('currentPlayer');
    playerImage?.setAttribute('src', this.theme.playerImages[this.currentPlayer]);
  }

  private isComplete(): boolean {
    return this.field.querySelectorAll('.card').length === this.field.querySelectorAll('.card.is-matched').length;
  }
}

function getStartingPlayer(): PlayerColor {
  const selectedPlayer = localStorage.getItem('selectedPlayer') ?? '1 player';
  return selectedPlayer.startsWith('2') ? 'orange' : 'blue';
}

function setScore(selector: string, score: number): void {
  const element = document.querySelector<HTMLElement>(selector);
  if (element) element.textContent = String(score);
}

export function startGame(theme: Theme): void {
  const field = document.getElementById('field');
  if (field) new Game(field, theme).start();
}