import { getGamingHeaderTemplate, getCardTemplate, getQuitGameModalTemplate, getGameSectionTemplate } from '../game/game-template';
import { getSelectedTheme } from '../theme/selected-theme';

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
 * Rendert die Rückseiten der Karten mit zufällig ausgewählten Bildpaaren.
 *
 * @param cardCount - Die Anzahl der Karten auf dem aktuellen Spielfeld.
 */
function renderBackFaceImages(cardCount: number): void {
  const backFaces = Array.from(document.querySelectorAll<HTMLElement>('.card__face--back'));
  if (backFaces.length === 0) return;

  const pairCount = Math.max(1, Math.floor(cardCount / 2));
  const theme = getSelectedTheme();
  const selectedImages = Array.from({ length: pairCount }, (_, index) => theme.getCardImage(index));
  const randomizedCardImages = shuffleCards([...selectedImages, ...selectedImages]).slice(0, cardCount);

  backFaces.forEach((face, index) => {
    const image = randomizedCardImages[index];

    face.setAttribute('data-card-image', image ?? '');
    face.style.backgroundImage = theme.cardImageMaxSize || !image ? 'none' : `url('${image}')`;
    renderCardImage(face, image, theme.cardImageMaxSize);
  });
}

function renderCardImage(face: HTMLElement, source: string | undefined, maxSize?: number): void {
  face.querySelector('.card__image')?.remove();
  if (!source || !maxSize) return;

  const image = document.createElement('img');
  image.className = 'card__image';
  image.src = source;
  image.alt = '';
  image.style.maxWidth = `${maxSize}px`;
  image.style.maxHeight = `${maxSize}px`;
  face.append(image);
}

/**
 * Rendert den Header der Memory-Game-Seite.
 */
export function renderGamingHeader(): void {
  const refHeaderSection = document.querySelector<HTMLElement>('[header-section]');
  if (refHeaderSection) refHeaderSection.outerHTML = getGamingHeaderTemplate();

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
  applyCardBorderRadius(getSelectedTheme().cardBorderRadius);
  renderBackFaceImages(cardCount);
}

function applyCardBorderRadius(radius?: number): void {
  if (!radius) return;

  document.querySelectorAll<HTMLElement>('.card__face').forEach((face) => face.style.borderRadius = `${radius}px`);
}

/**
 * Rendert den Spielbereich in die Seite.
 *
 * Der vorhandene Platzhalter mit dem Attribut `[game-section]` wird durch
 * das Spielabschnitts-Template ersetzt.
 */
export function renderGameSection(): void {
  const refGameSection = document.querySelector<HTMLElement>('[game-section]');
  if (refGameSection) refGameSection.outerHTML = getGameSectionTemplate();
}

/**
 * Rendert das Quit-Game-Modal in die Seite.
 *
 * Der Platzhalter mit dem Attribut `[quitGameModal-section]` wird durch das
 * Quit-Dialog-Template ersetzt.
 */
export function renderQuitGameModal(): void {
  const refQuitGameModalSection = document.querySelector<HTMLElement>('[quitGameModal-section]');
  if (refQuitGameModalSection) refQuitGameModalSection.outerHTML = getQuitGameModalTemplate();
}

