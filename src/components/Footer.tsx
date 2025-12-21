import { Heart, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="font-display text-xl text-foreground">Birthday Wishes</span>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        
        <p className="text-muted-foreground font-elegant italic text-lg mb-6">
          "May your birthday be as special as you are"
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
          <span>for someone special</span>
        </div>
        
        <p className="text-xs text-muted-foreground/60 mt-4 font-body">
          © {currentYear} Birthday Wishes. All celebrations reserved.
        </p>
      </div>
    </footer>
  );
};
