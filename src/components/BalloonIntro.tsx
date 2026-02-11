import { useState, useCallback } from "react";

interface BalloonIntroProps {
  onOpen: () => void;
}

const REQUIRED_TAPS = 8;

const BalloonIntro = ({ onOpen }: BalloonIntroProps) => {
  const [taps, setTaps] = useState(0);
  const [popped, setPopped] = useState(false);

  const scale = 0.3 + (taps / REQUIRED_TAPS) * 1;
  const hue = 330 - (taps / REQUIRED_TAPS) * 30;

  const handleTap = useCallback(() => {
    if (popped) return;
    const next = taps + 1;
    setTaps(next);
    if (next >= REQUIRED_TAPS) {
      setPopped(true);
      setTimeout(onOpen, 1200);
    }
  }, [taps, popped, onOpen]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-birthday-cream">
      {/* Background confetti (subtle) */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 6}px`,
            height: `${8 + Math.random() * 10}px`,
            backgroundColor: [
              "hsl(330,70%,55%)",
              "hsl(38,85%,55%)",
              "hsl(175,50%,45%)",
              "hsl(260,40%,65%)",
              "hsl(50,90%,60%)",
              "hsl(15,80%,60%)",
            ][i % 6],
            borderRadius: "2px",
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 8}s`,
            opacity: 0.3,
          }}
        />
      ))}

      <h1 className="text-3xl sm:text-5xl font-display text-birthday-chocolate mb-2 animate-gentle-bounce">
        ¡Feliz Cumpleaños! 🎂
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground font-cursive text-4xl mb-8">
        Para ti, Mariangel
      </p>

      {/* Balloon */}
      <div
        className={`cursor-pointer select-none transition-all duration-200 ${popped ? "" : "hover:brightness-110"}`}
        onClick={handleTap}
      >
        {popped ? (
          <div className="animate-bounce-in text-center">
            <p className="text-7xl mb-4">🎉</p>
            <p className="text-2xl font-display text-primary">¡POP!</p>
          </div>
        ) : (
          <svg
            width="180"
            height="240"
            viewBox="0 0 180 240"
            className="transition-transform duration-200"
            style={{ transform: `scale(${scale})` }}
          >
            <defs>
              <radialGradient id="balloon-g" cx="35%" cy="30%" r="55%">
                <stop offset="0%" stopColor="white" stopOpacity="0.35" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="90" cy="95" rx="75" ry="90" fill={`hsl(${hue}, 70%, 55%)`} />
            <ellipse cx="90" cy="95" rx="75" ry="90" fill="url(#balloon-g)" />
            <polygon points="80,185 100,185 90,200" fill={`hsl(${hue}, 60%, 45%)`} />
            <path d="M90,200 Q85,215 90,230" stroke="hsl(30,10%,55%)" strokeWidth="2" fill="none" />

            {/* Hearts filling as taps increase */}
            {Array.from({ length: Math.min(taps, REQUIRED_TAPS) }).map((_, i) => (
              <text
                key={i}
                x={50 + (i % 3) * 25}
                y={55 + Math.floor(i / 3) * 30}
                fontSize="20"
                fill="white"
                opacity="0.5"
                textAnchor="middle"
              >
                ♥
              </text>
            ))}
          </svg>
        )}
      </div>

      {!popped && (
        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm font-body animate-pulse-scale">
            ¡Toca el globo para inflarlo! ({taps}/{REQUIRED_TAPS})
          </p>
          <div className="mt-3 w-48 h-2 rounded-full bg-muted mx-auto overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-birthday-coral transition-all duration-200"
              style={{ width: `${(taps / REQUIRED_TAPS) * 100}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BalloonIntro;
