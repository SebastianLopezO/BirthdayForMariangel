import FloatingBalloons from "./FloatingBalloons";

const WatercolorCake = () => {
    return (
        <div className="relative w-full max-w-md mx-auto py-8">
            <FloatingBalloons/>
            <svg viewBox="0 0 400 380" className="w-full h-auto relative z-10">
                {/* Plate */}
                <ellipse cx="200" cy="340" rx="160" ry="18" fill="hsl(30, 10%, 88%)"/>
                <ellipse cx="200" cy="337" rx="155" ry="15" fill="hsl(30, 10%, 94%)"/>

                {/* Bottom cake layer - chocolate */}
                <rect x="60" y="270" width="280" height="70" rx="12" fill="hsl(25, 45%, 28%)"/>
                {/* Watercolor texture effect */}
                <rect x="60" y="270" width="280" height="70" rx="12" fill="hsl(25, 50%, 35%)" opacity="0.4"/>
                {/* Frosting */}
                <rect x="60" y="265" width="280" height="18" rx="9" fill="hsl(0, 0%, 96%)"/>
                {/* Drips */}
                {[90, 130, 170, 210, 250, 290].map((x, i) => (
                    <ellipse key={`drip-b-${i}`} cx={x} cy={283 + (i % 2) * 4} rx="9" ry={10 + (i % 3) * 5}
                             fill="hsl(0, 0%, 96%)"/>
                ))}

                {/* Middle layer */}
                <rect x="85" y="200" width="230" height="65" rx="10" fill="hsl(25, 50%, 32%)"/>
                <rect x="85" y="200" width="230" height="65" rx="10" fill="hsl(25, 55%, 38%)" opacity="0.3"/>
                {/* Frosting */}
                <rect x="85" y="195" width="230" height="16" rx="8" fill="hsl(330, 50%, 80%)"/>
                {/* Chocolate drips */}
                {[110, 150, 195, 240, 280].map((x, i) => (
                    <ellipse key={`drip-m-${i}`} cx={x} cy={211 + (i % 2) * 3} rx="8" ry={8 + (i % 3) * 4}
                             fill="hsl(330, 50%, 80%)"/>
                ))}

                {/* Top layer */}
                <rect x="110" y="140" width="180" height="60" rx="8" fill="hsl(25, 45%, 30%)"/>
                <rect x="110" y="140" width="180" height="60" rx="8" fill="hsl(25, 50%, 36%)" opacity="0.3"/>
                {/* White frosting top */}
                <rect x="110" y="135" width="180" height="16" rx="8" fill="hsl(0, 0%, 97%)"/>
                {/* Drips */}
                {[135, 170, 210, 250].map((x, i) => (
                    <ellipse key={`drip-t-${i}`} cx={x} cy={151 + (i % 2) * 3} rx="8" ry={8 + (i % 3) * 4}
                             fill="hsl(0, 0%, 97%)"/>
                ))}

                {/* Cherries on top */}
                {[140, 165, 195, 225, 255].map((x, i) => (
                    <g key={`cherry-${i}`}>
                        <circle cx={x} cy={132} r="7" fill="hsl(0, 75%, 45%)"/>
                        <circle cx={x - 2} cy={129} r="2" fill="hsl(0, 0%, 100%)" opacity="0.4"/>
                        <path d={`M${x},125 Q${x + 3},115 ${x + 8},112`} stroke="hsl(120, 40%, 35%)" strokeWidth="1.5"
                              fill="none"/>
                    </g>
                ))}

                {/* Candle */}
                <rect x="190" y="80" width="20" height="55" rx="4" fill="hsl(175, 50%, 45%)"/>
                <rect x="194" y="80" width="4" height="55" rx="2" fill="hsl(175, 50%, 55%)" opacity="0.4"/>

                {/* Flame */}
                <g className="animate-flame" style={{transformOrigin: "200px 68px"}}>
                    <ellipse cx="200" cy="60" rx="16" ry="16" fill="hsl(50, 90%, 60%)" opacity="0.25"/>
                    <ellipse cx="200" cy="65" rx="8" ry="16" fill="hsl(38, 85%, 55%)"/>
                    <ellipse cx="200" cy="67" rx="5" ry="11" fill="hsl(50, 95%, 70%)"/>
                    <ellipse cx="200" cy="69" rx="3" ry="6" fill="white" opacity="0.7"/>
                </g>

                {/* Sparkles */}
                {[
                    {x: 70, y: 130, d: 0},
                    {x: 330, y: 160, d: 0.6},
                    {x: 50, y: 250, d: 1.2},
                    {x: 350, y: 280, d: 0.3},
                ].map((s, i) => (
                    <text
                        key={`sp-${i}`}
                        x={s.x}
                        y={s.y}
                        fontSize="14"
                        fill="hsl(38, 85%, 55%)"
                        textAnchor="middle"
                        style={{
                            animation: `sparkle 2s ease-in-out infinite`,
                            animationDelay: `${s.d}s`,
                        }}
                    >
                        ✦
                    </text>
                ))}
            </svg>
        </div>
    );
};

export default WatercolorCake;
