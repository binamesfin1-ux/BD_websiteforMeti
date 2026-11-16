import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, PartyPopper, Flame, RotateCcw } from 'lucide-react';
import { cakeConfig } from '../../data/cake';
import { SectionHeader } from '../common/SectionHeader';
import { soundEngine } from '../audio/soundEffects';

export const Section09Cake: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [wishMade, setWishMade] = useState<boolean>(false);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);

  // Trigger rich celebration confetti
  const triggerConfetti = () => {
    // Left burst
    confetti({
      particleCount: 75,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#E5C158', '#F6D678', '#E4A198', '#FFFFFF', '#D4AF37'],
    });

    // Right burst
    confetti({
      particleCount: 75,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#E5C158', '#F6D678', '#E4A198', '#FFFFFF', '#D4AF37'],
    });

    // Center star shower
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.6 },
      shapes: ['star', 'circle'],
      colors: ['#FFE082', '#FFD54F', '#FF8A80', '#FFFFFF'],
    });
  };

  const handleMakeAWish = () => {
    soundEngine.playClick();
    setCandlesLit(false);
    setWishMade(true);
  };

  const handleCelebrate = () => {
    soundEngine.playCelebration();
    setHasCelebrated(true);
    triggerConfetti();

    // Secondary burst after 400ms for grand effect
    setTimeout(() => {
      triggerConfetti();
    }, 400);
  };

  const handleRelight = () => {
    soundEngine.playClick();
    setCandlesLit(true);
    setWishMade(false);
    setHasCelebrated(false);
  };

  return (
    <section id="cake" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[160px] pointer-events-none" />

      <SectionHeader
        subtitle={cakeConfig.sectionSubtitle}
        title={cakeConfig.sectionTitle}
        description={cakeConfig.description}
      />

      {/* Interactive Birthday Cake Illustration */}
      <div className="relative mt-8 sm:mt-12 flex flex-col items-center">
        {/* Animated Cake Container */}
        <div className="relative w-64 sm:w-80 h-72 sm:h-84 flex flex-col items-center justify-end select-none">
          {/* Candles Layer */}
          <div className="relative z-20 flex items-end justify-center gap-6 sm:gap-8 mb-[-4px]">
            {[0, 1, 2].map((candleIndex) => (
              <div key={candleIndex} className="relative flex flex-col items-center">
                {/* Flame */}
                <AnimatePresence>
                  {candlesLit && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 1.15, 0.95, 1.1, 1],
                        y: [0, -2, 1, -1, 0],
                        opacity: 1,
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.4 },
                      }}
                      transition={{
                        duration: 1.2 + candleIndex * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative w-4 h-7 rounded-full bg-gradient-to-t from-amber-500 via-amber-300 to-yellow-100 shadow-[0_0_18px_rgba(255,215,0,0.85)] filter blur-[0.3px]"
                    >
                      {/* Inner blue/white core */}
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-2.5 rounded-full bg-white/90" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Smoke when blown out */}
                <AnimatePresence>
                  {!candlesLit && (
                    <motion.div
                      initial={{ opacity: 0.8, y: 0, scale: 0.6 }}
                      animate={{ opacity: 0, y: -24, scale: 1.5 }}
                      transition={{ duration: 1.2 }}
                      className="w-2 h-4 rounded-full bg-stone-400/40 blur-[1px]"
                    />
                  )}
                </AnimatePresence>

                {/* Candle Wick */}
                <div className="w-[1.5px] h-2.5 bg-stone-800" />

                {/* Candle Body */}
                <div className="w-3.5 sm:w-4 h-12 sm:h-14 rounded-t-sm bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 border border-amber-400/30 shadow-sm relative overflow-hidden">
                  {/* Subtle golden spiral stripe */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg, #B8860B, #B8860B 2px, transparent 2px, transparent 6px)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Top Cake Tier */}
          <div className="relative z-10 w-44 sm:w-52 h-20 rounded-t-3xl bg-gradient-to-r from-[#D89F68] via-[#F4D2A6] to-[#D89F68] border-t-2 border-x-2 border-amber-200/50 shadow-md flex items-start justify-center overflow-hidden">
            {/* Dripping Cream Frosting */}
            <div className="w-full h-7 bg-[#FFF8EC] rounded-b-2xl shadow-sm border-b border-amber-200/40 relative">
              <div className="flex justify-around items-center h-full px-2">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-rose-300/80 inline-block" />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Cake Tier */}
          <div className="relative z-10 w-60 sm:w-72 h-24 rounded-t-3xl bg-gradient-to-r from-[#C2824D] via-[#E2B786] to-[#C2824D] border-t-2 border-x-2 border-amber-200/40 shadow-xl flex flex-col justify-between overflow-hidden">
            {/* Scalloped middle frosting */}
            <div className="w-full h-6 bg-[#FFF8EC] rounded-b-xl shadow-sm border-b border-amber-200/40 flex justify-around items-center px-4">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400/90 inline-block" />
              ))}
            </div>

            {/* Decorative bottom piped pearl trim */}
            <div className="w-full py-1.5 px-3 flex justify-around items-center bg-[#512242]/40">
              <span className="text-[11px] font-serif tracking-widest uppercase text-amber-100/90">
                Happy Birthday
              </span>
            </div>
          </div>

          {/* Golden Cake Pedestal / Plate */}
          <div className="relative z-10 w-68 sm:w-80 h-4 rounded-full bg-gradient-to-r from-[#B8860B] via-[#F5D889] to-[#996515] border border-amber-200/60 shadow-[0_12px_28px_rgba(0,0,0,0.7)]" />
        </div>

        {/* Prompt Instruction */}
        <p className="mt-8 text-xs sm:text-sm text-stone-300/80 font-serif italic max-w-md">
          {candlesLit ? cakeConfig.initialPrompt : cakeConfig.candlesBlownPrompt}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          {candlesLit ? (
            <button
              type="button"
              onClick={handleMakeAWish}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-serif tracking-widest uppercase font-semibold text-stone-950 transition-all shadow-[0_0_24px_rgba(229,193,88,0.4)] hover:shadow-[0_0_36px_rgba(229,193,88,0.7)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #FFF1CD 0%, #E5C158 50%, #C89932 100%)',
              }}
            >
              <Flame className="w-4 h-4 text-amber-900 fill-amber-900" />
              <span>{cakeConfig.makeAWishButtonText}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRelight}
              className="px-5 py-2.5 rounded-full text-xs font-serif tracking-wider uppercase text-amber-200 bg-white/5 border border-amber-300/30 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{cakeConfig.resetButtonText}</span>
            </button>
          )}

          {/* Celebrate Button */}
          <button
            type="button"
            onClick={handleCelebrate}
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-serif tracking-widest uppercase font-semibold text-white transition-all shadow-[0_0_24px_rgba(228,161,152,0.3)] hover:shadow-[0_0_36px_rgba(228,161,152,0.6)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #7C2462 0%, #A33A7E 50%, #BD4B93 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <PartyPopper className="w-4 h-4" />
            <span>{cakeConfig.celebrateButtonText}</span>
          </button>
        </div>

        {/* Revealed Secret Wish Message */}
        <AnimatePresence>
          {wishMade && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="mt-8 p-6 rounded-2xl bg-[#2D1429] border border-amber-400/40 shadow-xl max-w-xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-amber-300 mb-2">
                <Sparkles className="w-4 h-4" />
                <h4 className="text-sm font-serif font-semibold tracking-wide">
                  {cakeConfig.secretWishTitle}
                </h4>
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-stone-200/90 font-serif leading-relaxed italic">
                "{cakeConfig.secretWishMessage}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Celebration Greeting Banner */}
        <AnimatePresence>
          {hasCelebrated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-6 p-6 rounded-3xl bg-gradient-to-r from-amber-500/20 via-rose-500/25 to-amber-500/20 border border-amber-300/40 shadow-2xl max-w-lg mx-auto"
            >
              <h3 className="text-2xl sm:text-3xl font-serif text-amber-100 font-normal tracking-wide">
                {cakeConfig.celebrationTitle}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-200/90 font-sans leading-relaxed">
                {cakeConfig.celebrationBanner}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

