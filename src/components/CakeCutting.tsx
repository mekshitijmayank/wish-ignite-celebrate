import { useEffect, useRef } from 'react';

export const CakeCutting = ({ isVerified }: { isVerified: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw instructions
    const drawInstructions = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 28px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🎂 Make a Wish and Cut the Cake! 🎂', canvas.width / 2, 80);
    };

    // Draw cake
    const drawCake = () => {
      // Cake body
      ctx.fillStyle = '#D4A574';
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 80, 200, 120);

      // Frosting layers
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 80, 200, 30);
      ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 40, 200, 30);

      // Candles
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(canvas.width / 2 - 80 + i * 40, canvas.height / 2 - 100, 8, 30);
        // Flame
        ctx.fillStyle = '#FF6347';
        ctx.beginPath();
        ctx.arc(canvas.width / 2 - 76 + i * 40, canvas.height / 2 - 110, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Draw knife
    let knifeX = canvas.width / 2 + 120;
    let knifeY = canvas.height / 2 - 50;
    let knifeAngle = 0;

    const drawKnife = () => {
      ctx.save();
      ctx.translate(knifeX, knifeY);
      ctx.rotate(knifeAngle);

      // Blade
      ctx.fillStyle = '#C0C0C0';
      ctx.fillRect(0, -3, 80, 6);

      // Handle
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(-20, -8, 20, 16);

      ctx.restore();
    };

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawInstructions();
      drawCake();

      if (frameCount < 60) {
        // Cut animation
        knifeAngle = (frameCount / 60) * (Math.PI / 4);
        knifeX = canvas.width / 2 + 120 - (frameCount / 60) * 100;
      } else {
        // Hold position
        knifeAngle = Math.PI / 4;
        knifeX = canvas.width / 2 + 20;
      }

      drawKnife();

      frameCount++;
      if (frameCount < 120) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[99990]"
      style={{ display: isVerified ? 'block' : 'none' }}
    />
  );
};
