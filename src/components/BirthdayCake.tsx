const BirthdayCake = () => {
    return (
        <div className="relative w-full max-w-xs mx-auto">
            <svg viewBox="0 0 300 350" className="w-full h-auto">
                {/* Candle */}
                <rect x="140" y="60" width="20" height="70" rx="4" fill="hsl(175, 50%, 45%)"/>
                <rect x="144" y="60" width="4" height="70" rx="2" fill="hsl(175, 50%, 55%)" opacity="0.5"/>

                {/* Flame */}
                <g className="animate-flame" style={{transformOrigin: "150px 50px"}}>
                    {/* Outer glow */}
                    <ellipse cx="150" cy="45" rx="18" ry="18" fill="hsl(50, 90%, 60%)" opacity="0.2"/>
                    {/* Flame body */}
                    <ellipse cx="150" cy="48" rx="8" ry="14" fill="hsl(38, 85%, 55%)"/>
                    <ellipse cx="150" cy="50" rx="5" ry="10" fill="hsl(50, 95%, 65%)"/>
                    <ellipse cx="150" cy="52" rx="3" ry="6" fill="hsl(0, 0%, 100%)" opacity="0.8"/>
                </g>

                {/* Frosting drips */}
                {[60, 100, 140, 180, 210].map((x, i) => (
                    <ellipse
                        key={i}
                        cx={x}
                        cy={140 + (i % 2 === 0 ? 5 : 0)}
                        rx="12"
                        ry={12 + (i % 3) * 4}
                        fill="hsl(0, 0%, 97%)"
                    />
                ))}

                {/* Cake top layer */}
                <rect x="55" y="130" width="190" height="50" rx="8" fill="hsl(25, 50%, 35%)"/>
                <rect x="55" y="130" width="190" height="15" rx="8" fill="hsl(0, 0%, 97%)"/>

                {/* Cake middle layer */}
                <rect x="40" y="180" width="220" height="55" rx="8" fill="hsl(25, 45%, 30%)"/>
                <rect x="40" y="180" width="220" height="12" rx="8" fill="hsl(330, 50%, 75%)"/>

                {/* Cake bottom layer */}
                <rect x="25" y="235" width="250" height="60" rx="10" fill="hsl(25, 55%, 33%)"/>
                <rect x="25" y="235" width="250" height="14" rx="10" fill="hsl(0, 0%, 95%)"/>

                {/* Frosting drips on middle */}
                {[70, 120, 160, 200, 230].map((x, i) => (
                    <ellipse
                        key={`mid-${i}`}
                        cx={x}
                        cy={192 + (i % 2 === 0 ? 3 : 0)}
                        rx="10"
                        ry={8 + (i % 3) * 3}
                        fill="hsl(330, 50%, 75%)"
                    />
                ))}

                {/* Frosting drips on bottom */}
                {[55, 95, 135, 175, 215, 245].map((x, i) => (
                    <ellipse
                        key={`bot-${i}`}
                        cx={x}
                        cy={249 + (i % 2 === 0 ? 4 : 0)}
                        rx="10"
                        ry={8 + (i % 3) * 3}
                        fill="hsl(0, 0%, 95%)"
                    />
                ))}

                {/* Dots decoration on top layer */}
                {[80, 110, 140, 170, 200, 220].map((x, i) => (
                    <circle key={`dot-${i}`} cx={x} cy={155} r="4" fill="hsl(330, 70%, 55%)" opacity="0.7"/>
                ))}

                {/* Plate */}
                <ellipse cx="150" cy="298" rx="140" ry="12" fill="hsl(30, 10%, 85%)"/>
                <ellipse cx="150" cy="295" rx="135" ry="10" fill="hsl(30, 10%, 92%)"/>

                {/* Sparkles */}
                {[
                    {x: 80, y: 80, d: 0},
                    {x: 220, y: 100, d: 0.5},
                    {x: 50, y: 170, d: 1},
                    {x: 250, y: 200, d: 1.5},
                ].map((s, i) => (
                    <text
                        key={`sparkle-${i}`}
                        x={s.x}
                        y={s.y}
                        fontSize="16"
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

export default BirthdayCake;
