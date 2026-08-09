import { Theme } from './theme.class';

/**
 * Provides assets and presentation settings for the gaming theme.
 *
 * In addition to its asset paths, this theme overrides optional base settings
 * used by the card layout, dialogs, winner feedback, and typography.
 */
export class GamingTheme extends Theme {
	/**
	 * Creates the gaming theme with its visual assets and UI-specific settings.
	 *
	 * It configures the gaming card assets, player labels, compact card layout,
	 * dialog labels, winner image, and Orbitron font.
	 */
	constructor() {
		super();
		this.cardFaceImage = '../assets/img/gaming-card-face.svg'; /** Face-down card image path. */
		this.cardImages = getCardImages(); /** Available face-up card image paths. */
		this.playerImages = {
			blue: '../assets/icons/blue-gaming-label.svg',
			orange: '../assets/icons/orange-gaming-label.svg',
		}; /** Player-label image paths keyed by color. */
		this.cardImageMaxSize = 70; /** Maximum size for face-up card images in pixels. */
    this.cardBorderRadius = 12; /** Card border radius in pixels. */
		this.quitDialogBackButtonLabel = 'No, back to Game'; /** Quit-dialog cancel action label. */
		this.quitDialogExitButtonLabel = 'Yes, quit game'; /** Quit-dialog confirmation action label. */
		this.winnerDialogBackButtonLabel = 'Home'; /** Winner-dialog return action label. */
		this.winnerImage = '../assets/img/pockal-gaming-theme.svg'; /** Winner-dialog image path. */
		this.showWinnerConfetti = false; /** Disables confetti for this theme. */
		this.fontFamily = 'Orbitron'; /** Font family applied by this theme. */
	}
}

/**
 * Creates the ordered list of gaming-theme card image paths.
 *
 * @returns The 18 available gaming card image paths, numbered with leading zeros.
 */
function getCardImages(): string[] {
	return Array.from({ length: 18 }, (_, index) => {
		const number = String(index + 1).padStart(2, '0');
		return `../assets/img/theme/gaming/${number}.svg`;
	});
}