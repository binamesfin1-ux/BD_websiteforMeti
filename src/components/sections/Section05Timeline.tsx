import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { timelineData, TimelineEntry } from '../../data/timeline';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { soundEngine } from '../audio/soundEffects';

interface Section05TimelineProps {
  onTimelinePhotoClick?: (entry: TimelineEntry) => void;
}

export const Section05Timeline: React.FC<Section05TimelineProps> = ({ onTimelinePhotoClick }) => {
  const [activeId, setActiveId] = useState<string>(timelineData.entries[0]?.id || '');

  return (
    <section id="timeline" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader
        subtitle={timelineData.sectionSubtitle}
        title={timelineData.sectionTitle}
        description={timelineData.description}
      />

      {/* Vertical Timeline Container */}
      <div className="relative mt-12 sm:mt-16">
        {/* Central glowing vertical timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-400/20 via-amber-400/50 to-amber-400/10" />

        <div className="space-y-12 sm:space-y-16">
          {timelineData.entries.map((entry, index) => {
            const isEven = index % 2 === 0;
            const isSelected = activeId === entry.id;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveId(entry.id);
                }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center cursor-pointer ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Milestone Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-left' : 'sm:text-right'
                  }`}
                >
                  <div
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-md ${
                      isSelected
                        ? 'bg-[#291325] border-amber-400/60 shadow-[0_12px_32px_rgba(229,193,88,0.2)]'
                        : 'bg-[#200D1E]/90 border-amber-300/20 hover:border-amber-300/40'
                    }`}
                  >
                    {/* Era badge */}
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-amber-300 uppercase mb-2 ${
                        isEven ? 'sm:justify-start' : 'sm:justify-end'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{entry.era}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-medium text-amber-100 tracking-wide mb-2">
                      {entry.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-300/80 font-sans leading-relaxed">
                      {entry.memory}
                    </p>

                    {/* Tag */}
                    <div
                      className={`mt-4 pt-3 border-t border-white/10 flex items-center gap-1 text-[11px] font-serif text-amber-300/70 tracking-widest uppercase ${
                        isEven ? 'sm:justify-start' : 'sm:justify-end'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{entry.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Center Node Star Indicator */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    animate={
                      isSelected
                        ? { scale: [1, 1.25, 1], rotate: [0, 90, 180] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors shadow-lg ${
                      isSelected
                        ? 'bg-amber-400 border-amber-100 text-stone-950 shadow-[0_0_16px_rgba(229,193,88,0.8)]'
                        : 'bg-[#180816] border-amber-400/50 text-amber-300 hover:scale-110'
                    }`}
                  >
                    <span className="text-xs font-serif font-bold">✦</span>
                  </motion.div>
                </div>

                {/* Photo Thumbnail on Opposite Side */}
                <div
                  className={`hidden sm:block sm:w-[calc(50%-2.5rem)] ${
                    isEven ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onTimelinePhotoClick) {
                        soundEngine.playClick();
                        onTimelinePhotoClick(entry);
                      }
                    }}
                    className="relative w-48 aspect-video rounded-xl overflow-hidden border border-amber-300/30 shadow-lg hover:scale-105 transition-transform duration-300 inline-block bg-black/40"
                  >
                    <SafeImage
                      src={entry.photo}
                      alt={entry.title}
                      fallbackTitle={entry.title}
                      fallbackSubtitle={entry.era}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

