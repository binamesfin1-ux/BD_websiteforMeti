import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Trophy,
  HeartPulse,
  Compass,
  Sparkles,
  Camera,
  Flower2,
  Heart,
  CheckCircle2,
} from 'lucide-react';
import { wishesData, BirthdayWish } from '../../data/wishes';
import { SectionHeader } from '../common/SectionHeader';
import { soundEngine } from '../audio/soundEffects';

const iconMap: Record<string, React.ReactNode> = {
  Sun: <Sun className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
  Flower2: <Flower2 className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
};

export const Section08Wishes: React.FC = () => {
  const [unlockedWishIds, setUnlockedWishIds] = useState<string[]>([]);
  const [activeWish, setActiveWish] = useState<BirthdayWish | null>(null);

  const handleWishClick = (wish: BirthdayWish) => {
    soundEngine.playClick();
    if (!unlockedWishIds.includes(wish.id)) {
      setUnlockedWishIds((prev) => [...prev, wish.id]);
    }
    setActiveWish(wish);
  };

  return (
    <section id="wishes" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

      <SectionHeader
        subtitle={wishesData.sectionSubtitle}
        title={wishesData.sectionTitle}
        description={wishesData.description}
      />

      {/* Progress Counter & Instruction */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-2xl bg-white/5 border border-amber-300/20 backdrop-blur-md">
        <span className="text-xs sm:text-sm text-stone-300 font-serif italic text-center sm:text-left">
          {wishesData.instructions}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-amber-300 uppercase tracking-wider">
            Wishes Unveiled:
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 font-mono text-xs font-bold text-amber-200">
            {unlockedWishIds.length} / {wishesData.wishes.length}
          </span>
        </div>
      </div>

      {/* Constellation Grid of Celestial Wish Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {wishesData.wishes.map((wish, index) => {
          const isUnlocked = unlockedWishIds.includes(wish.id);
          const isSelected = activeWish?.id === wish.id;

          return (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => handleWishClick(wish)}
              className={`relative p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between select-none ${
                isUnlocked
                  ? 'bg-gradient-to-br from-[#2c1328] to-[#1c0a1a] border-amber-400/50 shadow-[0_8px_24px_rgba(229,193,88,0.2)]'
                  : 'bg-[#1e0c1c]/70 border-white/10 hover:border-amber-300/30'
              } ${isSelected ? 'ring-2 ring-amber-400/80 shadow-[0_0_25px_rgba(229,193,88,0.35)]' : ''}`}
            >
              <div>
                {/* Header: Icon & Constellation Name */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-xl border transition-colors ${
                      isUnlocked
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400/30'
                        : 'bg-white/5 text-stone-400 border-white/10'
                    }`}
                  >
                    {iconMap[wish.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>

                  {isUnlocked && (
                    <span className="text-amber-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300/70 block mb-1">
                  {wish.constellation}
                </span>

                <h3 className="text-base font-serif font-medium text-stone-100 tracking-wide mb-2">
                  {wish.theme}
                </h3>

                <p className="text-xs text-amber-100/90 font-serif italic mb-3">
                  "{wish.title}"
                </p>
              </div>

              {/* Reveal Prompt / Unlocked Blessing preview */}
              <div className="pt-3 border-t border-white/10">
                {isUnlocked ? (
                  <p className="text-xs text-stone-300/80 font-sans leading-relaxed line-clamp-3">
                    {wish.blessing}
                  </p>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-serif text-amber-300/60 uppercase tracking-widest group-hover:text-amber-200">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Tap to unlock
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal / Highlight for Active Wish */}
      <AnimatePresence>
        {activeWish && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2B1227] via-[#3A1833] to-[#2B1227] border border-amber-400/40 shadow-2xl text-center relative overflow-hidden"
          >
            {/* Shimmer aura */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,193,88,0.12)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="p-3 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-300 mb-3 shadow-[0_0_16px_rgba(229,193,88,0.3)]">
                {iconMap[activeWish.iconName] || <Sparkles className="w-6 h-6" />}
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-1">
                {activeWish.constellation} · {activeWish.theme}
              </span>

              <h3 className="text-xl sm:text-2xl font-serif text-amber-100 font-normal mb-3">
                {activeWish.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-200/90 font-serif leading-relaxed italic max-w-xl">
                "{activeWish.blessing}"
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

