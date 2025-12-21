import { Heart, Star, Sparkles, Gift } from 'lucide-react';

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
];

export const BirthdayNotes = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="notes">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
            Heartfelt Messages
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Birthday <span className="text-gradient-gold">Notes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-elegant italic">
            Words from the heart that celebrate this special occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
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
  );
};
