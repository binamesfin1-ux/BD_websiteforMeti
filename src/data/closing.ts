// Section 10: The Final Surprise
// Emotional Closing Tribute

export interface ClosingSectionConfig {
  introSubtext: string;
  headlineGreeting: string;
  supportingQuote: string;
  closingPhoto: string;
  reflectionTitle: string;
  reflectionParagraphs: string[];
  signatureNote: string;
  replayButtonText: string;
  sharePrompt: string;
}

export const closingConfig: ClosingSectionConfig = {
  introSubtext: "And that's not even everything...",
  headlineGreeting: "Happy Birthday, Meti.",
  supportingQuote: "May your next chapter be even more beautiful than the last.",
  closingPhoto: `${import.meta.env.BASE_URL}images/closing.jpg`,
  reflectionTitle: "A Permanent Reminder",
  reflectionParagraphs: [
    "Websites may sit quietly in the digital ether, but the love, respect, and gratitude that built every pixel of this page is enduring and unconditional.",
    "Whenever you ever need a little reminder of how valued and cherished you are, return to this universe. It will always be here, just like I will always be here for you.",
  ],
  signatureNote: "With all my love, always · Your Sibling",
  replayButtonText: "Return To The Beginning ✦",
  sharePrompt: "Made with love for an extraordinary sister.",
};

