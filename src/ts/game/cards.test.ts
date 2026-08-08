import { afterEach, describe, expect, it, vi } from 'vitest';
import { startGame } from '../model/game.class';
import { Theme } from '../model/theme.class';

/** Provides the minimum theme configuration needed by the game-rule tests. */
const theme = new Theme();
theme.cardFaceImage = '';
theme.cardImages = [];
theme.playerImages = { blue: 'blue.svg', orange: 'orange.svg' };

/** Renders a test board and returns its card elements. */
function renderGame(images: string[]): HTMLButtonElement[] {
  document.body.innerHTML = `
    <span class="blue_player_score">0</span>
    <span class="orange_player_score">0</span>
    <img id="currentPlayer">
    <section id="field">
      ${images.map((image) => `<button class="card"><span class="card__face--back" data-card-image="${image}"></span></button>`).join('')}
    </section>
  `;
  localStorage.clear();
  startGame(theme);
  return Array.from(document.querySelectorAll<HTMLButtonElement>('.card'));
}

/** Dispatches a bubbling click event for one test card. */
function click(card: HTMLButtonElement): void {
  card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

afterEach(() => vi.useRealTimers());

describe('memory game rules', () => {
  it('awards a point to the active player for a matched pair', () => {
    vi.useFakeTimers();
    const [firstCard, secondCard] = renderGame(['a', 'a', 'b', 'b']);

    click(firstCard);
    click(secondCard);
    vi.advanceTimersByTime(400);

    expect(document.querySelector('.blue_player_score')?.textContent).toBe('1');
    expect(firstCard.classList.contains('is-matched')).toBe(true);
    expect(secondCard.classList.contains('is-matched')).toBe(true);
  });

  it('changes the active player after a missed pair', () => {
    vi.useFakeTimers();
    const [firstCard, secondCard] = renderGame(['a', 'b']);

    click(firstCard);
    click(secondCard);
    vi.advanceTimersByTime(800);

    expect(document.getElementById('currentPlayer')?.getAttribute('src')).toBe('orange.svg');
    expect(firstCard.classList.contains('is-flipped')).toBe(false);
    expect(secondCard.classList.contains('is-flipped')).toBe(false);
  });

  it('does not allow matched cards to be flipped again', () => {
    vi.useFakeTimers();
    const [firstCard, secondCard] = renderGame(['a', 'a', 'b', 'b']);

    click(firstCard);
    click(secondCard);
    vi.advanceTimersByTime(400);
    click(firstCard);

    expect(firstCard.classList.contains('is-matched')).toBe(true);
    expect(document.querySelector('.blue_player_score')?.textContent).toBe('1');
  });
});