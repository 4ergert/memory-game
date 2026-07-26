type CardElement = HTMLButtonElement & {
  matched?: boolean;
};

let selectedCards: CardElement[] = [];
let isComparing = false;
let blueScore = 0;
let orangeScore = 0;
let currentPlayer: 'blue' | 'orange' = 'blue';

function updateCurrentPlayer(): void {
  const currentPlayerImg = document.getElementById('currentPlayer') as HTMLImageElement | null;
  if (!currentPlayerImg) return;

  currentPlayerImg.setAttribute('src', currentPlayer === 'blue' ? '../assets/icons/blue-code-label.svg' : '../assets/icons/orange-code-label.svg');
}

function updateScore(): void {
  const blueScoreElement = document.querySelector<HTMLElement>('.blue_player_score');
  const orangeScoreElement = document.querySelector<HTMLElement>('.orange_player_score');

  if (blueScoreElement && orangeScoreElement) {
    blueScoreElement.textContent = String(blueScore);
    orangeScoreElement.textContent = String(orangeScore);
  }
}

function resetSelectedCards(): void {
  selectedCards.forEach((card) => card.classList.remove('is-flipped'));
  selectedCards = [];
  isComparing = false;
  currentPlayer = currentPlayer === 'blue' ? 'orange' : 'blue';
  updateCurrentPlayer();
}

function handleMatch(): void {
  if (currentPlayer === 'blue') {
    blueScore += 1;
  } else {
    orangeScore += 1;
  }

  selectedCards.forEach((card) => {
    card.matched = true;
    card.classList.add('is-matched');
  });
  selectedCards = [];
  isComparing = false;
  updateScore();
  updateCurrentPlayer();
}

export function flipCards(): void {
  const refField = document.getElementById('field');
  if (!refField) return;

  updateCurrentPlayer();

  refField.addEventListener('click', (event) => {
    const card = (event.target as HTMLElement).closest('.card') as CardElement | null;
    if (!card || card.matched || isComparing || card.classList.contains('is-flipped')) return;

    card.classList.add('is-flipped');
    selectedCards.push(card);

    if (selectedCards.length < 2) return;

    isComparing = true;

    const [firstCard, secondCard] = selectedCards;
    const firstImage = firstCard.querySelector<HTMLElement>('.card__face--back')?.getAttribute('data-card-image');
    const secondImage = secondCard.querySelector<HTMLElement>('.card__face--back')?.getAttribute('data-card-image');

    if (firstImage === secondImage) {
      window.setTimeout(() => handleMatch(), 400);
      return;
    }

    window.setTimeout(() => resetSelectedCards(), 800);
  });
}