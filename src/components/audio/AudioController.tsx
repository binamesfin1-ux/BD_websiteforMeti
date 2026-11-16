import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, Music2, ChevronUp, ChevronDown } from 'lucide-react';
import { soundEngine } from './soundEffects';
import { siteConfig } from '../../data/siteConfig';

interface AudioControllerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioController: React.FC<AudioControllerProps> = ({ isPlaying, onTogglePlay }) => {
  const [volume, setVolume] = useState<number>(siteConfig.audio.defaultVolume);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    soundEngine.initBackgroundMusic(siteConfig.audio.backgroundMusic);
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
      soundEngine.setMuted(false);
    }
    soundEngine.setVolume(newVol);
  };

  const handleToggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundEngine.setMuted(nextMute);
    soundEngine.playClick();
  };

  const handleTogglePlay = () => {
    soundEngine.playClick();
    onTogglePlay();
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none"
      style={{ filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.45))' }}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 p-4 rounded-2xl border backdrop-blur-xl flex flex-col gap-3 min-w-[240px]"
            style={{
              backgroundColor: 'rgba(31, 14, 28, 0.88)',
              borderColor: 'rgba(229, 193, 88, 0.3)',
              color: '#FAF7F2',
            }}
          >
            {/* Track Info */}
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-300">
                <Music2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-serif font-medium text-amber-200 tracking-wide truncate">
                  {siteConfig.audio.trackTitle}
                </span>
                <span className="text-[11px] text-stone-400 truncate">
                  {siteConfig.audio.trackArtist}
                </span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleToggleMute}
                className="p-1.5 rounded-lg text-amber-200 hover:text-amber-100 hover:bg-white/5 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.02"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-stone-700/60 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Volume Slider"
              />

              <span className="text-[11px] font-mono text-stone-400 w-8 text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pill Controller */}
      <motion.div
        layout
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border backdrop-blur-xl shadow-2xl transition-all"
        style={{
          backgroundColor: 'rgba(27, 12, 24, 0.92)',
          borderColor: isPlaying ? 'rgba(229, 193, 88, 0.5)' : 'rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={handleTogglePlay}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-950 font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform"
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-stone-950 stroke-stone-950" />
          ) : (
            <Play className="w-4 h-4 fill-stone-950 stroke-stone-950 translate-x-0.5" />
          )}
        </button>

        {/* Animated Equalizer Visualizer */}
        <div
          onClick={handleTogglePlay}
          className="flex items-center gap-1 px-1.5 cursor-pointer py-1"
          title={isPlaying ? 'Music playing' : 'Music paused'}
        >
          {[0, 1, 2, 3].map((barIndex) => (
            <motion.span
              key={barIndex}
              animate={
                isPlaying && !isMuted
                  ? {
                      height: ['4px', '16px', '8px', '18px', '4px'],
                    }
                  : { height: '4px' }
              }
              transition={{
                duration: 1.1 + barIndex * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 rounded-full bg-amber-300/90 inline-block"
              style={{ minHeight: '4px', height: '4px' }}
            />
          ))}
        </div>

        {/* Quick Label */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-xs font-serif text-amber-200/90 hover:text-amber-100 pl-1 pr-1 transition-colors"
          title="Toggle Audio Settings"
          aria-label="Toggle Audio Settings"
        >
          <span className="hidden sm:inline">Music</span>
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </motion.div>
    </div>
  );
};

