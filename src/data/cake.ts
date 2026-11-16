// Section 9: The Birthday Surprise
// Interactive Cake Experience

export interface CakeExperienceConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  candleCount: number;
  makeAWishButtonText: string;
  celebrateButtonText: string;
  resetButtonText: string;
  initialPrompt: string;
  candlesBlownPrompt: string;
  secretWishTitle: string;
  secretWishMessage: string;
  celebrationTitle: string;
  celebrationBanner: string;
}

export const cakeConfig: CakeExperienceConfig = {
  sectionTitle: "The Birthday Surprise",
  sectionSubtitle: "Chapter 07 · Make A Wish & Celebrate",
  description:
    "Every year deserves a ceremonial moment. Take a deep breath, hold a secret wish in your heart, and light up the celebration.",
  candleCount: 3,
  makeAWishButtonText: "Make a Wish ✨",
  celebrateButtonText: "Celebrate! 🎉",
  resetButtonText: "Light Candles Again 🕯️",
  initialPrompt: "The candles are glowing softly for you. Make a wish in your heart, then tap below.",
  candlesBlownPrompt: "The smoke whispers your secret wish into the universe...",
  secretWishTitle: "✨ Your Secret Wish Has Been Made ✨",
  secretWishMessage:
    "May the quiet dreams you held in your heart just now blossom into reality in the sweetest, most delightful ways.",
  celebrationTitle: "HAPPY BIRTHDAY, METI!",
  celebrationBanner: "Here's to celebrating the wonderful, radiant, one-of-a-kind person you are today and every day!",
};

