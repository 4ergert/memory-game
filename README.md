# Memory Game

A browser-based memory game for two players. Before starting a game, choose a theme, the starting player, and a board size. The selected configuration is stored in the browser.

## Features

- Coding and gaming themes
- Starting-player selection
- Multiple board sizes
- Alternating turns after a missed pair
- Score tracking for matched pairs
- Visual feedback for matched cards
- Quit confirmation dialog and winner feedback

## Tech Stack

- TypeScript
- SCSS
- Vite
- Vitest and JSDOM

## Requirements

- Node.js 20 or later
- npm

## Installation

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Vite prints the local URL after starting, usually `http://localhost:5173`.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Type-checks the project and creates a production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm test` | Runs the game rule tests. |
| `npm run open` | Opens linked project resources. |

## Game Rules

1. On the settings page, choose a theme, starting player, and board size.
2. Reveal two cards.
3. When the cards match, the active player earns a point and takes another turn.
4. When the cards do not match, they are turned face down and the turn changes.
5. After all pairs are found, the winner feedback page is shown.

## Project Structure

```text
src/
  styles/       Base, page, and theme SCSS styles
  ts/
    game/       Board rendering and game rules
    model/      Card, theme, and game models
    settings/   Settings-page behavior
    theme/      Theme selection and application
pages/          HTML pages for settings, gameplay, and game over
public/assets/  Images, icons, and fonts
```

## Build and Test

Before releasing, run:

```bash
npm test
npm run build
```
