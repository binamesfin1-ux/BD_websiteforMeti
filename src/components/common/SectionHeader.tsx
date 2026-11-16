import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}
    >
      {/* Subtitle / Chapter indicator */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-300 font-serif text-xs tracking-widest uppercase mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
        {subtitle}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-stone-100 tracking-tight leading-tight">
        {title}
      </h2>

      {/* Delicate Golden Divider */}
      <div
        className={`flex items-center gap-3 my-4 ${
          centered ? 'justify-center' : 'justify-start'
        }`}
      >
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-400/60" />
        <span className="text-amber-300 text-xs select-none">✦</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-400/60" />
      </div>

      {/* Optional Description */}
      {description && (
        <p className="text-sm sm:text-base text-stone-300/80 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

