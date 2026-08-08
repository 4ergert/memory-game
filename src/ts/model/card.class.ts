/** Represents one card's DOM element and game state. */
export class Card {
  flipped = false;
  matched = false;

  constructor(
    private readonly element: HTMLButtonElement,
    readonly image: string | null,
  ) {}

  /** Turns the card face up. */
  flip(): void {
    this.flipped = true;
    this.element.classList.add('is-flipped');
  }

  /** Turns a non-matching card face down. */
  reset(): void {
    this.flipped = false;
    this.element.classList.remove('is-flipped');
  }

  /** Marks this card as part of a matched pair. */
  match(): void {
    this.matched = true;
    this.element.classList.add('is-matched');
  }
}