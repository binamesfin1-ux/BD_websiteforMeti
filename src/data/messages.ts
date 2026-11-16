// Section 4: Words From the Heart
// "A Few Things I Want You to Know"

export interface HeartfeltMessage {
  id: string;
  number: string;
  quote: string;
  reflection: string;
  highlight: string;
}

export const messagesData: {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  cards: HeartfeltMessage[];
} = {
  sectionTitle: "A Few Things I Want You to Know",
  sectionSubtitle: "Chapter 02 · Words From The Heart",
  description:
    "Life moves quickly, and we don't always pause to say what matters most. Here are a few honest truths from a sibling who sees and appreciates you.",
  cards: [
    {
      id: "msg-1",
      number: "01",
      quote: "You make ordinary moments feel special.",
      reflection:
        "Whether it is running a dull errand or making dinner, your humor and warmth turn plain everyday hours into memories worth saving.",
      highlight: "Everyday Magic",
    },
    {
      id: "msg-2",
      number: "02",
      quote: "Your strength is quieter than you realize, but deeper than you know.",
      reflection:
        "You carry life's challenges with such grace. Even on days when you feel unsure of yourself, know that your perseverance is admired.",
      highlight: "Quiet Resilience",
    },
    {
      id: "msg-3",
      number: "03",
      quote: "I hope life gives you countless reasons to smile.",
      reflection:
        "Not just on your birthday, but on random rainy Tuesdays and busy mornings. You deserve joy that comes easily and lingers long.",
      highlight: "Unconditional Joy",
    },
    {
      id: "msg-4",
      number: "04",
      quote: "Never forget how much you mean to the people around you.",
      reflection:
        "You have a natural gift for making people feel heard, understood, and comfortable. Your presence brings an anchor of calm wherever you go.",
      highlight: "A Gift to Others",
    },
    {
      id: "msg-5",
      number: "05",
      quote: "May this new chapter bring you peace and everything your heart hopes for.",
      reflection:
        "May you find doors opening where you least expect, exciting adventures, restful nights, and fulfillment in all your quiet dreams.",
      highlight: "New Horizons",
    },
    {
      id: "msg-6",
      number: "06",
      quote: "You will always have someone in your corner.",
      reflection:
        "No matter where our paths lead or how busy life gets, you will never have to face a hardship alone. I will always be one call away.",
      highlight: "Always Here",
    },
    {
      id: "msg-7",
      number: "07",
      quote: "The world is genuinely better with you in it.",
      reflection:
        "It's a simple sentence, but every single word is true. You bring light, balance, and kindness into this family and every circle you touch.",
      highlight: "Brighter World",
    },
    {
      id: "msg-8",
      number: "08",
      quote: "Proud is an understatement for how I feel having you as my sister.",
      reflection:
        "Watching who you were, who you are, and who you are steadily becoming is one of the greatest privileges of my life.",
      highlight: "Endless Pride",
    },
  ],
};

