import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { galleryData, GalleryPhoto } from '../../data/gallery';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { soundEngine } from '../audio/soundEffects';

interface Section06GalleryProps {
  onPhotoClick: (photo: GalleryPhoto, index: number) => void;
}

export const Section06Gallery: React.FC<Section06GalleryProps> = ({ onPhotoClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Portraits', 'Adventures', 'Celebrations', 'Candid'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? galleryData.photos
      : galleryData.photos.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        subtitle={galleryData.sectionSubtitle}
        title={galleryData.sectionTitle}
        description={galleryData.description}
      />

      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-[0_0_16px_rgba(229,193,88,0.4)]'
                  : 'bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Responsive Masonry / Editorial Photo Grid */}
      <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredPhotos.map((photo, index) => {
            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => {
                  soundEngine.playClick();
                  onPhotoClick(photo, index);
                }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden border border-amber-300/20 bg-[#210D1F] shadow-lg hover:shadow-[0_16px_36px_rgba(229,193,88,0.25)] hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
              >
                {/* Photo with natural aspect ratio */}
                <div
                  className={`relative w-full ${
                    photo.aspectRatio === 'portrait'
                      ? 'aspect-[3/4]'
                      : photo.aspectRatio === 'landscape'
                      ? 'aspect-[4/3]'
                      : 'aspect-square'
                  }`}
                >
                  <SafeImage
                    src={photo.image}
                    alt={photo.title}
                    fallbackTitle={photo.title}
                    fallbackSubtitle={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase">
                          {photo.category}
                        </span>
                        <h4 className="text-sm font-serif font-medium text-white tracking-wide">
                          {photo.title}
                        </h4>
                      </div>
                      <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

