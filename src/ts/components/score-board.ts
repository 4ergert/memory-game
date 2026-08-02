export type Scores = {
	blueScore: number;
	orangeScore: number;
};

export class ScoreBoard {
	update(scores: Scores): void {
		this.render(scores);
		this.save(scores);
	}

	reset(): void {
		this.update({ blueScore: 0, orangeScore: 0 });
	}

	getScores(): Scores {
		return {
			blueScore: getStoredScore('blueScore'),
			orangeScore: getStoredScore('orangeScore'),
		};
	}

	render({ blueScore, orangeScore }: Scores): void {
		setScore('.blue_player_score', blueScore);
		setScore('.orange_player_score', orangeScore);
	}

	private save({ blueScore, orangeScore }: Scores): void {
		localStorage.setItem('blueScore', String(blueScore));
		localStorage.setItem('orangeScore', String(orangeScore));
	}
}

function getStoredScore(key: 'blueScore' | 'orangeScore'): number {
	const score = Number(localStorage.getItem(key) ?? '0');
	return Number.isFinite(score) ? score : 0;
}

function setScore(selector: string, score: number): void {
	const element = document.querySelector<HTMLElement>(selector);
	if (element) element.textContent = String(score);
}
