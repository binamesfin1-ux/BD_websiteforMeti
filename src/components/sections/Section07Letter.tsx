import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Calendar } from 'lucide-react';
import { letterData } from '../../data/letter';
import { SectionHeader } from '../common/SectionHeader';

export const Section07Letter: React.FC = () => {
  return (
    <section id="letter" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-500/5 blur-[160px] pointer-events-none" />

      <SectionHeader
        subtitle={letterData.sectionSubtitle}
        title={letterData.sectionTitle}
      />

      {/* Realistic Luxurious Stationery Paper Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative rounded-3xl p-6 sm:p-12 md:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-amber-300/30 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at top left, #FAF5EB 0%, #F5ECDD 60%, #EFE1CC 100%)',
          color: '#261622',
        }}
      >
        {/* Subtle stationery paper watermark lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #996515 31px, #996515 32px)',
          }}
        />

        {/* Decorative corner borders */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-800/25 rounded-tl-xl pointer-events-none" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-800/25 rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-800/25 rounded-bl-xl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-800/25 rounded-br-xl pointer-events-none" />

        {/* Top Header of the Letter */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 sm:pb-8 border-b border-stone-400/30 gap-4">
          <div className="flex items-center gap-2.5 text-amber-900/80">
            <Feather className="w-5 h-5 text-amber-800" />
            <span className="font-serif italic text-sm tracking-wider uppercase">
              {letterData.paperHeading}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-stone-600/90 uppercase bg-amber-900/5 px-3 py-1 rounded-full border border-amber-800/15">
            <Calendar className="w-3.5 h-3.5 text-amber-800" />
            <span>{letterData.dateBadge}</span>
          </div>
        </div>

        {/* Salutation */}
        <div className="relative mt-8 sm:mt-10 mb-6">
          <h3
            className="text-3xl sm:text-4xl text-amber-950 font-normal tracking-wide"
            style={{ fontFamily: "'Caveat', cursive, serif" }}
          >
            {letterData.salutation}
          </h3>
        </div>

        {/* Letter Paragraphs */}
        <div className="relative space-y-6 sm:space-y-7 text-sm sm:text-base md:text-[17px] text-stone-800 font-serif leading-relaxed sm:leading-loose">
          {letterData.paragraphs.map((p, idx) => (
            <p key={idx} className="tracking-wide">
              {p}
            </p>
          ))}
        </div>

        {/* Sign-off & Handwritten Signature */}
        <div className="relative mt-12 sm:mt-16 pt-8 border-t border-stone-400/30 flex flex-col items-end">
          <span className="text-xs sm:text-sm font-serif italic text-stone-700">
            {letterData.closing}
          </span>
          <div
            className="mt-2 text-3xl sm:text-4xl text-amber-900 font-normal flex items-center gap-2"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            <span>{letterData.signature}</span>
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600 inline" />
          </div>

          {/* Postscript note */}
          {letterData.postScript && (
            <p
              className="mt-6 text-xs sm:text-sm text-stone-600 italic font-serif text-right max-w-md"
              style={{ fontFamily: "'Caveat', cursive, serif" }}
            >
              {letterData.postScript}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

