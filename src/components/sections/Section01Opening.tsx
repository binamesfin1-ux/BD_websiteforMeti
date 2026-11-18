import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { soundEngine } from '../audio/soundEffects';

interface Section01OpeningProps {
  onOpen: () => void;
}

export const Section01Opening: React.FC<Section01OpeningProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play magical harp arpeggio
    soundEngine.playOpening();

    // Immediately trigger background music while user interaction gesture is active!
    soundEngine.playBackgroundMusic();

    // After animation completes, unveil the main experience
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-b from-[#140812] via-[#1c0d1a] to-[#251022] overflow-hidden select-none"
      >
        {/* Soft atmospheric ambient glow lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-500/10 blur-[120px] pointer-events-none" />

        {/* Floating stardust motes */}
        <div className="absolute inset-0 bg-[radial-gradient(#E5C158_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

        {/* Centerpiece Container */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full px-4">
          {/* Introductory Prompt */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-300 font-serif text-xs tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              A Special Dedication
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-100 font-light tracking-wide leading-tight">
              {siteConfig.openingPrompt}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-amber-200/70 font-sans tracking-wide">
              {siteConfig.openingSubPrompt}
            </p>
          </motion.div>

          {/* 3D Animated Luxury Envelope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-72 sm:w-80 h-48 sm:h-52 cursor-pointer group"
            onClick={handleOpenClick}
          >
            {/* Envelope Back Plate */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D1226] to-[#1E0B1A] border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Internal Letter Peek */}
              <motion.div
                animate={isOpening ? { y: -80, opacity: 1 } : { y: 0, opacity: 0.8 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-x-4 top-2 h-36 rounded-xl bg-[#FAF5EB] p-4 flex flex-col items-center justify-center text-stone-800 shadow-md border border-amber-200"
              >
                <span className="text-[10px] font-serif uppercase tracking-widest text-amber-800/80 mb-1">
                  Private Birthday Message
                </span>
                <span className="text-sm font-serif font-bold text-stone-900 tracking-wide">
                  Dearest {siteConfig.sisterName}
                </span>
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mt-2 animate-bounce" />
              </motion.div>
            </div>

            {/* Envelope Pocket Front (Triangular folds) */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
              {/* Bottom fold */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#250e20] to-[#34152d] border-t border-amber-400/20"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 30%, 100% 100%)',
                }}
              />
              {/* Left fold */}
              <div
                className="absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#210c1c] to-[#2c1226]/80"
                style={{
                  clipPath: 'polygon(0% 0%, 0% 100%, 75% 50%)',
                }}
              />
              {/* Right fold */}
              <div
                className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#210c1c] to-[#2c1226]/80"
                style={{
                  clipPath: 'polygon(100% 0%, 100% 100%, 25% 50%)',
                }}
              />
            </div>

            {/* Envelope Flap (Opens upwards) */}
            <motion.div
              animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 20 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3a1832] to-[#280e22] border-b border-amber-400/40 rounded-t-2xl shadow-md"
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              }}
            />

            {/* Gold Wax Seal / Center Emblem */}
            <motion.div
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 border-2 border-amber-100 flex flex-col items-center justify-center text-stone-950 font-serif font-bold shadow-[0_4px_16px_rgba(229,193,88,0.6)] group-hover:scale-110 transition-transform"
            >
              <span className="text-[9px] tracking-widest font-mono text-stone-900 leading-none">
                {siteConfig.sisterName[0]}
              </span>
              <Heart className="w-3.5 h-3.5 fill-stone-950 stroke-stone-950 mt-0.5" />
            </motion.div>

            {/* Recipient Ribbon Label */}
            <div className="absolute -bottom-4 inset-x-6 z-20 py-1.5 px-4 rounded-full bg-[#1b0b18]/90 border border-amber-400/40 backdrop-blur-md shadow-lg text-center">
              <span className="text-[11px] font-serif tracking-widest text-amber-200">
                {siteConfig.envelopeRecipient}
              </span>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <button
              type="button"
              onClick={handleOpenClick}
              disabled={isOpening}
              className="relative group px-8 py-3.5 rounded-full font-serif text-sm tracking-widest uppercase font-semibold text-stone-950 transition-all shadow-[0_0_28px_rgba(229,193,88,0.4)] hover:shadow-[0_0_40px_rgba(229,193,88,0.7)] hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #F9E7B3 0%, #E5C158 50%, #C89932 100%)',
              }}
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {isOpening ? 'Unveiling...' : siteConfig.openingButtonText}
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
