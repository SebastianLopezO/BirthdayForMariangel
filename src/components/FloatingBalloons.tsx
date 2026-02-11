const BALLOONS = [
  { color: "hsl(260, 50%, 65%)", x: 8, delay: 0, size: 40 },
  { color: "hsl(50, 90%, 60%)", x: 22, delay: 0.8, size: 35 },
  { color: "hsl(200, 70%, 55%)", x: 38, delay: 0.3, size: 42 },
  { color: "hsl(330, 70%, 55%)", x: 55, delay: 1.2, size: 38 },
  { color: "hsl(120, 50%, 50%)", x: 70, delay: 0.6, size: 36 },
  { color: "hsl(15, 80%, 60%)", x: 85, delay: 0.9, size: 40 },
];

const FloatingBalloons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {BALLOONS.map((b, i) => (
      <div
        key={i}
        className="absolute animate-balloon-float"
        style={{
          left: `${b.x}%`,
          bottom: `-${b.size + 20}px`,
          animationDelay: `${b.delay}s`,
          animationDuration: `${3 + b.delay}s`,
        }}
      >
        <svg width={b.size} height={b.size * 1.4} viewBox="0 0 40 56" opacity="0.25">
          <ellipse cx="20" cy="22" rx="18" ry="22" fill={b.color} />
          <radialGradient id={`bs-${i}`} cx="35%" cy="30%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <ellipse cx="20" cy="22" rx="18" ry="22" fill={`url(#bs-${i})`} />
          <polygon points="17,44 23,44 20,50" fill={b.color} opacity="0.8" />
          <path d="M20,50 Q18,53 20,56" stroke="hsl(30,10%,60%)" strokeWidth="1" fill="none" />
        </svg>
      </div>
    ))}
  </div>
);

export default FloatingBalloons;
