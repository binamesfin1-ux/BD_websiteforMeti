# ✨ A Little Universe of You

> An extraordinary, emotionally meaningful, interactive birthday website dedicated to my sister.

A personalized digital keepsake combining cinematic storytelling, an interactive scrapbook of memories, heartfelt words, ambient music, celebration surprises, and a thousand celestial wishes.

---

## 🌟 Table of Contents
1. [Key Features & Experience](#key-features--experience)
2. [Project Architecture](#project-architecture)
3. [Quick Start](#quick-start)
4. [How to Personalize Everything](#how-to-personalize-everything)
   - [1. Sister's Name & Details (`siteConfig.ts`)](#1-sisters-name--details)
   - [2. Adding Her Photos (`public/images/`)](#2-adding-her-photos)
   - [3. Replacing Music & Audio (`public/audio/`)](#3-replacing-music--audio)
   - [4. Editing Heartfelt Words & Notes (`messages.ts`)](#4-editing-heartfelt-words--notes)
   - [5. Editing Memories & Captions (`memories.ts`)](#5-editing-memories--captions)
   - [6. Editing The Memory Timeline (`timeline.ts`)](#6-editing-the-memory-timeline)
   - [7. Editing Her Photo Gallery (`gallery.ts`)](#7-editing-her-photo-gallery)
   - [8. Customizing The Personal Letter (`letter.ts`)](#8-customizing-the-personal-letter)
   - [9. Customizing Celestial Wishes (`wishes.ts`)](#9-customizing-celestial-wishes)
   - [10. Birthday Surprise Cake (`cake.ts`)](#10-birthday-surprise-cake)
   - [11. Emotional Closing Tribute (`closing.ts`)](#11-emotional-closing-tribute)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)
6. [Technology Stack](#technology-stack)

---

## 🎭 Key Features & Experience

- **Chapter 00: The Opening Envelope Experience**
  - Atmospheric 3D envelope with animated flap, golden wax seal monogram, and floating stardust particles.
  - Interactive "Open Your Surprise" trigger that unfolds the letter, plays a gentle harp arpeggio, and initiates the background soundtrack.
- **Chapter 01: The Hero Experience**
  - "HAPPY BIRTHDAY, [SISTER_NAME]" with shimmering champagne typography, radiant aura rings, and her featured portrait.
- **Chapter 02: A Collection of Memories**
  - Editorial polaroid-style asymmetric cards with natural tilt, editable dates, locations, and interactive click-to-lightbox view.
- **Chapter 03: Words From the Heart**
  - 8 mature, genuine, sibling-perspective message cards with golden filigree accents and sequential reveals.
- **Chapter 04: Our Little Memory Timeline**
  - Vertical timeline with interactive milestones, era tags, progress indicator nodes, and accompanying photos.
- **Chapter 05: Her Photo Gallery**
  - Masonry editorial layout with category filter tabs (*All, Portraits, Adventures, Celebrations, Candid*).
  - Full-screen lightbox modal with previous/next controls, keyboard navigation (Arrow keys, Escape), and image counters.
- **Chapter 06: A Letter For Her**
  - Luxurious stationery paper sheet styling with delicate paper grain, decorative gold borders, and handwritten heading/signatures.
- **Chapter 07: A Thousand Beautiful Wishes**
  - Interactive constellation garden where clicking glowing stars unveils customized blessings across 8 life themes (*Happiness, Health, Courage, Serenity, Opportunities, etc.*).
- **Chapter 08: The Birthday Surprise Cake**
  - Vector cake illustration with flickering animated candle flames.
  - "Make a Wish" button blows out the candles with rising smoke and reveals a secret wish card.
  - "Celebrate!" button fires majestic dual-cannon confetti bursts across the screen accompanied by triumphant fanfare!
- **Chapter 09: The Final Surprise**
  - Emotional closing message: *"And that's not even everything... May your next chapter be even more beautiful than the last."*
- **Floating Audio Controller**
  - Floating player with play/pause, volume slider, mute toggle, track title, and 4-bar live equalizer visualizer.
  - Built-in **Web Audio API synthesizer fallback**: if audio files are missing or loading fails, the browser procedurally synthesizes harp sweeps, chimes, and an ambient acoustic music box so music never breaks!

---

## 📁 Project Architecture

```
birthdaygift/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages build & deploy workflow
├── public/
│   ├── audio/                  # Audio files (with procedural synth fallback)
│   │   ├── birthday-music.mp3  # Background soundtrack
│   │   ├── opening.mp3         # Envelope opening sound
│   │   ├── celebration.mp3     # Cake celebration fanfare
│   │   └── click.mp3           # Acoustic button/star click chime
│   ├── images/                 # Sister's photographs directory
│   │   ├── hero.jpg            # Main hero portrait
│   │   ├── memory-01.jpg .. 06 # Polaroid memory photos
│   │   ├── gallery-01.jpg .. 08# Masonry gallery photos
│   │   └── closing.jpg         # Emotional closing portrait
│   └── favicon.svg             # Golden celestial star icon
├── src/
│   ├── data/                   # ⭐️ CENTRAL PERSONALIZATION LAYER
│   │   ├── siteConfig.ts       # Names, greeting, dates, theme colors
│   │   ├── memories.ts         # Section 3 polaroid memories
│   │   ├── messages.ts         # Section 4 heartfelt sibling cards
│   │   ├── timeline.ts         # Section 5 timeline milestones
│   │   ├── gallery.ts          # Section 6 photography portfolio
│   │   ├── letter.ts           # Section 7 handwritten stationery letter
│   │   ├── wishes.ts           # Section 8 celestial constellation wishes
│   │   ├── cake.ts             # Section 9 interactive cake & celebration
│   │   ├── closing.ts          # Section 10 emotional closing tribute
│   │   └── index.ts            # Central export
│   ├── components/
│   │   ├── audio/              # Floating player & Web Audio synthesizer
│   │   ├── common/             # SafeImage, Lightbox, ParticleCanvas, CursorGlow
│   │   ├── navigation/         # Glassmorphic Navbar & BackToTop
│   │   └── sections/           # 10 dedicated experience chapters
│   ├── styles/
│   │   └── index.css           # Global typography, glassmorphism, scrollbars
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts              # Configured for GitHub Pages subpath deployment
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle in `./dist`.

---

## 🎨 How to Personalize Everything

You can personalize the entire website **without touching any React components**. Simply edit the files in `src/data/` and drop your photos into `public/images/`.

### 1. Sister's Name & Details
Open `src/data/siteConfig.ts`:
```typescript
export const siteConfig = {
  sisterName: "Meti",            // Your sister's name
  sisterNickname: "Meti",        // Her nickname
  siblingName: "Your Sibling",   // Your name
  birthDate: "November 16",      // Her birthday date
  heroGreeting: "HAPPY BIRTHDAY, METI",
  heroSubGreeting: "Today is all about celebrating the wonderful person you are.",
  // ...
};
```

### 2. Adding Her Photos
Drop her favorite photos into `public/images/` using these filenames:

| Filename | Where It Appears | Recommended Orientation |
| :--- | :--- | :--- |
| `hero.jpg` | Main Hero Portrait | Portrait (3:4 or 4:5) |
| `memory-01.jpg` to `memory-06.jpg` | Polaroid memory cards | Square or 4:3 |
| `timeline-01.jpg` to `timeline-05.jpg` | Timeline milestones | 4:3 or 16:9 |
| `gallery-01.jpg` to `gallery-08.jpg` | Photo Gallery | Any aspect ratio |
| `closing.jpg` | Final closing section | Portrait or Square |

> **Graceful Image Fallback**: If an image is missing or hasn't been uploaded yet, the website never shows broken icons. It renders an artistic, golden constellation placeholder card!

### 3. Replacing Music & Audio
Place your preferred MP3 files in `public/audio/`:
- `birthday-music.mp3` - Background acoustic music.
- `opening.mp3` - Sound played when she clicks "Open Your Surprise".
- `celebration.mp3` - Celebration fanfare when she clicks "Celebrate!".
- `click.mp3` - Gentle chime when clicking cards and stars.

> **Zero Silence Guarantee**: If you haven't added custom audio files yet, the website's built-in **Web Audio API synthesizer** procedurally plays music box melodies and harp arpeggios automatically!

### 4. Editing Heartfelt Words & Notes
Open `src/data/messages.ts` to add or modify the 8 sibling cards.

### 5. Editing Memories & Captions
Open `src/data/memories.ts` to adjust titles, captions, dates, and locations.

### 6. Editing The Memory Timeline
Open `src/data/timeline.ts` to update the chapters and milestone memories.

### 7. Editing Her Photo Gallery
Open `src/data/gallery.ts` to customize photo titles, categories (*Portraits, Adventures, Celebrations, Candid*), and captions.

### 8. Customizing The Personal Letter
Open `src/data/letter.ts` to write your own letter paragraphs, salutation, closing, and signature.

### 9. Customizing Celestial Wishes
Open `src/data/wishes.ts` to customize the 8 interactive wishes.

### 10. Birthday Surprise Cake
Open `src/data/cake.ts` to customize the wish prompt, secret wish message, and celebration greeting.

### 11. Emotional Closing Tribute
Open `src/data/closing.ts` to customize the final sign-off and personal closing reflection.

---

## 🌐 Deploying to GitHub Pages

This project is pre-configured for flawless GitHub Pages deployment.

### Option A: Automatic Deployment via GitHub Actions (Recommended)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `birthday-gift`).
2. Push your project files to the repository:
   ```bash
   git init
   git add .
   git commit -m "A Little Universe of You - Birthday Gift for Meti"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the application, and publish your website!
5. Your website will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

### Option B: Manual Build Deployment

1. Run the build command:
   ```bash
   npm run build
   ```
2. The compiled static website is generated in the `dist` folder.
3. You can deploy this folder directly to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host.

---

## 🛠 Technology Stack

- **React 18 & TypeScript** - Solid, type-safe component architecture.
- **Vite 6** - Lightning-fast builds with zero configuration overhead.
- **Tailwind CSS v4** - Modern responsive styling, glassmorphism, and color variables.
- **Framer Motion** - Silky-smooth entrance animations, 3D envelope folds, and micro-interactions.
- **Canvas-Confetti** - High-performance celebratory confetti bursts.
- **Lucide React** - Minimalist, elegant iconography.
- **Web Audio API** - Custom synthesizer sound engine with automatic HTML5 Audio fallback.

---

## ❤️ A Note to the Creator

Take your time selecting her favorite pictures and writing words that resonate with your bond. A gift crafted with this much care and attention to detail will be a treasure she revisits for years to come.

