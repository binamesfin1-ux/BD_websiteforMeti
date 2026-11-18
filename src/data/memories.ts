// Section 3: A Collection of Memories
// "Little Moments, Beautiful Memories"

export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  rotation?: number; // Subtle polaroid tilt in degrees
}

export const memoriesData: {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  memories: MemoryItem[];
} = {
  sectionTitle: "Little Moments, Beautiful Memories",
  sectionSubtitle: "Chapter 01 · A Collection of Memories",
  description:
    "A collection of special snapshots and moments that remind me how lucky I am to have you as my sister.",
  memories: [
    {
      id: "mem-1",
      image: `${import.meta.env.BASE_URL}images/memory-01.jpg`,
      title: "Pure Joy",
      caption: "A candid moment of you that brings an instant smile to my heart.",
      rotation: -2.5,
    },
    {
      id: "mem-2",
      image: `${import.meta.env.BASE_URL}images/memory-02.jpg`,
      title: "Unforgettable Moments",
      caption: "Proof that having you around makes every single day brighter and more memorable.",
      rotation: 3,
    },
    {
      id: "mem-3",
      image: `${import.meta.env.BASE_URL}images/memory-03.jpg`,
      title: "Cherished Memories",
      caption: "One of my absolute favorite photos of you, capturing your natural warmth.",
      rotation: -1.5,
    },
    {
      id: "mem-4",
      image: `${import.meta.env.BASE_URL}images/memory-04.jpg`,
      title: "That Radiant Smile",
      caption: "Your laughter is contagious and lights up every space you're in.",
      rotation: 2,
    },
    {
      id: "mem-5",
      image: `${import.meta.env.BASE_URL}images/memory-05.jpg`,
      title: "Timeless Moments",
      caption: "A special snapshot worth keeping forever in our little universe.",
      rotation: -3,
    },
    {
      id: "mem-6",
      image: `${import.meta.env.BASE_URL}images/memory-06.jpg`,
      title: "Just Being You",
      caption: "Authentic, wonderful, and uniquely you. So proud to have you as my sister.",
      rotation: 1.5,
    },
  ],
};
