export class Card {
  flipped = false;
  matched = false;

  constructor(
    private readonly element: HTMLButtonElement,
    readonly image: string | null,
  ) {}

  flip(): void {
    this.flipped = true;
    this.element.classList.add('is-flipped');
  }

  reset(): void {
    this.flipped = false;
    this.element.classList.remove('is-flipped');
  }

  match(): void {
    this.matched = true;
    this.element.classList.add('is-matched');
  }
}