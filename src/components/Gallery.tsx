import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    alt: "Birthday celebration with confetti",
    caption: "Moments of Joy",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&h=400&fit=crop",
    alt: "Sparklers celebration",
    caption: "Sparkling Memories",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop",
    alt: "Colorful balloons",
    caption: "Colors of Happiness",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop",
    alt: "Party decorations",
    caption: "Festive Vibes",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=600&h=400&fit=crop",
    alt: "Birthday cake celebration",
    caption: "Sweet Celebrations",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&h=400&fit=crop",
    alt: "Party celebration",
    caption: "Dancing Night",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="gallery">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-body mb-4 block">
            Captured Moments
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
            Memory <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-elegant italic">
            A collection of precious moments celebrating this special day
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[3/2] overflow-hidden rounded-2xl cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-300" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-foreground font-display text-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {image.caption}
                </p>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300 z-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src.replace('w=600&h=400', 'w=1200&h=800')}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-center text-foreground font-display text-xl mt-4">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
