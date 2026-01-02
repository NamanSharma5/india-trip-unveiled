import { Heart } from 'lucide-react';

interface FooterSectionProps {
  message?: string;
}

const FooterSection = ({ 
  message = "Can't wait to explore India with you!" 
}: FooterSectionProps) => {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center bg-foreground overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-8">
          <Heart className="w-8 h-8 text-primary" fill="currentColor" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-cream font-semibold mb-6">
          {message}
        </h2>
        <p className="font-sans text-cream/60 text-sm tracking-widest uppercase">
          See you soon
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
