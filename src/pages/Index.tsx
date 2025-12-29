import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { FloatingNav } from '@/components/FloatingNav';
import { PageTransition } from '@/components/PageTransition';
import { Feather, Camera, ArrowRight, Sparkles, Heart, Star, Gift, MessageCircle } from 'lucide-react';

// Preview notes for home page
const previewNotes = [
  {
    id: 1,
    message: "Wishing you a day filled with love, laughter, and all the happiness your heart can hold.",
    author: "With Love",
    icon: Heart,
    color: "text-rose",
  },
  {
    id: 2,
    message: "Another year older, another year wiser, and another year of making amazing memories.",
    author: "Forever Grateful",
    icon: Star,
    color: "text-primary",
  },
];

const Index = () => {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Floating particles background */}
      <ParticleBackground />
      
      {/* Floating Navigation */}
      <FloatingNav />
      
      {/* Hero with Countdown */}
      <Hero />
      
      {/* Notes Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden" id="notes">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                Heartfelt Messages
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Birthday <span className="text-gradient-gold">Notes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {previewNotes.map((note, index) => (
              <div
                key={note.id}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative card-glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:translate-y-[-4px]">
                  <div className={`${note.color} mb-6`}>
                    <note.icon className="w-10 h-10" />
                  </div>
                  <p className="text-foreground/90 text-lg leading-relaxed mb-6 font-elegant">
                    "{note.message}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                    <span className="text-muted-foreground text-sm uppercase tracking-wider font-body">
                      {note.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Notes Button */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Link
              to="/notes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <span className="font-body text-sm uppercase tracking-wider">View All Notes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Poem Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden" id="poem">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up">
              <Feather className="w-5 h-5 text-primary" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                A Special Tribute
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Birthday <span className="text-gradient-gold">Poem</span>
            </h2>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-xl" />
            <div className="relative card-glass rounded-3xl p-8 sm:p-10 border border-primary/20">
              <div className="text-center space-y-6 font-elegant text-xl sm:text-2xl leading-relaxed text-foreground/90 italic">
                <p>
                  On this day a star was born,
                  <br />
                  <span className="text-primary/80">A light that makes each moment warm.</span>
                </p>
                <p className="text-muted-foreground">...</p>
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  to="/poem"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="font-body text-sm uppercase tracking-wider">Read Full Poem</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 px-4 relative overflow-hidden" id="gallery">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4 animate-fade-up">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                Captured Moments
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Memory <span className="text-gradient-gold">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=300&fit=crop",
            ].map((src, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 z-10 group-hover:opacity-40 transition-all duration-500" />
                <img
                  src={src}
                  alt="Birthday memory"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Camera className="w-4 h-4" />
              <span className="font-body text-sm uppercase tracking-wider">View Full Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
