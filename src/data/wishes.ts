// Section 8: Wishes For Your Next Chapter
// "A Thousand Beautiful Wishes"

export interface BirthdayWish {
  id: string;
  theme: string;
  title: string;
  blessing: string;
  constellation: string;
  iconName: string; // Lucide icon name representation
}

export const wishesData: {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  instructions: string;
  wishes: BirthdayWish[];
} = {
  sectionTitle: "A Thousand Beautiful Wishes",
  sectionSubtitle: "Chapter 06 · Celestial Wishes",
  description:
    "An interactive constellation of hopes, blessings, and dreams written across the stars for the year ahead.",
  instructions: "Tap on any glowing celestial card to unveil its special birthday wish.",
  wishes: [
    {
      id: "wish-1",
      theme: "Happiness",
      title: "Effortless, Lingering Joy",
      blessing:
        "May your days be sprinkled with spontaneous laughter, peaceful mornings, and little moments that fill your soul with genuine contentment.",
      constellation: "Star of Serenity",
      iconName: "Sun",
    },
    {
      id: "wish-2",
      theme: "Success",
      title: "Fruitful Endeavors & Wins",
      blessing:
        "May every goal you quietly dedicate your energy to yield proud rewards. May new doors swing wide open before you.",
      constellation: "Crown of Victory",
      iconName: "Trophy",
    },
    {
      id: "wish-3",
      theme: "Good Health",
      title: "Vitality & Restorative Peace",
      blessing:
        "May your mind feel calm, your heart feel light, and your body be brimming with deep energy, sound sleep, and lasting vitality.",
      constellation: "Lotus of Harmony",
      iconName: "HeartPulse",
    },
    {
      id: "wish-4",
      theme: "New Opportunities",
      title: "Exciting New Horizons",
      blessing:
        "May serendipity guide your steps toward inspiring projects, travels, and fresh beginnings that surprise and delight you.",
      constellation: "Compass of Wonder",
      iconName: "Compass",
    },
    {
      id: "wish-5",
      theme: "Confidence",
      title: "Unwavering Self-Trust",
      blessing:
        "May you always recognize your immense worth, speak your truth boldly, and remember how uniquely brilliant and capable you are.",
      constellation: "Flame of Courage",
      iconName: "Sparkles",
    },
    {
      id: "wish-6",
      theme: "Beautiful Experiences",
      title: "Unforgettable Memories",
      blessing:
        "May you collect breathtaking sunsets, delicious meals, art that moves you, and stories you will cherish retelling for decades.",
      constellation: "Orb of Wonder",
      iconName: "Camera",
    },
    {
      id: "wish-7",
      theme: "Personal Growth",
      title: "Flourishing Wisdom & Grace",
      blessing:
        "May every curveball soften into wisdom, every challenge affirm your strength, and your inner world grow richer with each passing season.",
      constellation: "Seed of Blooming",
      iconName: "Flower2",
    },
    {
      id: "wish-8",
      theme: "Meaningful Bonds",
      title: "Cherished Companionship",
      blessing:
        "May you be continuously surrounded by people who honor your sensitivity, reciprocate your kindness, and love you wholeheartedly.",
      constellation: "Lyra of Connection",
      iconName: "Heart",
    },
  ],
};

