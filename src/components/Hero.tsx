import { useState, useCallback, useRef, useEffect } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { Fireworks } from './Fireworks';
import { Cake, PartyPopper, Heart, Volume2, VolumeX } from 'lucide-react';

export const Hero = ({ onCountdownComplete }: { onCountdownComplete?: () => void }) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Set target date to December 31st of current year at midnight
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 11, 31, 0, 0, 0); // Month is 0-indexed
  
  // If Dec 31 has passed, set to next year
  if (targetDate < new Date()) {
    targetDate.setFullYear(currentYear + 1);
  }
  
  // Handle audio playback
  useEffect(() => {
    if (audioRef.current) {
      if (timerActive) {
        // Try to play, but handle browser autoplay restrictions
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            // Autoplay was prevented, will play on first user interaction
            console.log('Autoplay prevented, audio will play on user interaction');
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [timerActive]);
  
  // Play audio on first user interaction
  const handleUserInteraction = () => {
    if (audioRef.current && timerActive) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    }
  };
  
  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
        setIsMusicPlaying(true);
      }
    }
  };

  const handleCountdownComplete = useCallback(() => {
    setShowFireworks(true);
    setTimerActive(false);
    // Auto-hide fireworks after 15 seconds
    setTimeout(() => setShowFireworks(false), 15000);
    // Notify parent component
    onCountdownComplete?.();
  }, [onCountdownComplete]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20" id="hero" onClick={handleUserInteraction}>
      <Fireworks show={showFireworks} />
      
      {/* Birthday Music - plays on repeat while timer is active */}
      <audio 
        ref={audioRef} 
        src="/birthday-music.mp3" 
        loop
        className="hidden"
      />
      
      {/* Music Control Button */}
      {timerActive && (
        <button
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-md border border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          title={isMusicPlaying ? "Mute music" : "Play music"}
        >
          {isMusicPlaying ? (
            <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ) : (
            <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
          <span className="font-body text-sm">{isMusicPlaying ? "Music On" : "Music Off"}</span>
        </button>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-16 w-12 h-12 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-gold-light/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="text-center relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-accent fill-accent animate-pulse drop-shadow-[0_0_20px_rgba(255,107,138,0.6)]" />
          <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">Happy Birthday</span>
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-accent fill-accent animate-pulse drop-shadow-[0_0_20px_rgba(255,107,138,0.6)]" />
        </div>

        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <Cake className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          <span className="text-primary uppercase tracking-[0.4em] text-sm sm:text-base font-body">
            Countdown to Celebration
          </span>
          <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Princess <span className="text-gradient-gold">Noor Jahan</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-elegant italic mb-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          A celebration of love, joy, and beautiful memories
        </p>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <CountdownTimer 
            targetDate={targetDate} 
            onComplete={handleCountdownComplete} 
          />
        </div>

        <p className="text-muted-foreground mb-8 font-body animate-fade-up" style={{ animationDelay: '0.9s' }}>
          Until December 31st, {targetDate.getFullYear()}
        </p>
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
