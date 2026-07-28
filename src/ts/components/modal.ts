export function initQuitGameModal(): void {
  const triggerButton = document.querySelector<HTMLButtonElement>('.exit_button');
  if (!triggerButton) return;

  const existingModal = document.getElementById('quitGameModal');
  if (existingModal) return;

  const backdrop = document.createElement('div');
  backdrop.id = 'quitGameModal';
  backdrop.className = 'modal-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');

  const dialog = document.createElement('div');
  dialog.className = 'quit_dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Quit game confirmation');

  const title = document.createElement('h2');
  title.className = 'quit_dialog__title';
  title.textContent = 'Are you sure you want to quit the game?';

  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.className = 'quit_dialog__buttons';

  const backButton = document.createElement('button');
  backButton.type = 'button';
  backButton.className = 'quit_dialog__button quit_dialog__button--secondary';
  backButton.textContent = 'Back to game';

  const exitButton = document.createElement('button');
  exitButton.type = 'button';
  exitButton.className = 'quit_dialog__button quit_dialog__button--primary';
  exitButton.textContent = 'Exit game';

  const closeModal = (): void => {
    backdrop.classList.remove('is-visible');
    backdrop.setAttribute('aria-hidden', 'true');
  };

  triggerButton.addEventListener('click', () => {
    backdrop.classList.add('is-visible');
    backdrop.setAttribute('aria-hidden', 'false');
  });

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  backButton.addEventListener('click', closeModal);
  exitButton.addEventListener('click', () => {
    window.location.href = './settings-page.html';
  });

  buttonsWrapper.append(backButton, exitButton);
  dialog.append(title, buttonsWrapper);
  backdrop.append(dialog);
  document.body.append(backdrop);
}

