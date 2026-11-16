import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { messagesData } from '../../data/messages';
import { SectionHeader } from '../common/SectionHeader';

export const Section04Heartfelt: React.FC = () => {
  return (
    <section id="messages" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background soft ambient blush */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-rose-500/5 blur-[140px] pointer-events-none" />

      <SectionHeader
        subtitle={messagesData.sectionSubtitle}
        title={messagesData.sectionTitle}
        description={messagesData.description}
      />

      {/* Grid of Heartfelt Message Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {messagesData.cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#271124] to-[#1d0b1a] border border-amber-300/20 shadow-lg hover:shadow-[0_16px_36px_rgba(229,193,88,0.15)] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top row: Number and Quote Icon */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs tracking-widest text-amber-300/70 uppercase">
                Note {card.number}
              </span>
              <div className="p-2 rounded-full bg-amber-400/10 text-amber-300/80 group-hover:text-amber-200 group-hover:scale-110 transition-all">
                <Quote className="w-4 h-4 rotate-180" />
              </div>
            </div>

            {/* Core Quote */}
            <div className="my-5">
              <h3 className="text-lg sm:text-xl font-serif font-normal text-stone-100 leading-snug tracking-wide group-hover:text-amber-100 transition-colors">
                "{card.quote}"
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-stone-300/80 font-sans leading-relaxed">
                {card.reflection}
              </p>
            </div>

            {/* Bottom tag */}
            <div className="pt-4 flex items-center gap-1.5 text-[11px] font-serif text-amber-300/60 uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-amber-400/80" />
              <span>{card.highlight}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

