/**
 * Represents one rendered memory card and its transient game state.
 *
 * The class keeps the DOM classes and the model state synchronized so game
 * rules can use `flipped` and `matched` without querying the DOM repeatedly.
 */
export class Card {
  flipped = false; /** Whether the card is currently shown face up. */
  matched = false; /** Whether the card has been permanently matched with its pair. */

  /**
   * Creates a card state wrapper for an existing board button.
   *
   * @param element - The button element rendered for this card.
   * @param image - The image identifier used to compare this card with another.
   */
  constructor(
    private readonly element: HTMLButtonElement,
    readonly image: string | null,
  ) {}

  /**
   * Turns the card face up.
   *
   * Adds the visual state class and marks the model state as flipped.
   */
  flip(): void {
    this.flipped = true;
    this.element.classList.add('is-flipped');
  }

  /**
   * Turns a non-matching card face down.
   *
   * This does not change the match state because matched cards are never reset.
   */
  reset(): void {
    this.flipped = false;
    this.element.classList.remove('is-flipped');
  }

  /**
   * Marks this card as part of a matched pair.
   *
   * Matched cards remain visible and are excluded from further selections.
   */
  match(): void {
    this.matched = true;
    this.element.classList.add('is-matched');
  }
}