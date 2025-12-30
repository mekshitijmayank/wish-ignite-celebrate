import { useState, useEffect } from 'react';
import { Moon, Sun, Heart } from 'lucide-react';

type Theme = 'default' | 'cozy-love';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    // Get theme from localStorage or default
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('default');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'cozy-love') {
      root.setAttribute('data-theme', 'cozy-love');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'default' ? 'cozy-love' : 'default';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center justify-center p-3 rounded-full bg-secondary/80 text-foreground border border-border/50 hover:bg-secondary hover:border-primary/50 hover:scale-105 transition-all duration-300"
      aria-label={theme === 'default' ? 'Switch to Cozy Love Theme' : 'Switch to Default Theme'}
    >
      {theme === 'default' ? (
        <Heart className="w-5 h-5 text-rose" />
      ) : (
        <Sun className="w-5 h-5 text-primary" />
      )}
      
      {/* Tooltip with clear description */}
      <span className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-secondary/90 backdrop-blur-md text-foreground text-sm font-body whitespace-nowrap opacity-0 invisible -translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 border border-border/50 z-[100000]">
        <span className="block font-semibold mb-0.5">Theme Toggle</span>
        <span className="text-xs opacity-80">
          {theme === 'default' ? 'Click to switch to Cozy Love theme' : 'Click to switch to Default theme'}
        </span>
      </span>
    </button>
  );
};

