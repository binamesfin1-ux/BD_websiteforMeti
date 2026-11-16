// Section 5: Our Little Memory Timeline
// "Moments Worth Keeping Forever"

export interface TimelineEntry {
  id: string;
  era: string;
  title: string;
  memory: string;
  photo: string;
  tag: string;
}

export const timelineData: {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  entries: TimelineEntry[];
} = {
  sectionTitle: "Moments Worth Keeping Forever",
  sectionSubtitle: "Chapter 03 · Our Little Timeline",
  description:
    "A journey through the years — from shared childhood jokes to the bond we share today.",
  entries: [
    {
      id: "time-1",
      era: "The Early Years",
      title: "Partners in Crime",
      memory:
        "Building living room pillow forts, making up games with ridiculous rules, and teaming up against bedtime. Those days laid the foundation for everything.",
      photo: "./images/timeline-01.jpg",
      tag: "Childhood Adventures",
    },
    {
      id: "time-2",
      era: "Growing & Learning",
      title: "Finding Your Spark",
      memory:
        "Watching you develop your unique voice, your passions, and your sense of style. You were never afraid to be authentically yourself.",
      photo: "./images/timeline-02.jpg",
      tag: "Self Discovery",
    },
    {
      id: "time-3",
      era: "The Turning Point",
      title: "From Siblings to Best Friends",
      memory:
        "Somewhere during high school and university, we stopped just being siblings under one roof and became each other's chosen confidants and closest allies.",
      photo: "./images/timeline-03.jpg",
      tag: "Lifelong Bond",
    },
    {
      id: "time-4",
      era: "Adventures & Roadtrips",
      title: "Exploring the World Together",
      memory:
        "Every road trip playlist, every train we rushed for, and every late-night diner meal. The best trips were never about the destination, but the company.",
      photo: "./images/timeline-04.jpg",
      tag: "Shared Journeys",
    },
    {
      id: "time-5",
      era: "The Present & Beyond",
      title: "Celebrating Who You Are Today",
      memory:
        "Standing here today, seeing the capable, empathetic, and radiant person you are. I am so excited for everything the future has waiting for you.",
      photo: "./images/timeline-05.jpg",
      tag: "Today & Tomorrow",
    },
  ],
};

