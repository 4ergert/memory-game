import { getGamingHeaderTemplate, getCardTemplate } from '../game/game-template'

export function renderGamingHeader(): void {
  const refHeaderSection = document.querySelector<HTMLElement>('[header-section]');
  if (refHeaderSection) refHeaderSection.outerHTML = getGamingHeaderTemplate();
}

export function renderGameBoard(): void {
  const refField = document.getElementById('field');
  if (!refField) return;

  const selectedBoardSize = (localStorage.getItem('selectedBoardSize') ?? '4x4').toLowerCase().replace(/\s+/g, '');
  const [cols, rows] = selectedBoardSize.split('x').map((value) => Number(value));
  const validSize = Number.isInteger(rows) && Number.isInteger(cols);
  const cardCount = validSize ? rows * cols : 16;
  const columns = validSize ? cols : 4;

  refField.style.gridTemplateColumns = `repeat(${columns}, 120px)`;
  refField.innerHTML = Array.from({ length: cardCount }, getCardTemplate).join('');
}

