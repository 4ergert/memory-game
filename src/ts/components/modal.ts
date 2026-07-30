/**
 * Öffnet das bestehende Quit-Game-Dialogelement, falls es noch nicht geöffnet ist.
 *
 * @param dialog - Das `HTMLDialogElement`, das geöffnet werden soll.
 */
function openQuitGameModal(dialog: HTMLDialogElement): void {
  if (!dialog.open) {
    dialog.showModal();
  }
}

/**
 * Schließt das bestehende Quit-Game-Dialogelement, falls es geöffnet ist.
 *
 * @param dialog - Das `HTMLDialogElement`, das geschlossen werden soll.
 */
function closeQuitGameModal(dialog: HTMLDialogElement): void {
  if (dialog.open) {
    dialog.close();
  }
}

/**
 * Initialisiert die Quit-Game-Modal-Logik.
 *
 * Diese Funktion findet den Exit-Button, den Quit-Dialog und die beiden
 * Modal-Aktionsbuttons. Sie bindet die Klick-Events, um den Dialog zu öffnen,
 * ihn wieder zu schließen und auf Exit zu navigieren.
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

function backdropCloseDialog(dialog: HTMLDialogElement): void {
    dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeQuitGameModal(dialog);
    }
  });
}