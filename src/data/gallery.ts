// Section 6: Her Photo Gallery
// "A Gallery Full of You"

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export const galleryData: {
  sectionTitle: string;
  sectionSubtitle: string;
  description: string;
  photos: GalleryPhoto[];
} = {
  sectionTitle: "A Gallery Full of You",
  sectionSubtitle: "Chapter 04 · Visual Portfolio",
  description:
    "A celebration of you — your smiles, your quiet moments, and the radiance you bring into every space you enter.",
  photos: [
    {
      id: "gal-1",
      image: `${import.meta.env.BASE_URL}images/gallery-01.jpg`,
      title: "Radiant & Beautiful",
      caption: "A wonderful snapshot of you.",
      aspectRatio: "portrait",
    },
    {
      id: "gal-2",
      image: `${import.meta.env.BASE_URL}images/gallery-02.jpg`,
      title: "Cherished Moment",
      caption: "Always bringing light and positivity.",
      aspectRatio: "landscape",
    },
    {
      id: "gal-3",
      image: `${import.meta.env.BASE_URL}images/gallery-03.jpg`,
      title: "Pure Joy",
      caption: "A candid moment of laughter and happiness.",
      aspectRatio: "square",
    },
    {
      id: "gal-4",
      image: `${import.meta.env.BASE_URL}images/gallery-04.jpg`,
      title: "Golden Times",
      caption: "Celebrating the wonderful person you are.",
      aspectRatio: "portrait",
    },
    {
      id: "gal-5",
      image: `${import.meta.env.BASE_URL}images/gallery-05.jpg`,
      title: "Unforgettable",
      caption: "One of my favorite pictures of you.",
      aspectRatio: "landscape",
    },
    {
      id: "gal-6",
      image: `${import.meta.env.BASE_URL}images/gallery-06.jpg`,
      title: "Effortless Grace",
      caption: "A timeless, beautiful portrait.",
      aspectRatio: "portrait",
    },
    {
      id: "gal-7",
      image: `${import.meta.env.BASE_URL}images/gallery-07.jpg`,
      title: "Endless Smiles",
      caption: "A special moment to keep forever.",
      aspectRatio: "square",
    },
    {
      id: "gal-8",
      image: `${import.meta.env.BASE_URL}images/gallery-08.jpg`,
      title: "Celebrating You",
      caption: "Here is to another incredible year.",
      aspectRatio: "landscape",
    },
  ],
};
