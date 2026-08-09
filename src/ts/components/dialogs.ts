export { initWinnerFeedback } from './winner-feedback';

/**
 * Opens the existing quit-game dialog if it is not already open.
 *
 * @param dialog - The `HTMLDialogElement` to open.
 */
function openQuitGameModal(dialog: HTMLDialogElement): void {
  if (!dialog.open) {
    dialog.showModal();
  }
}

/**
 * Closes the existing quit-game dialog if it is open.
 *
 * @param dialog - The `HTMLDialogElement` to close.
 */
function closeQuitGameModal(dialog: HTMLDialogElement): void {
  if (dialog.open) {
    dialog.close();
  }
}

/**
 * Initializes the quit-game dialog behavior.
 *
 * Finds the exit button, dialog, and both dialog action buttons. It registers
 * click handlers to open and close the dialog and navigate after confirmation.
 */
export function initQuitGameModal(): void {
  const triggerButton = document.querySelector<HTMLButtonElement>('.exit_button');
  const dialog = document.getElementById('quitGameModal') as HTMLDialogElement | null;
  const backButton = document.getElementById('quitGameModal_backToGame_button') as HTMLButtonElement | null;
  const exitButton = document.getElementById('quitGameModal_exitGame_button') as HTMLButtonElement | null;

  if (!triggerButton || !dialog || !backButton || !exitButton) return;

  triggerButton.addEventListener('click', () => openQuitGameModal(dialog));
  backButton.addEventListener('click', () => closeQuitGameModal(dialog));
  exitButton.addEventListener('click', () => {
    closeQuitGameModal(dialog);
    window.location.href = './settings-page.html';
  });

  backdropCloseDialog(dialog);
}

/** Closes the dialog when its backdrop, rather than its content, is clicked. */
function backdropCloseDialog(dialog: HTMLDialogElement): void {
    dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeQuitGameModal(dialog);
    }
  });
}