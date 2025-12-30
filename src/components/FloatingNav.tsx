import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Feather, Camera, Sparkles, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/', icon: Home, sectionId: 'hero' },
  { label: 'Notes', href: '/notes', icon: MessageCircle, sectionId: 'notes' },
  { label: 'Poem', href: '/poem', icon: Feather, sectionId: 'poem' },
  { label: 'Gallery', href: '/gallery', icon: Camera, sectionId: 'gallery' },
];

export const FloatingNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['hero', 'notes', 'poem', 'gallery'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const isActive = (item: typeof navItems[0]) => {
    if (isHomePage) {
      return activeSection === item.sectionId;
    }
    return location.pathname === item.href;
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsExpanded(false);
    if (isHomePage && item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Mobile Toggle Button - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group fixed bottom-6 left-6 z-[9999] md:hidden p-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 transition-all duration-300"
        aria-label={isExpanded ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <div className="relative w-6 h-6">
          <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isExpanded ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
          <X className={`w-6 h-6 absolute transition-all duration-300 ${isExpanded ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
        </div>
        
        {/* Tooltip */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-secondary/90 backdrop-blur-md text-foreground text-sm font-body whitespace-nowrap opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 border border-border/50">
          <span className="block font-semibold mb-0.5">Menu</span>
          <span className="text-xs opacity-80">
            {isExpanded ? 'Click to close' : 'Click to open navigation'}
          </span>
        </span>
      </button>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-background/80 backdrop-blur-md md:hidden transition-opacity duration-300 ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsExpanded(false)}
      >
        <div className="absolute bottom-24 left-6 flex flex-col gap-3">
          {navItems.map((item, index) => (
            isHomePage ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                  isActive(item)
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30'
                    : 'bg-secondary/80 text-foreground border-border/50 hover:bg-secondary hover:border-primary/50'
                }`}
                style={{ 
                  transform: isExpanded ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isExpanded ? 1 : 0,
                  transitionDelay: `${index * 0.05}s`
                }}
                aria-label={`Navigate to ${item.label} section`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-body text-sm font-semibold">{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsExpanded(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                  isActive(item)
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30'
                    : 'bg-secondary/80 text-foreground border-border/50 hover:bg-secondary hover:border-primary/50'
                }`}
                style={{ 
                  transform: isExpanded ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isExpanded ? 1 : 0,
                  transitionDelay: `${index * 0.05}s`
                }}
                aria-label={`Navigate to ${item.label} page`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-body text-sm font-semibold">{item.label}</span>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Desktop Floating Navigation - Always visible */}
      <nav 
        className="fixed left-6 top-1/2 -translate-y-1/2 z-[99999] hidden md:flex flex-col gap-3 bg-background/95 backdrop-blur-xl p-3 rounded-2xl border-2 border-primary/30 shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-2">
          <div className="p-2.5 rounded-full bg-primary/10 border border-primary/30 animate-pulse-slow">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {navItems.map((item) => (
          isHomePage ? (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                isActive(item)
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                  : 'bg-secondary/80 text-foreground border border-border/50 hover:bg-secondary hover:border-primary/50 hover:scale-105'
              }`}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-secondary/90 backdrop-blur-md text-foreground text-sm font-body whitespace-nowrap opacity-0 invisible -translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 border border-border/50 z-[100000]">
                <span className="block font-semibold">{item.label}</span>
                <span className="text-xs opacity-80">
                  {isHomePage ? 'Click to scroll to section' : 'Click to navigate'}
                </span>
              </span>

              {/* Active indicator */}
              {isActive(item) && (
                <span className="absolute -right-1 w-1 h-6 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                isActive(item)
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                  : 'bg-secondary/80 text-foreground border border-border/50 hover:bg-secondary hover:border-primary/50 hover:scale-105'
              }`}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-secondary/90 backdrop-blur-md text-foreground text-sm font-body whitespace-nowrap opacity-0 invisible -translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 border border-border/50 z-[100000]">
                <span className="block font-semibold">{item.label}</span>
                <span className="text-xs opacity-80">
                  {isHomePage ? 'Click to scroll to section' : 'Click to navigate'}
                </span>
              </span>

              {/* Active indicator */}
              {isActive(item) && (
                <span className="absolute -right-1 w-1 h-6 bg-primary rounded-full animate-pulse" />
              )}
            </Link>
          )
        ))}
      </nav>
    </>
  );
};
