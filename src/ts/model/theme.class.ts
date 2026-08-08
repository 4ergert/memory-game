/** Identifies the two players supported by the game. */
export type PlayerColor = 'blue' | 'orange';

/** Defines the assets and optional presentation settings for a game theme. */
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

  /** Returns the asset path for one player's label. */
	getPlayerImage(player: PlayerColor): string {
		return this.playerImages[player];
	}

  /** Returns a card image, cycling through the available theme images. */
	getCardImage(index: number): string {
		return this.cardImages[index % this.cardImages.length];
	}
}