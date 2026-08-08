export type PlayerColor = 'blue' | 'orange';

export class Theme {
  cardFaceImage!: string;
  cardImages!: string[];
  playerImages!: Record<PlayerColor, string>;
  cardImageMaxSize?: number;
  cardBorderRadius?: number;
  quitDialogBackButtonLabel?: string;
  quitDialogExitButtonLabel?: string;
  winnerDialogBackButtonLabel?: string;
  winnerImage?: string;
  showWinnerConfetti?: boolean;
  fontFamily?: string;

	getPlayerImage(player: PlayerColor): string {
		return this.playerImages[player];
	}

	getCardImage(index: number): string {
		return this.cardImages[index % this.cardImages.length];
	}
}