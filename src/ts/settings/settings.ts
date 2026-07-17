export function initThemeButtons(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".theme_button");

  buttons.forEach((button) => button.addEventListener("click", () => handleThemeClick(button, buttons)));
}

function handleThemeClick(selected: HTMLButtonElement, buttons: NodeListOf<HTMLButtonElement>): void {
  buttons.forEach((button) => {
    const icon = button.querySelector("img");
    if (icon) {
      icon.src = button === selected
        ? "../public/assets/icons/on.svg"
        : "../public/assets/icons/off.svg";
    }
  });
}