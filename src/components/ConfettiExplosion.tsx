import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'ribbon' | 'balloon';
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export const ConfettiExplosion = ({ trigger }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!trigger) return;

    const createParticles = () => {
      const newParticles: Particle[] = [];
      const colors = ['#FF6B8A', '#FFD700', '#00CED1', '#FF69B4', '#32CD32', '#FF8C00', '#9370DB'];

      // Create balloons
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
          vx: (Math.random() - 0.5) * 8,
          vy: -Math.random() * 6 - 3,
          type: 'balloon',
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 10 - 5,
        });
      }

      // Create ribbons
      for (let i = 20; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
          vx: (Math.random() - 0.5) * 6,
          vy: -Math.random() * 8 - 4,
          type: 'ribbon',
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 15 - 7.5,
        });
      }

      setParticles(newParticles);
    };

    createParticles();

    const animationInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.2, // Gravity
            rotation: p.rotation + p.rotationSpeed,
          }))
          .filter((p) => p.y < window.innerHeight && p.x > -100 && p.x < window.innerWidth + 100)
      );
    }, 30);

    return () => clearInterval(animationInterval);
  }, [trigger]);

  return (
    <div className="fixed inset-0 z-[99985] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: `rotate(${p.rotation}deg)`,
            transition: 'all 30ms linear',
          }}
        >
          {p.type === 'balloon' ? (
            <div
              className="w-6 h-8 rounded-full"
              style={{
                backgroundColor: p.color,
                boxShadow: `0 0 10px ${p.color}`,
              }}
            />
          ) : (
            <div
              className="w-1 h-12"
              style={{
                backgroundColor: p.color,
                opacity: 0.8,
                boxShadow: `0 0 8px ${p.color}`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
