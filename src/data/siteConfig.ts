// Central Site Configuration
// Personalize the entire website here without touching React components!

export interface ThemeColors {
  primaryBg: string;       // Main background deep plum / night velvet
  primaryBgAlt: string;    // Slightly elevated plum / mulberry
  textPrimary: string;     // Warm ivory text
  textSecondary: string;   // Soft champagne / muted rose
  accentGold: string;      // Radiant champagne gold
  accentGoldHover: string; // Lighter shimmering gold
  accentRose: string;      // Soft dusty rose
  cardBg: string;          // Glassmorphic card surface
  cardBorder: string;      // Subtle golden rim
}

export interface SiteConfig {
  sisterName: string;
  sisterNickname: string;
  siblingName: string;
  birthDate: string;
  heroGreeting: string;
  heroSubGreeting: string;
  heroTagline: string;
  heroPhotograph: string;
  openingPrompt: string;
  openingSubPrompt: string;
  openingButtonText: string;
  envelopeRecipient: string;
  envelopeSealText: string;
  theme: ThemeColors;
  audio: {
    backgroundMusic: string;
    openingSound: string;
    celebrationSound: string;
    clickSound: string;
    defaultVolume: number;
    trackTitle: string;
    trackArtist: string;
  };
}

export const siteConfig: SiteConfig = {
  // Sister's Details
  sisterName: "Meti",
  sisterNickname: "Meti",
  siblingName: "Your Sibling",
  birthDate: "Today & Every Day",

  // Section 1: Opening Experience
  openingPrompt: "Something special was made for you...",
  openingSubPrompt: "A little digital universe of memories, heartfelt words, and birthday love.",
  openingButtonText: "Open Your Surprise",
  envelopeRecipient: "For My Wonderful Sister",
  envelopeSealText: "WITH LOVE",

  // Section 2: Hero Section
  heroGreeting: "HAPPY BIRTHDAY, METI",
  heroSubGreeting: "Today is all about celebrating the wonderful person you are.",
  heroTagline: "A collection of little moments, timeless memories, and a thousand wishes made just for you.",
  heroPhotograph: `${import.meta.env.BASE_URL}images/hero.jpg`,

  // Theme Palette: Warm Ivory, Champagne Gold, Deep Plum, Soft Rose
  theme: {
    primaryBg: "#170C15",
    primaryBgAlt: "#251221",
    textPrimary: "#FAF7F2",
    textSecondary: "#E2D3C4",
    accentGold: "#E5C158",
    accentGoldHover: "#F6D678",
    accentRose: "#E4A198",
    cardBg: "rgba(37, 18, 33, 0.65)",
    cardBorder: "rgba(229, 193, 88, 0.25)",
  },

  // Audio System
  audio: {
    backgroundMusic: `${import.meta.env.BASE_URL}audio/birthday-music.mp3`,
    openingSound: `${import.meta.env.BASE_URL}audio/opening.mp3`,
    celebrationSound: `${import.meta.env.BASE_URL}audio/celebration.mp3`,
    clickSound: `${import.meta.env.BASE_URL}audio/click.mp3`,
    defaultVolume: 0.5,
    trackTitle: "A Little Universe Theme",
    trackArtist: "Acoustic Melody for Meti",
  },
};

