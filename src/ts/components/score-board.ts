/** Stores the current score for both players. */
export type Scores = {
	blueScore: number;
	orangeScore: number;
};

/** Renders and persists the scores shown during and after a game. */
export class ScoreBoard {
	/** Updates the displayed scores and stores them in local storage. */
	update(scores: Scores): void {
		this.render(scores);
		this.save(scores);
	}

	/** Resets both player scores to zero. */
	reset(): void {
		this.update({ blueScore: 0, orangeScore: 0 });
	}

	/** Returns the persisted scores, defaulting invalid values to zero. */
	getScores(): Scores {
		return {
			blueScore: getStoredScore('blueScore'),
			orangeScore: getStoredScore('orangeScore'),
		};
	}

	/** Renders scores in the score board without persisting them. */
	render({ blueScore, orangeScore }: Scores): void {
		setScore('.blue_player_score', blueScore);
		setScore('.orange_player_score', orangeScore);
	}

	/** Persists both player scores in local storage. */
	private save({ blueScore, orangeScore }: Scores): void {
		localStorage.setItem('blueScore', String(blueScore));
		localStorage.setItem('orangeScore', String(orangeScore));
	}
}

/** Reads and validates one persisted score. */
function getStoredScore(key: 'blueScore' | 'orangeScore'): number {
	const score = Number(localStorage.getItem(key) ?? '0');
	return Number.isFinite(score) ? score : 0;
}

/** Updates one score element selected by CSS selector. */
function setScore(selector: string, score: number): void {
	const element = document.querySelector<HTMLElement>(selector);
	if (element) element.textContent = String(score);
}
