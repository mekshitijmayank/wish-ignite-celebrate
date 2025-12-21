import { useState, useCallback } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { Fireworks } from './Fireworks';
import { Cake, PartyPopper } from 'lucide-react';

export const Hero = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  
  // Set target date to December 31st of current year at midnight
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 11, 31, 0, 0, 0); // Month is 0-indexed
  
  // If Dec 31 has passed, set to next year
  if (targetDate < new Date()) {
    targetDate.setFullYear(currentYear + 1);
  }

  const handleCountdownComplete = useCallback(() => {
    setShowFireworks(true);
    // Auto-hide fireworks after 15 seconds
    setTimeout(() => setShowFireworks(false), 15000);
  }, []);

  const triggerFireworks = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 10000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20" id="countdown">
      <Fireworks show={showFireworks} />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-16 w-12 h-12 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-gold-light/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <Cake className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          <span className="text-primary uppercase tracking-[0.4em] text-sm sm:text-base font-body">
            Countdown to Celebration
          </span>
          <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Happy <span className="text-gradient-gold">Birthday!</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-elegant italic mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          A celebration of love, joy, and beautiful memories
        </p>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <CountdownTimer 
            targetDate={targetDate} 
            onComplete={handleCountdownComplete} 
          />
        </div>

        <p className="text-muted-foreground mb-8 font-body animate-fade-up" style={{ animationDelay: '0.8s' }}>
          Until December 31st, {targetDate.getFullYear()}
        </p>

        {/* Preview Fireworks Button */}
        <button
          onClick={triggerFireworks}
          className="group relative px-8 py-4 bg-transparent border-2 border-primary text-foreground rounded-full font-body uppercase tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-up glow-gold"
          style={{ animationDelay: '1s' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <PartyPopper className="w-5 h-5" />
            Preview Fireworks
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
