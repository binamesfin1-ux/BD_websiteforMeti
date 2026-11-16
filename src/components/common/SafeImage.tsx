import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Photograph',
  fallbackTitle = 'Her Photograph',
  fallbackSubtitle = 'A cherished memory',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Fallback Artwork when image is missing or failed to load */}
      {hasError ? (
        <div
          className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#2A1326] via-[#1E0C1B] to-[#361730] border border-amber-400/25 ${className}`}
          style={{ minHeight: '220px' }}
        >
          {/* Subtle celestial background stars pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#E5C158_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Golden icon circle */}
          <div className="relative mb-3 w-12 h-12 rounded-full border border-amber-300/40 bg-amber-400/10 flex items-center justify-center text-amber-200 shadow-inner">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>

          <h4 className="relative text-sm font-serif font-medium text-amber-100 tracking-wide mb-1">
            {fallbackTitle}
          </h4>
          <p className="relative text-xs text-stone-300/80 font-sans max-w-[200px] leading-relaxed">
            {fallbackSubtitle}
          </p>

          <span className="relative mt-3 inline-flex items-center gap-1 text-[10px] tracking-wider uppercase font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-200/80">
            <ImageIcon className="w-3 h-3" />
            Add Photo in public/images
          </span>
        </div>
      ) : (
        <>
          {/* Gentle shimmer skeleton placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-stone-800/30 to-stone-900/40 animate-pulse" />
          )}

          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            className={`transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${className}`}
            {...props}
          />
        </>
      )}
    </div>
  );
};

