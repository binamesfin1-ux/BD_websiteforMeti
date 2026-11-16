import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ZoomIn } from 'lucide-react';
import { memoriesData, MemoryItem } from '../../data/memories';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { soundEngine } from '../audio/soundEffects';

interface Section03MemoriesProps {
  onPhotoClick: (item: MemoryItem, index: number) => void;
}

export const Section03Memories: React.FC<Section03MemoriesProps> = ({ onPhotoClick }) => {
  return (
    <section id="memories" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        subtitle={memoriesData.sectionSubtitle}
        title={memoriesData.sectionTitle}
        description={memoriesData.description}
      />

      {/* Polaroid / Editorial Asymmetric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {memoriesData.memories.map((mem, index) => {
          return (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotate: 0,
                y: -6,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              onClick={() => {
                soundEngine.playClick();
                onPhotoClick(mem, index);
              }}
              style={{
                transform: `rotate(${mem.rotation ?? 0}deg)`,
              }}
              className="group relative cursor-pointer rounded-2xl bg-[#220E20] border border-amber-300/25 p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(229,193,88,0.25)] hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Polaroid Photo Frame */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40 border border-white/5">
                <SafeImage
                  src={mem.image}
                  alt={mem.title}
                  fallbackTitle={mem.title}
                  fallbackSubtitle={mem.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-amber-200">
                  <div className="p-2.5 rounded-full bg-black/60 border border-amber-300/40 backdrop-blur-sm">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Memory Details */}
              <div className="pt-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-amber-100 tracking-wide group-hover:text-amber-200 transition-colors">
                    {mem.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-300/80 font-sans leading-relaxed line-clamp-3">
                    {mem.caption}
                  </p>
                </div>

                {/* Metadata tags */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-amber-300/70">
                  {mem.date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      {mem.date}
                    </span>
                  )}
                  {mem.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      {mem.location}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

