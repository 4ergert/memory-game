export type PlayerColor = 'blue' | 'orange';

export class Theme {
  backgroundColor!: string;
  cardFaceImage!: string;
  cardImages!: string[];
  playerImages!: Record<PlayerColor, string>;
  scoreBoardBackgroundColor!: string;
  cardImageMaxSize?: number;
  exitButtonBorderColor?: string;
  headerBackgroundColor?: string;

	getPlayerImage(player: PlayerColor): string {
		return this.playerImages[player];
	}

	getCardImage(index: number): string {
		return this.cardImages[index % this.cardImages.length];
	}
}