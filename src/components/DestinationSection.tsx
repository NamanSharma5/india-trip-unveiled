import { useEffect, useRef, useState } from 'react';

interface DestinationSectionProps {
  title: string;
  subtitle: string;
  description: string;
  dates?: string;
  imageSrc?: string;
  videoSrc?: string;
  isFirst?: boolean;
}

const DestinationSection = ({
  title,
  subtitle,
  description,
  dates,
  imageSrc,
  videoSrc,
  isFirst = false,
}: DestinationSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-end justify-center overflow-hidden"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-secondary" />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 md:pb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {dates && (
          <p
            className="text-cream/80 font-sans text-sm tracking-widest uppercase mb-3"
            style={{ transitionDelay: '100ms' }}
          >
            {dates}
          </p>
        )}
        <p
          className="text-primary font-sans font-medium text-lg md:text-xl mb-2"
          style={{ transitionDelay: '200ms' }}
        >
          {subtitle}
        </p>
        <h2
          className="font-display text-4xl md:text-6xl lg:text-7xl text-cream font-semibold mb-6 leading-tight"
          style={{ transitionDelay: '300ms' }}
        >
          {title}
        </h2>
        <p
          className="text-cream/90 font-sans text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ transitionDelay: '400ms' }}
        >
          {description}
        </p>
      </div>

      {/* Scroll indicator for first section */}
      {isFirst && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-cream/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-cream/70 rounded-full animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
};

export default DestinationSection;
