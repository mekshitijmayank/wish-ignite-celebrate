import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Countdown', href: '#countdown', isSection: true },
  { label: 'Notes', href: '#notes', isSection: true },
  { label: 'Poem', href: '/poem', isSection: false },
  { label: 'Gallery', href: '/gallery', isSection: false },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isSection: boolean) => {
    setIsMobileMenuOpen(false);
    if (isSection) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            <Sparkles className="w-6 h-6 text-primary group-hover:animate-pulse" />
            <span className="font-display text-xl font-semibold">Birthday Wishes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isSection ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, true)}
                  className="relative text-foreground/80 hover:text-foreground font-body text-sm uppercase tracking-wider transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative font-body text-sm uppercase tracking-wider transition-colors group ${
                    location.pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            link.isSection ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href, true)}
                className="block w-full text-left text-foreground/80 hover:text-foreground hover:bg-secondary/50 font-body text-lg py-3 px-4 rounded-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left font-body text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === link.href 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground/80 hover:text-foreground hover:bg-secondary/50'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};
