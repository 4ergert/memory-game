import { Theme } from './theme.class';

/** Provides card and player assets for the coding theme. */
export class CodingTheme extends Theme {
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

/** Creates the ordered list of coding-theme card image paths. */
function getCardImages(): string[] {
	return Array.from({ length: 18 }, (_, index) => {
		const number = String(index + 1).padStart(2, '0');
		return `../assets/img/theme/coding/${number}.svg`;
	});
}