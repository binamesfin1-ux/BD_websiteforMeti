import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Section01Opening } from './components/sections/Section01Opening';
import { Section02Hero } from './components/sections/Section02Hero';
import { Section03Memories } from './components/sections/Section03Memories';
import { Section04Heartfelt } from './components/sections/Section04Heartfelt';
import { Section05Timeline } from './components/sections/Section05Timeline';
import { Section06Gallery } from './components/sections/Section06Gallery';
import { Section07Letter } from './components/sections/Section07Letter';
import { Section08Wishes } from './components/sections/Section08Wishes';
import { Section09Cake } from './components/sections/Section09Cake';
import { Section10Closing } from './components/sections/Section10Closing';

import { Navbar } from './components/navigation/Navbar';
import { BackToTop } from './components/navigation/BackToTop';
import { AudioController } from './components/audio/AudioController';
import { ParticleCanvas } from './components/common/ParticleCanvas';
import { CursorGlow } from './components/common/CursorGlow';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Lightbox, LightboxItem } from './components/common/Lightbox';

import { soundEngine } from './components/audio/soundEffects';
import { siteConfig } from './data/siteConfig';
import { galleryData } from './data/gallery';

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Pre-initialize background music on mount
  React.useEffect(() => {
    soundEngine.initBackgroundMusic(siteConfig.audio.backgroundMusic);
  }, []);

  // Lightbox State
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

  const handleOpenSurprise = () => {
    setIsOpened(true);
    // Start background music gracefully now that user has interacted
    soundEngine.playBackgroundMusic();
    setIsMusicPlaying(true);
  };

  const handleToggleMusic = () => {
    if (isMusicPlaying) {
      soundEngine.pauseBackgroundMusic();
      setIsMusicPlaying(false);
    } else {
      soundEngine.playBackgroundMusic();
      setIsMusicPlaying(true);
    }
  };

  const handleScrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Lightbox from Section 3 (Memories)
  const handleMemoryPhotoClick = (_item: unknown, index: number) => {
    const items: LightboxItem[] = galleryData.photos.map((p) => ({
      image: p.image,
      title: p.title,
      caption: p.caption,
    }));
    setLightboxItems(items);
    setCurrentPhotoIndex(index % items.length);
  };

  // Open Lightbox from Section 6 (Gallery)
  const handleGalleryPhotoClick = (_photo: unknown, index: number) => {
    const items: LightboxItem[] = galleryData.photos.map((p) => ({
      image: p.image,
      title: p.title,
      caption: p.caption,
    }));
    setLightboxItems(items);
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="relative min-h-screen text-stone-100 bg-[#170C15] overflow-x-hidden selection:bg-amber-400/30 selection:text-amber-100">
      {/* Background Floating Particles & Golden Glow */}
      <ParticleCanvas />
      <CursorGlow />
      <ScrollProgress />

      {/* Section 1: The Opening Experience Overlay */}
      <AnimatePresence>
        {!isOpened && <Section01Opening onOpen={handleOpenSurprise} />}
      </AnimatePresence>

      {/* Main Experience Unveiled */}
      {isOpened && (
        <div className="relative z-20">
          <Navbar />

          <main className="space-y-12 sm:space-y-20">
            {/* Section 2: Hero */}
            <Section02Hero onExploreClick={handleScrollToMemories} />

            {/* Section 3: Memories */}
            <Section03Memories onPhotoClick={handleMemoryPhotoClick} />

            {/* Section 4: Words From The Heart */}
            <Section04Heartfelt />

            {/* Section 5: Timeline */}
            <Section05Timeline />

            {/* Section 6: Photo Gallery */}
            <Section06Gallery onPhotoClick={handleGalleryPhotoClick} />

            {/* Section 7: Personal Letter */}
            <Section07Letter />

            {/* Section 8: Wishes */}
            <Section08Wishes />

            {/* Section 9: Interactive Birthday Cake */}
            <Section09Cake />

            {/* Section 10: Final Surprise Tribute */}
            <Section10Closing onReplay={handleReplay} />
          </main>

          {/* Floating UI Controls */}
          <BackToTop />
          <AudioController
            isPlaying={isMusicPlaying}
            onTogglePlay={handleToggleMusic}
          />

          {/* Fullscreen Lightbox Modal */}
          <Lightbox
            items={lightboxItems}
            currentIndex={currentPhotoIndex}
            onClose={() => setCurrentPhotoIndex(null)}
            onNavigate={(newIdx) => setCurrentPhotoIndex(newIdx)}
          />
        </div>
      )}
    </div>
  );
};

export default App;

