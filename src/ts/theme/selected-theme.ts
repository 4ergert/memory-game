import { CodingTheme } from '../model/coding_theme.class';
import { GamingTheme } from '../model/gaming_theme.class';
import type { Theme } from '../model/theme.class';

const themes: Record<string, Theme> = {
  'Code vibes theme': new CodingTheme(),
  'Gaming theme': new GamingTheme(),
};

/** Returns the persisted theme, falling back to the coding theme. */
export function getSelectedTheme(): Theme {
  return themes[localStorage.getItem('selectedTheme') ?? ''] ?? themes['Code vibes theme'];
}