import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, Gift, ArrowLeft, MessageCircle } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { PageTransition } from '@/components/PageTransition';

const notes = [
  {
    id: 1,
    message: "Wishing you a day filled with love, laughter, and all the happiness your heart can hold. May this year bring you closer to your dreams!",
    author: "With Love",
    icon: Heart,
    color: "text-rose",
  },
  {
    id: 2,
    message: "Another year older, another year wiser, and another year of making amazing memories. Here's to you and all the wonderful things ahead!",
    author: "Forever Grateful",
    icon: Star,
    color: "text-primary",
  },
  {
    id: 3,
    message: "May your birthday sparkle with moments of love, laughter, and goodwill. May the year ahead be full of contentment and joy!",
    author: "Cheers",
    icon: Sparkles,
    color: "text-gold-light",
  },
  {
    id: 4,
    message: "On your special day, I wish you nothing but the best – endless joy, boundless love, and dreams that come true. Happy Birthday!",
    author: "Your Admirer",
    icon: Gift,
    color: "text-accent",
  },
  {
    id: 5,
    message: "Life is a journey, and you've made every step count. May this birthday mark the beginning of an even more incredible chapter!",
    author: "Always Inspired",
    icon: Heart,
    color: "text-rose",
  },
  {
    id: 6,
    message: "You bring so much light into this world. May your birthday be as bright and beautiful as the joy you share with everyone around you!",
    author: "With Admiration",
    icon: Star,
    color: "text-primary",
  },
];

export const NotesPage = () => {
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

      <section className="min-h-screen py-24 px-4 relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose/5 rounded-full blur-3xl animate-float" />
        
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up">
              <MessageCircle className="w-6 h-6 text-primary animate-pulse-slow" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                Heartfelt Messages
              </span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Birthday <span className="text-gradient-gold">Notes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-elegant italic animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Words from the heart that celebrate this special occasion
            </p>
          </div>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {notes.map((note, index) => (
              <div
                key={note.id}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
        </div>
      </section>
      </main>
    </PageTransition>
  );
};

export default NotesPage;
