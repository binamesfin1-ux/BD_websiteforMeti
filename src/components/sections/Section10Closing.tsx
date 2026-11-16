import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowUp } from 'lucide-react';
import { closingConfig } from '../../data/closing';
import { siteConfig } from '../../data/siteConfig';
import { SafeImage } from '../common/SafeImage';
import { soundEngine } from '../audio/soundEffects';

interface Section10ClosingProps {
  onReplay: () => void;
}

export const Section10Closing: React.FC<Section10ClosingProps> = ({ onReplay }) => {
  const handleReplayClick = () => {
    soundEngine.playClick();
    onReplay();
  };

  return (
    <section
      id="closing"
      className="relative min-h-screen py-28 sm:py-36 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background ambient spotlight circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-rose-500/10 blur-[140px] pointer-events-none" />

      {/* Floating Constellation Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#E5C158_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Intro Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 font-serif text-xs tracking-widest uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{closingConfig.introSubtext}</span>
        </motion.div>

        {/* Main Emotional Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-stone-100 tracking-tight leading-tight"
        >
          Happy Birthday,{' '}
          <span className="font-normal bg-gradient-to-r from-[#FFF0C8] via-[#E5C158] to-[#F5D889] bg-clip-text text-transparent">
            {siteConfig.sisterName}.
          </span>
        </motion.h2>

        {/* Supporting Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-base sm:text-xl font-serif italic text-amber-100/90 max-w-xl leading-relaxed"
        >
          "{closingConfig.supportingQuote}"
        </motion.p>

        {/* Closing Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="relative mt-10 mb-10 group"
        >
          <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-rose-500/20 to-amber-300/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative w-56 sm:w-64 aspect-square rounded-2xl p-2 bg-gradient-to-b from-amber-400/40 via-amber-300/20 to-amber-500/40 border border-amber-300/50 shadow-2xl backdrop-blur-md">
            <div className="w-full h-full rounded-xl overflow-hidden bg-[#241021]">
              <SafeImage
                src={closingConfig.closingPhoto}
                alt={`${siteConfig.sisterName}'s Closing Portrait`}
                fallbackTitle={`${siteConfig.sisterName}'s Light`}
                fallbackSubtitle="Always remembered, always loved"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Reflection Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4 max-w-xl text-xs sm:text-sm text-stone-300/85 font-sans leading-relaxed"
        >
          {closingConfig.reflectionParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </motion.div>

        {/* Final Sibling Signature Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-serif italic text-amber-200">
            <span>{closingConfig.signatureNote}</span>
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          </div>

          <span className="text-[11px] font-mono tracking-widest text-stone-400 uppercase mt-2">
            {closingConfig.sharePrompt}
          </span>
        </motion.div>

        {/* Replay Experience Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <button
            type="button"
            onClick={handleReplayClick}
            className="group px-7 py-3 rounded-full text-xs font-serif tracking-widest uppercase font-semibold text-amber-200 bg-white/5 border border-amber-300/40 hover:bg-amber-400/15 hover:border-amber-400 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4 text-amber-300 group-hover:-translate-y-0.5 transition-transform" />
            <span>{closingConfig.replayButtonText}</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Footer */}
      <footer className="relative z-10 mt-20 pt-8 border-t border-white/10 w-full max-w-4xl text-center text-[11px] font-mono text-stone-400">
        <p>A Little Universe of You · Created with love for {siteConfig.sisterName}</p>
      </footer>
    </section>
  );
};

