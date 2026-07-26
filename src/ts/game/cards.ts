export function flipCards() {
  const refField = document.getElementById('field');
  if (refField) {
    refField.addEventListener('click', (event) => {
      const card = (event.target as HTMLButtonElement).closest('.card') as HTMLButtonElement;
      if (card) {
        card.classList.toggle('is-flipped');
      }
    });
  }
}