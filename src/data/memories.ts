// Section 3: A Collection of Memories
// "Little Moments, Beautiful Memories"

export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
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
    "Some of the happiest memories are made of the simplest things: long talks, quiet mornings, spontaneous laughs, and being side by side.",
  memories: [
    {
      id: "mem-1",
      image: `${import.meta.env.BASE_URL}images/memory-01.jpg`,
      title: "Late Night Talks & Laughs",
      caption: "Talking about everything and nothing until 2 AM. The world outside was quiet, but we were laughing uncontrollably.",
      date: "Summer Evenings",
      location: "Living Room Floor",
      rotation: -2.5,
    },
    {
      id: "mem-2",
      image: `${import.meta.env.BASE_URL}images/memory-02.jpg`,
      title: "Spontaneous Adventures",
      caption: "The day we took a wrong turn, got slightly lost, and stumbled upon the most beautiful golden sunset view.",
      date: "Golden Hour",
      location: "Scenic Overlook",
      rotation: 3,
    },
    {
      id: "mem-3",
      image: `${import.meta.env.BASE_URL}images/memory-03.jpg`,
      title: "Milestones & Triumphs",
      caption: "Watching your hard work and quiet determination pay off. Nobody was prouder of you in that room than me.",
      date: "Spring Milestone",
      location: "Celebration Hall",
      rotation: -1.5,
    },
    {
      id: "mem-4",
      image: `${import.meta.env.BASE_URL}images/memory-04.jpg`,
      title: "Coffee Runs & Traditions",
      caption: "Our weekend coffee ritual. Even thirty minutes of coffee with you can turn an entire stressful week around.",
      date: "Sunday Mornings",
      location: "Corner Café",
      rotation: 2,
    },
    {
      id: "mem-5",
      image: `${import.meta.env.BASE_URL}images/memory-05.jpg`,
      title: "Unfiltered Joy",
      caption: "A candid moment of you laughing with your whole heart. This is my favorite kind of memory of you.",
      date: "Sunny Afternoon",
      location: "The Park",
      rotation: -3,
    },
    {
      id: "mem-6",
      image: `${import.meta.env.BASE_URL}images/memory-06.jpg`,
      title: "Quiet Companionship",
      caption: "We don't always need to say much. Just sitting in the same room reading or listening to music is comforting.",
      date: "Autumn Days",
      location: "Home Sweet Home",
      rotation: 1.5,
    },
  ],
};

