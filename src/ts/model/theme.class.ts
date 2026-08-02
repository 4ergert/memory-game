export type PlayerColor = 'blue' | 'orange';

export class Theme {
  backgroundColor!: string;
  cardFaceImage!: string;
  cardImages!: string[];
  playerImages!: Record<PlayerColor, string>;
  scoreBoardBackgroundColor!: string;
  cardImageMaxSize?: number;
  cardBorderRadius?: number;
  exitButtonBorderColor?: string;
  exitButtonHoverScale?: boolean;
  quitDialogBackButtonLabel?: string;
  quitDialogExitButtonLabel?: string;
  winnerDialogBackButtonLabel?: string;
  headerBackgroundColor?: string;
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