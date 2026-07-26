import { getGamingHeaderTemplate } from '../game/game-template'

export function renderGamingHeader(): void {
  const refHeaderSection = document.querySelector<HTMLElement>('[header-section]');
  if (refHeaderSection) refHeaderSection.outerHTML = getGamingHeaderTemplate();
}

