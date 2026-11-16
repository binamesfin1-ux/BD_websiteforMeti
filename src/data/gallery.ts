// Section 6: Her Photo Gallery
// "A Gallery Full of You"

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
  category: "Portraits" | "Adventures" | "Celebrations" | "Candid";
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
    "A collection of your brightest smiles, your quiet moments of poise, and the radiance you bring into every space you enter.",
  photos: [
    {
      id: "gal-1",
      image: `${import.meta.env.BASE_URL}images/gallery-01.jpg`,
      title: "Radiant Golden Hour",
      caption: "Bathed in the warm sunset glow, caught in a natural, candid smile.",
      category: "Portraits",
      aspectRatio: "portrait",
    },
    {
      id: "gal-2",
      image: `${import.meta.env.BASE_URL}images/gallery-02.jpg`,
      title: "Mountain Air & Clear Skies",
      caption: "Taking in the vista during our favorite weekend escape.",
      category: "Adventures",
      aspectRatio: "landscape",
    },
    {
      id: "gal-3",
      image: `${import.meta.env.BASE_URL}images/gallery-03.jpg`,
      title: "Joy In The Little Moments",
      caption: "Mid-laugh over something ridiculous that only you and I would find funny.",
      category: "Candid",
      aspectRatio: "square",
    },
    {
      id: "gal-4",
      image: `${import.meta.env.BASE_URL}images/gallery-04.jpg`,
      title: "Celebration Night",
      caption: "Dressed up, celebrating big milestones, and glowing with confidence.",
      category: "Celebrations",
      aspectRatio: "portrait",
    },
    {
      id: "gal-5",
      image: `${import.meta.env.BASE_URL}images/gallery-05.jpg`,
      title: "Bookstores & Warm Brews",
      caption: "Lost in pages of a new favorite book at our cozy sanctuary café.",
      category: "Candid",
      aspectRatio: "landscape",
    },
    {
      id: "gal-6",
      image: `${import.meta.env.BASE_URL}images/gallery-06.jpg`,
      title: "City Lights & Evening Strolls",
      caption: "Walking under the boulevard lights after a delicious dinner.",
      category: "Adventures",
      aspectRatio: "portrait",
    },
    {
      id: "gal-7",
      image: `${import.meta.env.BASE_URL}images/gallery-07.jpg`,
      title: "Pure Elegance",
      caption: "A timeless portrait that captures your gentle grace and presence.",
      category: "Portraits",
      aspectRatio: "square",
    },
    {
      id: "gal-8",
      image: `${import.meta.env.BASE_URL}images/gallery-08.jpg`,
      title: "Birthday Cheer",
      caption: "Making a wish and blowing out the candles with eyes full of hope.",
      category: "Celebrations",
      aspectRatio: "landscape",
    },
  ],
};

