/** Identifies the two player colors supported by the game. */
export type PlayerColor = 'blue' | 'orange';

/**
 * Defines the shared asset contract and optional presentation settings for a game theme.
 *
 * Concrete theme classes populate the required card and player assets, then
 * optionally override visual behavior for game cards and dialogs.
 */
export class Theme {
  cardFaceImage!: string; /** Path to the image displayed on face-down cards. */
  cardImages!: string[]; /** Ordered paths to the images displayed on face-up cards. */
  playerImages!: Record<PlayerColor, string>; /** Player-label image paths keyed by player color. */
  cardImageMaxSize?: number; /** Optional maximum size in pixels for face-up card images. */
  cardBorderRadius?: number; /** Optional border radius in pixels for game cards. */
  quitDialogBackButtonLabel?: string; /** Optional label for the action that returns from the quit dialog. */
  quitDialogExitButtonLabel?: string; /** Optional label for the action that confirms leaving the game. */
  winnerDialogBackButtonLabel?: string; /** Optional label for the action that returns from the winner dialog. */
  winnerImage?: string; /** Optional image path shown in the winner dialog. */
  showWinnerConfetti?: boolean; /** Determines whether confetti is shown in the winner dialog. */
  fontFamily?: string; /** Optional font family applied when the theme is active. */


	/**
	 * Returns the player-label image path for a specific player.
	 *
	 * @param player - The player whose label image is requested.
	 * @returns The configured player-label image path.
	 */
	getPlayerImage(player: PlayerColor): string {
		return this.playerImages[player];
	}

  /**
   * Returns a card image for a board position, cycling when needed.
   *
   * @param index - Zero-based board position for which an image is needed.
   * @returns The matching configured card image path.
   */
	getCardImage(index: number): string {
		return this.cardImages[index % this.cardImages.length];
	}
}