# [Klik.js](https://klikjs.now.sh)

Classic Klik & Play games compiled for web with Clickteam Fusion 2.5 HTML Exporter.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Add more games

Export using the HTML exporter to the `public/games/` folder. Add an info.json file for more detail, e.g.:
```json
{
  "name": "Excellente Adventure",
  "author": "Arther O. Game",
  "date": "Jun 6 1996",
  "description": "What happened anyway",
  "tool": "knp"
}
```
