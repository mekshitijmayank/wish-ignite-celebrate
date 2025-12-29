import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Feather, Camera, Sparkles, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Notes', href: '/notes', icon: MessageCircle },
  { label: 'Poem', href: '/poem', icon: Feather },
  { label: 'Gallery', href: '/gallery', icon: Camera },
];

export const FloatingNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 right-6 z-50 md:hidden p-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-110 transition-all duration-300"
      >
        <div className="relative w-6 h-6">
          <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isExpanded ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
          <X className={`w-6 h-6 absolute transition-all duration-300 ${isExpanded ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
        </div>
      </button>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden transition-opacity duration-300 ${
          isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsExpanded(false)}
      >
        <div className="absolute bottom-24 right-6 flex flex-col gap-3">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsExpanded(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                location.pathname === item.href
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30'
                  : 'bg-secondary/80 text-foreground border-border/50 hover:bg-secondary hover:border-primary/50'
              }`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                transform: isExpanded ? 'translateX(0)' : 'translateX(100px)',
                opacity: isExpanded ? 1 : 0,
                transitionDelay: `${index * 0.05}s`
              }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-body text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Floating Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10 border border-primary/30 animate-pulse-slow">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>

        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
              location.pathname === item.href
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                : 'bg-secondary/80 backdrop-blur-md text-foreground border border-border/50 hover:bg-secondary hover:border-primary/50 hover:scale-105'
            }`}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-secondary/90 backdrop-blur-md text-foreground text-sm font-body whitespace-nowrap opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 border border-border/50">
              {item.label}
            </span>

            {/* Active indicator */}
            {location.pathname === item.href && (
              <span className="absolute -left-1 w-1 h-6 bg-primary rounded-full animate-pulse" />
            )}
          </Link>
        ))}
      </nav>
    </>
  );
};
