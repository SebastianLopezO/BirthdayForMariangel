import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  color: string;
  rotation: number;
}

const COLORS = [
  "hsl(330, 70%, 55%)",
  "hsl(38, 85%, 55%)",
  "hsl(175, 50%, 45%)",
  "hsl(260, 40%, 65%)",
  "hsl(15, 80%, 60%)",
  "hsl(50, 90%, 60%)",
  "hsl(120, 50%, 50%)",
  "hsl(200, 70%, 55%)",
];

const FallingConfetti = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const generated: Confetti[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      width: 4 + Math.random() * 8,
      height: 8 + Math.random() * 14,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
    }));
    setConfetti(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${c.left}%`,
            width: `${c.width}px`,
            height: `${c.height}px`,
            backgroundColor: c.color,
            borderRadius: c.width > 8 ? "50%" : "2px",
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            transform: `rotate(${c.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingConfetti;
