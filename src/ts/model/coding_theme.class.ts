import { Theme } from './theme.class';

/**
 * Provides all card and player assets for the coding theme.
 *
 * This theme uses the base presentation defaults from {@link Theme} and only
 * supplies the asset paths that differ from other themes.
 */
export class CodingTheme extends Theme {
  /**
   * Creates the coding theme with its card face, pair images, and player labels.
   */
  constructor() {
    super();
    this.cardFaceImage = '../assets/img/coding-card-face.svg';
    this.cardImages = getCardImages();
    this.playerImages = {
      blue: '../assets/icons/blue-code-label.svg',
      orange: '../assets/icons/orange-code-label.svg',
    };
  }
}

/**
 * Creates the ordered list of coding-theme card image paths.
 *
 * @returns The 18 available coding card image paths, numbered with leading zeros.
 */
function getCardImages(): string[] {
	return Array.from({ length: 18 }, (_, index) => {
		const number = String(index + 1).padStart(2, '0');
		return `../assets/img/theme/coding/${number}.svg`;
	});
}