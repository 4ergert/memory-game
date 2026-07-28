import { getGamingHeaderTemplate, getCardTemplate } from '../game/game-template';
import { initQuitGameModal } from '../components/modal';
import { CodingTheme } from '../theme/coding_theme.class';

/**
 * Mischt ein Array von Kartenbildern zufällig durch.
 *
 * @param cards - Die Liste der Kartenbilder, die gemischt werden soll.
 * @returns Ein neu gemischtes Array mit denselben Einträgen.
 */
function shuffleCards(cards: string[]): string[] {
  const shuffledCards = [...cards];

  for (let index = shuffledCards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledCards[index], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[index]];
  }

  return shuffledCards;
}

/**
 * Liefert die verfügbaren Kartenbilder für das aktuell ausgewählte Theme.
 *
 * @returns Eine Liste von Bildpfaden für die Kartenrückseiten.
 */
function getThemeCardImages(): string[] {
  const selectedTheme = localStorage.getItem('selectedTheme') ?? 'Code vibes theme';

  if (selectedTheme === 'Gaming theme') return ['../assets/img/gaming-card-face.svg'];

  return CodingTheme.getCardImages();
}

/**
 * Rendert die Rückseiten der Karten mit zufällig ausgewählten Bildpaaren.
 *
 * @param cardCount - Die Anzahl der Karten auf dem aktuellen Spielfeld.
 */
function renderBackFaceImages(cardCount: number): void {
  const backFaces = Array.from(document.querySelectorAll<HTMLElement>('.card__face--back'));
  if (backFaces.length === 0) return;

  const pairCount = Math.max(1, Math.floor(cardCount / 2));
  const availableImages = getThemeCardImages();
  const selectedImages = Array.from({ length: pairCount }, (_, index) => availableImages[index % availableImages.length]);
  const randomizedCardImages = shuffleCards([...selectedImages, ...selectedImages]).slice(0, cardCount);

  backFaces.forEach((face, index) => {
    const image = randomizedCardImages[index];

    face.setAttribute('data-card-image', image ?? '');
    face.style.backgroundImage = image ? `url('${image}')` : 'none';
  });
}

/**
 * Rendert den Header der Memory-Game-Seite.
 */
export function renderGamingHeader(): void {
  const refHeaderSection = document.querySelector<HTMLElement>('[header-section]');
  if (refHeaderSection) refHeaderSection.outerHTML = getGamingHeaderTemplate();

  initQuitGameModal();
}

/**
 * Rendert das Spielfeld mit der passenden Kartenanzahl und den zugewiesenen Rückseitenbildern.
 */
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
  renderBackFaceImages(cardCount);
}

