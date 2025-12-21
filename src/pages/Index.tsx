import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { BirthdayNotes } from '@/components/BirthdayNotes';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Feather, Camera, ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Floating particles background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero with Countdown */}
      <Hero />
      
      {/* Birthday Notes Section */}
      <BirthdayNotes />
      
      {/* Poem & Gallery Cards Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 block animate-fade-up">
              Explore More
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Special <span className="text-gradient-gold">Sections</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Poem Card */}
            <Link 
              to="/poem" 
              className="group relative animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/30 to-primary/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative card-glass rounded-3xl p-8 sm:p-10 border border-primary/20 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:animate-glow transition-all duration-300">
                      <Feather className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
                    Birthday <span className="text-gradient-gold">Poem</span>
                  </h3>
                  <p className="text-muted-foreground font-elegant italic text-lg">
                    A heartfelt tribute written just for this special celebration
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-primary font-body text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4" />
                    <span>Read the poem</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Gallery Card */}
            <Link 
              to="/gallery" 
              className="group relative animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-primary/30 to-accent/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="relative card-glass rounded-3xl p-8 sm:p-10 border border-primary/20 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-full bg-accent/10 border border-accent/30 group-hover:animate-glow transition-all duration-300">
                      <Camera className="w-6 h-6 text-accent" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
                    Memory <span className="text-gradient-gold">Gallery</span>
                  </h3>
                  <p className="text-muted-foreground font-elegant italic text-lg">
                    A beautiful collection of captured moments and precious memories
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-accent font-body text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4" />
                    <span>View gallery</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
