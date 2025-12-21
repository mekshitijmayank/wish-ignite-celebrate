import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Camera, Sparkles } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';

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

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up">
              <Camera className="w-6 h-6 text-primary animate-pulse-slow" />
              <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">
                Captured Moments
              </span>
              <Sparkles className="w-6 h-6 text-primary animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Memory <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-elegant italic animate-fade-up" style={{ animationDelay: '0.4s' }}>
              A collection of precious moments celebrating this special day
            </p>
          </div>

          {/* Gallery Grid with enhanced animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[3/2] overflow-hidden rounded-2xl cursor-pointer animate-fade-up"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                onClick={() => openLightbox(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image glow effect */}
                <div 
                  className={`absolute -inset-2 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-3xl blur-xl transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-60' : 'opacity-0'
                  }`}
                />
                
                <div className="relative h-full rounded-2xl overflow-hidden border border-border/50">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 z-10 group-hover:opacity-40 transition-all duration-500" />
                  
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-foreground font-display text-xl mb-1">{image.caption}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-body">
                        <Camera className="w-4 h-4" />
                        <span>Click to view</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/60 rounded-2xl transition-all duration-500 z-30" />
                  
                  {/* Corner sparkles on hover */}
                  <div className={`absolute top-3 right-3 z-30 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox with animations */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:rotate-90 hover:scale-110"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:-translate-x-1 hover:scale-110"
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:translate-x-1 hover:scale-110"
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image container */}
            <div 
              className="max-w-5xl max-h-[85vh] animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Image glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl animate-pulse-slow" />
                
                <img
                  src={galleryImages[selectedImage].src.replace('w=600&h=400', 'w=1200&h=800')}
                  alt={galleryImages[selectedImage].alt}
                  className="relative max-w-full max-h-[80vh] object-contain rounded-2xl border border-border/50"
                />
              </div>
              
              <p className="text-center text-foreground font-display text-2xl mt-6 animate-fade-up">
                {galleryImages[selectedImage].caption}
              </p>
              
              {/* Image counter */}
              <p className="text-center text-muted-foreground font-body text-sm mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default GalleryPage;
