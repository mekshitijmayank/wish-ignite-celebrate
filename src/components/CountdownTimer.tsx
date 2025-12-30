import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsComplete(true);
        onComplete();
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-4 sm:p-6 min-w-20 sm:min-w-24 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
        </div>
        <span className="text-muted-foreground text-sm sm:text-base font-body uppercase tracking-wider mt-2">
          Days
        </span>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-4 sm:p-6 min-w-20 sm:min-w-24 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
        </div>
        <span className="text-muted-foreground text-sm sm:text-base font-body uppercase tracking-wider mt-2">
          Hours
        </span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-4 sm:p-6 min-w-20 sm:min-w-24 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
        </div>
        <span className="text-muted-foreground text-sm sm:text-base font-body uppercase tracking-wider mt-2">
          Minutes
        </span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-4 sm:p-6 min-w-20 sm:min-w-24 flex items-center justify-center">
          <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        <span className="text-muted-foreground text-sm sm:text-base font-body uppercase tracking-wider mt-2">
          Seconds
        </span>
      </div>
    </div>
  );
};
