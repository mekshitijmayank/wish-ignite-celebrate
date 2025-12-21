import { Feather } from 'lucide-react';

export const BirthdayPoem = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="poem">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-20 right-10 w-2 h-2 bg-primary rounded-full animate-twinkle" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-gold-light rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
            A Special Tribute
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Birthday <span className="text-gradient-gold">Poem</span>
          </h2>
        </div>

        <div className="relative">
          {/* Poem card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl" />
          <div className="relative card-glass rounded-3xl p-8 sm:p-12 md:p-16 border border-primary/20">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                <Feather className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="text-center space-y-8 font-elegant text-xl sm:text-2xl md:text-3xl leading-relaxed text-foreground/90 italic">
              <p className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                On this day a star was born,
                <br />
                A light that makes each moment warm.
              </p>
              
              <p className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                With every year that passes by,
                <br />
                Your spirit soars, your dreams fly high.
              </p>
              
              <p className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
                May laughter echo through your days,
                <br />
                May joy find you in countless ways.
              </p>
              
              <p className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
                So raise a toast to all you are,
                <br />
                <span className="text-gradient-gold not-italic font-display">
                  Our brightest, most beloved star.
                </span>
              </p>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
