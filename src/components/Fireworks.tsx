import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
}

interface FireworkShell {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  exploded: boolean;
}

const colors = [
  '#FFD700', // Gold
  '#FF6B8A', // Rose
  '#00D4FF', // Cyan
  '#FF8C00', // Orange
  '#FF1493', // Deep Pink
  '#7B68EE', // Medium Slate Blue
  '#00FF7F', // Spring Green
  '#FFFFFF', // White
];

export const Fireworks = ({ show }: { show: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const shellsRef = useRef<FireworkShell[]>([]);

  useEffect(() => {
    if (!show) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      // Use full viewport dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createShell = () => {
      const x = Math.random() * canvas.width;
      const targetY = canvas.height * 0.2 + Math.random() * canvas.height * 0.3;
      
      shellsRef.current.push({
        x,
        y: canvas.height,
        targetY,
        speed: 8 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        exploded: false,
      });
    };

    const explode = (shell: FireworkShell) => {
      const particleCount = 100 + Math.floor(Math.random() * 50);
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.3;
        const speed = 2 + Math.random() * 6;
        
        particlesRef.current.push({
          x: shell.x,
          y: shell.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: shell.color,
          size: 2 + Math.random() * 2,
          decay: 0.015 + Math.random() * 0.01,
        });
      }

      // Add some sparkle particles
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3;
        
        particlesRef.current.push({
          x: shell.x,
          y: shell.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: '#FFFFFF',
          size: 1 + Math.random(),
          decay: 0.02 + Math.random() * 0.02,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 20, 35, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw shells
      shellsRef.current = shellsRef.current.filter((shell) => {
        if (!shell.exploded) {
          shell.y -= shell.speed;
          
          // Draw shell trail
          ctx.beginPath();
          ctx.arc(shell.x, shell.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = shell.color;
          ctx.fill();
          
          // Draw trail
          const gradient = ctx.createLinearGradient(shell.x, shell.y, shell.x, shell.y + 30);
          gradient.addColorStop(0, shell.color);
          gradient.addColorStop(1, 'transparent');
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shell.x, shell.y);
          ctx.lineTo(shell.x, shell.y + 30);
          ctx.stroke();

          if (shell.y <= shell.targetY) {
            shell.exploded = true;
            explode(shell);
            return false;
          }
          return true;
        }
        return false;
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.05; // gravity
        particle.alpha -= particle.decay;

        if (particle.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Launch fireworks periodically
    const launchInterval = setInterval(() => {
      const count = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        setTimeout(() => createShell(), i * 200);
      }
    }, 800);

    // Initial burst
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createShell(), i * 150);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(launchInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [show]);

  if (!show) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[99999] pointer-events-none"
      style={{ 
        background: 'transparent',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        position: 'fixed'
      }}
    />
  );
};
