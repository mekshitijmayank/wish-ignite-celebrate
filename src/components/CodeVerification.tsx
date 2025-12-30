import { useState } from 'react';
import { Lock, X } from 'lucide-react';

export const CodeVerification = ({
  onCodeSubmit,
  onSkip,
}: {
  onCodeSubmit: (code: string) => void;
  onSkip: () => void;
}) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase() === 'gunnu') {
      setError('');
      onCodeSubmit(code);
    } else {
      setError('Incorrect code. Try again!');
      setCode('');
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-md w-full card-glass rounded-3xl p-8 border border-primary/30 shadow-2xl animate-scale-in">
        <button
          onClick={onSkip}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:rotate-90 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Lock className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Special Access</h2>
          <p className="text-muted-foreground">
            Are you the birthday girl? Enter the special code to unlock exclusive features!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter code..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Unlock
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-border/50">
          <button
            onClick={onSkip}
            className="w-full text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Continue as guest →
          </button>
        </div>
      </div>
    </div>
  );
};
