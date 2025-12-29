import { Link } from 'react-router-dom';
import { Feather, ArrowLeft, Sparkles, Star } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { PageTransition } from '@/components/PageTransition';

export const Poem = () => {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-md border border-border/50 text-foreground hover:bg-secondary transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="font-body text-sm">Back</span>
      </Link>

      <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl animate-float" />
        
        {/* Floating stars */}
        <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '0s' }}>
          <Star className="w-6 h-6 text-primary/40" fill="hsl(var(--primary))" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-4 h-4 text-gold-light/40" fill="hsl(var(--gold-light))" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-5 h-5 text-accent/40" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
          <Star className="w-3 h-3 text-primary/30" fill="hsl(var(--primary))" />
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16 animate-fade-up">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                A Special Tribute
              </span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4">
              Birthday <span className="text-gradient-gold">Poem</span>
            </h1>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl animate-pulse-slow" />
            
            {/* Main card */}
            <div className="relative card-glass rounded-3xl p-8 sm:p-12 md:p-16 border border-primary/20 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/30 animate-glow">
                  <Feather className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              {/* Poem lines with staggered animations */}
              <div className="text-center space-y-10 font-elegant text-xl sm:text-2xl md:text-3xl leading-relaxed text-foreground/90 italic">
                <p className="animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  On this day a star was born,
                  <br />
                  <span className="text-primary/80">A light that makes each moment warm.</span>
                </p>
                
                <p className="animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                  With every year that passes by,
                  <br />
                  <span className="text-accent/80">Your spirit soars, your dreams fly high.</span>
                </p>
                
                <p className="animate-fade-up opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
                  May laughter echo through your days,
                  <br />
                  <span className="text-gold-light/80">May joy find you in countless ways.</span>
                </p>
                
                <p className="animate-fade-up opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                  So raise a toast to all you are,
                  <br />
                  <span className="text-gradient-gold not-italic font-display text-2xl sm:text-3xl md:text-4xl">
                    Our brightest, most beloved star.
                  </span>
                </p>
              </div>

              {/* Decorative animated corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl animate-pulse-slow" />
              <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl animate-pulse-slow" style={{ animationDelay: '0.25s' }} />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-2xl animate-pulse-slow" style={{ animationDelay: '0.75s' }} />
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="flex justify-center mt-12 gap-2 animate-fade-up" style={{ animationDelay: '1.8s' }}>
            <Star className="w-4 h-4 text-primary/50" fill="hsl(var(--primary))" />
            <Star className="w-5 h-5 text-primary" fill="hsl(var(--primary))" />
            <Star className="w-4 h-4 text-primary/50" fill="hsl(var(--primary))" />
          </div>
        </div>
      </section>
      </main>
    </PageTransition>
  );
};

export default Poem;
