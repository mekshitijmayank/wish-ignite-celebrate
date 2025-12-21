import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

export const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsComplete(true);
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-2xl group-hover:bg-primary/30 transition-all duration-500" />
        <div className="relative card-glass rounded-2xl p-4 sm:p-6 md:p-8 min-w-[70px] sm:min-w-[90px] md:min-w-[120px] border border-primary/30 hover:border-primary/50 transition-all duration-300">
          <span className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-gradient-gold block text-center">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-3 text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] font-body">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <div className="flex flex-col gap-2 pt-4 sm:pt-6">
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse-slow" />
      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
    </div>
  );

  if (isComplete) {
    return (
      <div className="text-center animate-scale-in">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-4">
          🎉 It's Time! 🎉
        </h2>
        <p className="text-xl sm:text-2xl text-foreground/80 font-elegant">
          The celebration has begun!
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
      <TimeBlock value={timeLeft.days} label="Days" />
      <Separator />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
