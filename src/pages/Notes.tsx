import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, Gift, ArrowLeft, MessageCircle, X } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { PageTransition } from '@/components/PageTransition';

const MAX_PREVIEW_LENGTH = 120;

const notes = [
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
    icon: Star,
    color: "text-primary",
  },
  {
    id: 3,
    message: "Happy Birthday to the human chaos we somehow survived college with 🥳\nFrom laughing through backlog prep (who does that? us.) to being there when no one else was—you've been our constant 🫂\nNo matter where life throws us next, you'll always be our safe place with a side of madness.\nLove you endlessly. Chaos forever. 💖✨\n-With Love",
    friendName: "Harnoor",
    icon: Sparkles,
    color: "text-gold-light",
  },
  // {
  //   id: 4,
  //   message: "On your special day, I wish you nothing but the best – endless joy, boundless love, and dreams that come true. Happy Birthday! You've touched so many lives with your warmth and generosity. May this year bring you everything you've been wishing for and more!",
  //   friendName: "Michael",
  //   icon: Gift,
  //   color: "text-accent",
  // },
  // {
  //   id: 5,
  //   message: "Life is a journey, and you've made every step count. May this birthday mark the beginning of an even more incredible chapter! Your resilience and positive attitude are truly admirable. I can't wait to see what amazing things you'll achieve this year!",
  //   friendName: "Jessica",
  //   icon: Heart,
  //   color: "text-rose",
  // },
  // {
  //   id: 6,
  //   message: "You bring so much light into this world. May your birthday be as bright and beautiful as the joy you share with everyone around you! Your friendship means the world to me, and I'm so lucky to have you in my life. Here's to celebrating you today and always!",
  //   friendName: "David",
  //   icon: Star,
  //   color: "text-primary",
  // },
];

export const NotesPage = () => {
  const [selectedNote, setSelectedNote] = useState<typeof notes[0] | null>(null);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  const isLongNote = (text: string) => {
    return text.length > MAX_PREVIEW_LENGTH;
  };

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
            {notes.map((note, index) => {
              const isLong = isLongNote(note.message);
              const previewText = isLong ? truncateText(note.message, MAX_PREVIEW_LENGTH) : note.message;
              
              return (
                <div
                  key={note.id}
                  className="group relative animate-fade-up cursor-pointer"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  onClick={() => setSelectedNote(note)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative card-glass rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:translate-y-[-4px] flex flex-col">
                    <div className={`${note.color} mb-6`}>
                      <note.icon className="w-10 h-10" />
                    </div>
                    <p className="text-foreground/90 text-lg leading-relaxed mb-4 font-elegant flex-grow whitespace-pre-line">
                      "{previewText}"
                    </p>
                    {isLong && (
                      <button className="text-primary hover:text-primary/80 text-sm font-body mb-4 transition-colors self-start">
                        Read more...
                      </button>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                        <span className="text-muted-foreground text-sm uppercase tracking-wider font-body">
                          {note.friendName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Note Modal */}
      {selectedNote && (
        <div 
          className="fixed inset-0 z-[99998] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedNote(null)}
        >
          <div 
            className="max-w-2xl w-full relative card-glass rounded-3xl p-8 sm:p-12 border border-border/50 shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:rotate-90 hover:scale-110"
              onClick={() => setSelectedNote(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Note Content */}
            <div className={`${selectedNote.color} mb-6`}>
              <selectedNote.icon className="w-12 h-12" />
            </div>
            
            <p className="text-foreground/90 text-xl sm:text-2xl leading-relaxed mb-8 font-elegant whitespace-pre-line">
              "{selectedNote.message}"
            </p>
            
            <div className="flex items-center gap-3 pt-6 border-t border-border/50">
              <div className="w-16 h-[1px] bg-gradient-to-r from-primary to-transparent" />
              <span className="text-muted-foreground text-base uppercase tracking-wider font-body">
                {selectedNote.friendName}
              </span>
            </div>
          </div>
        </div>
      )}
      </main>
    </PageTransition>
  );
};

export default NotesPage;
