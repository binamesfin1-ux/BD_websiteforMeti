import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { soundEngine } from '../audio/soundEffects';

export interface LightboxItem {
  image: string;
  title: string;
  caption?: string;
  date?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && items.length > 0;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    soundEngine.playClick();
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    soundEngine.playClick();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || currentIndex === null) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-2xl bg-black/85 select-none"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 text-stone-200 hover:text-white hover:bg-white/20 transition-colors border border-white/15"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-20 text-xs font-mono tracking-widest text-amber-200/90 px-3 py-1.5 rounded-full bg-black/40 border border-white/10">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/10 text-stone-200 hover:text-white hover:bg-white/25 transition-all border border-white/15 shadow-xl hover:scale-105 active:scale-95"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Modal Content Box */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl bg-[#1c0d1a]/95 p-3 sm:p-5"
        >
          {/* Image Container */}
          <div className="relative w-full max-h-[60vh] sm:max-h-[68vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
            <SafeImage
              src={currentItem.image}
              alt={currentItem.title}
              fallbackTitle={currentItem.title}
              fallbackSubtitle={currentItem.caption}
              className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
              containerClassName="flex items-center justify-center"
            />
          </div>

          {/* Caption & Metadata */}
          <div className="w-full pt-4 pb-1 px-2 text-center flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-serif font-medium text-amber-100 tracking-wide">
              {currentItem.title}
            </h3>
            {currentItem.caption && (
              <p className="mt-1 text-xs sm:text-sm text-stone-300/85 max-w-xl font-sans leading-relaxed">
                {currentItem.caption}
              </p>
            )}
            {currentItem.date && (
              <span className="mt-2 text-[11px] font-mono tracking-wider text-amber-300/70 uppercase">
                {currentItem.date}
              </span>
            )}
          </div>
        </motion.div>

        {/* Next Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/10 text-stone-200 hover:text-white hover:bg-white/25 transition-all border border-white/15 shadow-xl hover:scale-105 active:scale-95"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

