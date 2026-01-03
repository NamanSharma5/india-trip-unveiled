import { useState } from 'react';
import MusicPlayer from './MusicPlayer';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "India",
  subtitle = "The adventure awaits",
  backgroundImage,
}: HeroSectionProps) => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const scrollHintDelayMs = 3000;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt="India landscape"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-warm-brown via-deep-red to-foreground" />
        )}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-cream/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Naman and the Sharma family invite you to
        </p>
        <h1
          className="font-display text-7xl md:text-9xl lg:text-[10rem] text-cream font-bold mb-6 leading-none animate-fade-up"
          style={{ animationDelay: '150ms' }}
        >
          {title}
        </h1>
        <p
          className="font-display text-2xl md:text-3xl text-cream/90 italic mb-12 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          {subtitle}
        </p>
        <div
          className="animate-fade-up"
          style={{ animationDelay: '450ms' }}
        >
          <MusicPlayer
            onStart={() => {
              setTimeout(() => setShowScrollHint(true), scrollHintDelayMs);
            }}
          />
        </div>
      </div>

      {/* Scroll hint */}
      {showScrollHint && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in">
          <div className="flex flex-col items-center gap-2 text-cream/60">
            <span className="font-sans text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-cream/60 to-transparent animate-pulse" />
          </div>
          <div className="animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
              <div className="w-1.5 h-2.5 bg-cream/70 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
