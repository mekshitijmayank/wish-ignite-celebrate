import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { PageTransition } from '@/components/PageTransition';
import { Feather, Camera, ArrowRight, Sparkles, Heart, Star, Gift, MessageCircle } from 'lucide-react';

const MAX_PREVIEW_LENGTH = 150;

// Preview notes for home page - using first 2 notes from Notes page
const previewNotes = [
  {
    id: 1,
    message: `Noor Jahan

From Bihar's soil, a royal flame,
A princess worthy of her name.
Chaotic laughs, a shining spark,
Charismatic light in days gone dark.

A secret keeper, a gentle shield,
Defending me when wounds are healed.
She spills the tea when silence stays,
Yet stands by me in quiet ways.

In crowds of thousands, loud or dim,
My eyes would always search for her—for him no, for her.
Noor Jahan, my chosen kin,
Not just a friend—my safe place within. 💛👑`,
    friendName: "Anjali",
    icon: Heart,
    color: "text-rose",
  },
  {
    id: 2,
    message: "Happy birthday nooruu❤️❤️\nThe person who add on smile on my face\nAs a friend and a sister you are comfort and happiness blended perfectly.\nYou are the best person who listens, supports, scolds, and loves me unconditionally.\nYour love for me is not comparable with anyone\nI love you so much\nBe happy always my cutiee❤️🫂 and I always bless you with great and shiny future....🥳✨",
    friendName: "Kanya",
    icon: Heart,
    color: "text-rose",
  },
];

const Index = () => {
  const [expandedNotes, setExpandedNotes] = useState<Set<number>>(new Set());
  const [timerComplete, setTimerComplete] = useState(false);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  const isLongNote = (text: string) => {
    return text.length > MAX_PREVIEW_LENGTH;
  };

  const toggleNote = (noteId: number) => {
    setExpandedNotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(noteId)) {
        newSet.delete(noteId);
      } else {
        newSet.add(noteId);
      }
      return newSet;
    });
  };

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  return (
    <PageTransition>
      <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Floating particles background */}
      <ParticleBackground />
      
      {/* Hero with Countdown */}
      <Hero onCountdownComplete={handleTimerComplete} />
      
      {/* Notes Preview Section - Only visible after timer completes */}
      {timerComplete && (
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
            {previewNotes.map((note, index) => {
              const isLong = isLongNote(note.message);
              const isExpanded = expandedNotes.has(note.id);
              const displayText = isLong && !isExpanded 
                ? truncateText(note.message, MAX_PREVIEW_LENGTH) 
                : note.message;
              
              return (
                <div
                  key={note.id}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative card-glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:translate-y-[-4px] flex flex-col">
                    <div className={`${note.color} mb-6`}>
                      <note.icon className="w-10 h-10" />
                    </div>
                    <p className="text-foreground/90 text-lg leading-relaxed mb-4 font-elegant whitespace-pre-line flex-grow">
                      "{displayText}"
                    </p>
                    {isLong && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNote(note.id);
                        }}
                        className="text-primary hover:text-primary/80 text-sm font-body mb-4 transition-colors self-start"
                      >
                        {isExpanded ? 'View less' : 'View more...'}
                      </button>
                    )}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                      <span className="text-muted-foreground text-sm uppercase tracking-wider font-body">
                        {note.friendName}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
      )}

      {/* Poem Preview Section - Only visible after timer completes */}
      {timerComplete && (
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
                  Tum jaisi v ho, mujhe koi badlaav nhi chahiye tum'me,
                  <br />
                  <span className="text-primary/80">Tum khubsurat ho...</span>
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
      )}

      {/* Gallery Preview Section - Only visible after timer completes */}
      {timerComplete && (
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
              "/img 1.jpeg",
              "/img 2.jpeg",
              "/img 3.jpeg",
            ].map((src, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background opacity-70 z-10 group-hover:opacity-40 transition-all duration-500" />
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
      )}
      
      {/* Footer */}
      <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
