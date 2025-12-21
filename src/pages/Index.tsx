import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { BirthdayNotes } from '@/components/BirthdayNotes';
import { BirthdayPoem } from '@/components/BirthdayPoem';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';

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
      
      {/* Birthday Poem Section */}
      <BirthdayPoem />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
