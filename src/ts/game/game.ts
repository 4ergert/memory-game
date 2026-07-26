import { getGamingHeaderTemplate } from '../game/game-template'

export function renderGamingHeader(): void {
  const refHeaderSection = document.querySelector<HTMLElement>('[header-section]');
  if (refHeaderSection) refHeaderSection.outerHTML = getGamingHeaderTemplate();
}

export function renderGameBoard(): void {
  const refField = document.getElementById('field');
  if (!refField) return;

  const selectedBoardSize = (localStorage.getItem('selectedBoardSize') ?? '4x4').toLowerCase().replace(/\s+/g, '');
  const [rows, cols] = selectedBoardSize.split('x').map((value) => Number(value));
  const validSize = Number.isInteger(rows) && Number.isInteger(cols);
  const cardCount = validSize ? rows * cols : 16;
  const columns = validSize ? cols : 4;

  refField.style.display = 'grid';
  refField.style.gridTemplateColumns = `repeat(${columns}, 120px)`;
  refField.style.gap = '16px';
  refField.style.justifyContent = 'center';

  refField.innerHTML = Array.from({ length: cardCount }, () => `
      <button class="card" type="button">
        <section class="card__inner">
          <div class="card__face"></div>
          <div class="card__face card__face--back"></div>
        </section>
      </button>
    `).join('');
}

