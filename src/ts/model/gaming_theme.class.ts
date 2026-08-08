import { Theme } from './theme.class';

export class GamingTheme extends Theme {
	constructor() {
		super();
		this.cardFaceImage = '../assets/img/gaming-card-face.svg';
		this.cardImages = getCardImages();
		this.playerImages = {
			blue: '../assets/icons/blue-gaming-label.svg',
			orange: '../assets/icons/orange-gaming-label.svg',
		};
		this.cardImageMaxSize = 70;
    this.cardBorderRadius = 12;
		this.quitDialogBackButtonLabel = 'No, back to Game';
		this.quitDialogExitButtonLabel = 'Yes, quit game';
		this.winnerDialogBackButtonLabel = 'Home';
		this.winnerImage = '../assets/img/pockal-gaming-theme.svg';
		this.showWinnerConfetti = false;
		this.fontFamily = 'Orbitron';
	}
}

function getCardImages(): string[] {
	return Array.from({ length: 18 }, (_, index) => {
		const number = String(index + 1).padStart(2, '0');
		return `../assets/img/theme/gaming/${number}.svg`;
	});
}