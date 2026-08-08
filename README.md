# Memory Game

Ein browserbasiertes Memory-Spiel fuer zwei Personen. Vor dem Start werden Theme, Startspieler und Spielfeldgroesse ausgewaehlt. Die Spielkonfiguration wird im Browser gespeichert.

## Funktionen

- Coding- und Gaming-Theme
- Auswahl des Startspielers
- Mehrere Spielfeldgroessen
- Abwechselnde Spielzuege bei falschen Paaren
- Punktezaehlung fuer gefundene Paare
- Visuelles Feedback fuer passende Karten
- Quit-Dialog und Gewinneranzeige

## Technologien

- TypeScript
- SCSS
- Vite
- Vitest und JSDOM

## Voraussetzungen

- Node.js 20 oder neuer
- npm

## Installation

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

Vite zeigt danach die lokale Adresse an, normalerweise `http://localhost:5173`.

## Verfuegbare Befehle

| Befehl | Beschreibung |
| --- | --- |
| `npm run dev` | Startet den lokalen Entwicklungsserver. |
| `npm run build` | Prueft TypeScript und erstellt den Produktions-Build in `dist/`. |
| `npm run preview` | Stellt den Produktions-Build lokal bereit. |
| `npm test` | Fuehrt die Spielregel-Tests aus. |
| `npm run open` | Oeffnet die verlinkten Projektressourcen. |

## Spielregeln

1. Waehle auf der Einstellungsseite ein Theme, den Startspieler und eine Spielfeldgroesse.
2. Drehe zwei Karten auf.
3. Bei einem passenden Paar erhaelt der aktive Spieler einen Punkt und spielt weiter.
4. Bei einem falschen Paar werden die Karten wieder verdeckt und der Zug wechselt.
5. Sobald alle Paare gefunden sind, wird die Gewinnerseite angezeigt.

## Projektstruktur

```text
src/
  styles/       SCSS fuer Basis-, Seiten- und Theme-Stile
  ts/
    game/       Spielfeld und Spielregeln
    model/      Karten-, Theme- und Spielmodelle
    settings/   Einstellungsseite
    theme/      Theme-Auswahl und -Anwendung
pages/          HTML-Seiten fuer Einstellungen, Spiel und Spielende
public/assets/  Bilder, Icons und Schriftarten
```

## Build und Tests

Vor einem Release empfiehlt sich:

```bash
npm test
npm run build
```
