import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SafeImage } from '../common/SafeImage';
import { soundEngine } from '../audio/soundEffects';

interface Section02HeroProps {
  onExploreClick: () => void;
}

export const Section02Hero: React.FC<Section02HeroProps> = ({ onExploreClick }) => {
  const handleExplore = () => {
    soundEngine.playClick();
    onExploreClick();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden text-center"
    >
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />

      {/* Floating Constellation Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5C158_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Date / Occasion pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 font-serif text-xs tracking-widest uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>A Celebration of You · {siteConfig.birthDate}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-stone-100 tracking-tight leading-[1.1] max-w-3xl"
        >
          HAPPY BIRTHDAY,{' '}
          <span className="font-normal bg-gradient-to-r from-[#FFF0C8] via-[#E5C158] to-[#F5D889] bg-clip-text text-transparent drop-shadow-sm">
            {siteConfig.sisterName.toUpperCase()}
          </span>
        </motion.h1>

        {/* Supporting Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-amber-100/80 font-serif font-light max-w-2xl leading-relaxed"
        >
          {siteConfig.heroSubGreeting}
        </motion.p>

        {/* Sister's Main Hero Visual Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="relative mt-8 sm:mt-10 group"
        >
          {/* Glowing Aura Rings */}
          <div className="absolute -inset-2 sm:-inset-3 rounded-[2rem] bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-amber-300/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Main Photo Frame */}
          <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-amber-400/40 via-amber-300/20 to-amber-500/40 border border-amber-300/50 shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md">
            <div className="w-full h-full rounded-[1.25rem] overflow-hidden bg-[#241021]">
              <SafeImage
                src={siteConfig.heroPhotograph}
                alt={`${siteConfig.sisterName}'s Birthday Portrait`}
                fallbackTitle={`${siteConfig.sisterName}'s Portrait`}
                fallbackSubtitle="Her brightest smile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Birthday Badge Accent */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 px-3.5 py-1.5 rounded-full bg-[#1b0b18]/95 border border-amber-400/50 backdrop-blur-md shadow-xl flex items-center gap-1.5 text-xs font-serif text-amber-200"
            >
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Made with Love</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-xs sm:text-sm text-stone-300/70 font-sans max-w-lg leading-relaxed"
        >
          {siteConfig.heroTagline}
        </motion.p>

        {/* Action Button: "Explore Your Little Universe" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <button
            type="button"
            onClick={handleExplore}
            className="group px-7 py-3 rounded-full text-xs sm:text-sm font-serif tracking-widest uppercase font-semibold text-stone-950 transition-all shadow-[0_0_24px_rgba(229,193,88,0.35)] hover:shadow-[0_0_36px_rgba(229,193,88,0.6)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5"
            style={{
              background: 'linear-gradient(135deg, #FDF0C8 0%, #E5C158 50%, #C99A30 100%)',
            }}
          >
            <span>Explore Your Little Universe</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

