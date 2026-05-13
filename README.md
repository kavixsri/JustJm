# 🚦 Urban Traffic Optimizer

An AI-Powered Smart City Traffic Management Dashboard built with React, Vite, and Tailwind CSS.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## Features

- **Real-Time Metrics** — Live updates every 2 seconds for speed, congestion, sensors, and incidents
- **AI Predictions** — Traffic forecasting with confidence scores for the next 2 hours
- **Intersection Management** — Status monitoring for 6 key city intersections
- **Incident Tracking** — Active incident alerts with severity levels and affected vehicle counts
- **Impact Dashboard** — CO₂ savings, time saved per trip, and commuters served

## Tech Stack

- [React 18](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Lucide React](https://lucide.dev/) — Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/urban-traffic-optimizer.git
cd urban-traffic-optimizer

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Vercel, Netlify, GitHub Pages, etc.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
urban-traffic-optimizer/
├── public/
├── src/
│   ├── components/
│   │   ├── StatCard.jsx        # Metric stat card
│   │   ├── IntersectionCard.jsx # Intersection status card
│   │   └── PredictionCard.jsx  # AI prediction card
│   ├── App.jsx                 # Main app with all tabs
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind base styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Deployment

### Deploy to Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/urban-traffic-optimizer",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## License

MIT
