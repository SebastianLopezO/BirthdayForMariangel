import {useCallback, useEffect, useState} from "react";

const GOAL_TAPS = 20;
const TIME_LIMIT = 10;

const BalloonGame = () => {
    const [taps, setTaps] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
    const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");

    const scale = 0.4 + (taps / GOAL_TAPS) * 0.8;
    const progress = (taps / GOAL_TAPS) * 100;

    useEffect(() => {
        if (gameState !== "playing") return;
        if (timeLeft <= 0) {
            setGameState("lost");
            return;
        }
        const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, gameState]);

    const handleTap = useCallback(() => {
        if (gameState === "idle") {
            setGameState("playing");
            setTaps(1);
            return;
        }
        if (gameState !== "playing") return;

        const newTaps = taps + 1;
        setTaps(newTaps);
        if (newTaps >= GOAL_TAPS) {
            setGameState("won");
        }
    }, [gameState, taps]);

    const reset = () => {
        setTaps(0);
        setTimeLeft(TIME_LIMIT);
        setGameState("idle");
    };

    return (
        <section className="relative z-20 py-20 px-4 bg-birthday-pink/10">
            <div className="max-w-md mx-auto">
                <div className="bg-background rounded-3xl border border-border p-6 sm:p-8 shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-display text-primary text-center mb-2">
                        🎈 ¡Infla el Globo! 🎈
                    </h2>
                    <p className="text-center text-muted-foreground font-body text-sm mb-6">
                        ¡Toca rápido para inflar el globo antes de que se acabe el tiempo!
                    </p>

                    {/* Timer */}
                    <div className="flex justify-center mb-6">
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-display font-bold border-4 transition-colors duration-300 ${
                                timeLeft <= 3 && gameState === "playing"
                                    ? "border-destructive text-destructive"
                                    : "border-birthday-lavender text-birthday-lavender"
                            }`}
                        >
                            {timeLeft}
                        </div>
                    </div>

                    {/* Balloon area */}
                    <div className="flex justify-center items-center h-48 mb-4 relative">
                        {gameState === "won" ? (
                            <div className="text-center animate-bounce-in">
                                <p className="text-5xl mb-2">🎉</p>
                                <p className="text-xl font-display text-primary">¡Lo lograste!</p>
                                <p className="text-muted-foreground font-body text-sm mt-1">
                                    ¡Feliz cumpleaños, Mary! 🎂
                                </p>
                                {/* Burst confetti */}
                                {Array.from({length: 20}).map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute rounded-full"
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            backgroundColor: [
                                                "hsl(330,70%,55%)",
                                                "hsl(38,85%,55%)",
                                                "hsl(175,50%,45%)",
                                                "hsl(260,40%,65%)",
                                                "hsl(50,90%,60%)",
                                            ][i % 5],
                                            left: `${50 + (Math.random() - 0.5) * 80}%`,
                                            top: `${50 + (Math.random() - 0.5) * 80}%`,
                                            animation: `sparkle ${1 + Math.random()}s ease-out infinite`,
                                            animationDelay: `${Math.random() * 0.5}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        ) : gameState === "lost" ? (
                            <div className="text-center animate-bounce-in">
                                <p className="text-5xl mb-2">😅</p>
                                <p className="text-xl font-display text-foreground">¡Se acabó el tiempo!</p>
                                <p className="text-muted-foreground font-body text-sm mt-1">
                                    Pero igual... ¡Feliz cumpleaños! 🎂
                                </p>
                            </div>
                        ) : (
                            /* Balloon made of hearts */
                            <div
                                className="transition-transform duration-150 ease-out cursor-pointer select-none"
                                style={{transform: `scale(${scale})`}}
                                onClick={handleTap}
                            >
                                <svg viewBox="0 0 120 160" width="120" height="160">
                                    {/* Balloon body */}
                                    <ellipse cx="60" cy="65" rx="50" ry="60" fill="hsl(330, 70%, 55%)"/>
                                    <ellipse cx="60" cy="65" rx="50" ry="60" fill="url(#balloon-shine)"/>
                                    {/* Shine */}
                                    <defs>
                                        <radialGradient id="balloon-shine" cx="35%" cy="35%" r="50%">
                                            <stop offset="0%" stopColor="white" stopOpacity="0.3"/>
                                            <stop offset="100%" stopColor="white" stopOpacity="0"/>
                                        </radialGradient>
                                    </defs>
                                    {/* Knot */}
                                    <polygon points="55,125 65,125 60,135" fill="hsl(330, 60%, 45%)"/>
                                    {/* String */}
                                    <path d="M60,135 Q55,145 60,155" stroke="hsl(30,10%,60%)" strokeWidth="1.5"
                                          fill="none"/>
                                    {/* Hearts inside */}
                                    {Array.from({length: Math.min(taps, 15)}).map((_, i) => (
                                        <text
                                            key={i}
                                            x={30 + (i % 4) * 18}
                                            y={35 + Math.floor(i / 4) * 22}
                                            fontSize="14"
                                            fill="hsl(0, 0%, 100%)"
                                            opacity="0.5"
                                            textAnchor="middle"
                                        >
                                            ♥
                                        </text>
                                    ))}
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-3 rounded-full bg-muted mb-4 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-birthday-pink to-birthday-coral transition-all duration-150"
                            style={{width: `${Math.min(progress, 100)}%`}}
                        />
                    </div>

                    {/* Action button */}
                    {gameState === "idle" && (
                        <button
                            onClick={handleTap}
                            className="w-full py-4 rounded-2xl text-lg font-display font-bold transition-all duration-300 hover:scale-105 bg-birthday-coral text-primary-foreground shadow-lg"
                        >
                            ¡INFLAR! 🎈
                        </button>
                    )}

                    {gameState === "playing" && (
                        <>
                            <button
                                onClick={handleTap}
                                className="w-full py-4 rounded-2xl text-lg font-display font-bold transition-all duration-100 active:scale-95 bg-birthday-coral text-primary-foreground shadow-lg animate-pulse-scale"
                            >
                                ¡INFLAR! 🎈 ({taps}/{GOAL_TAPS})
                            </button>
                        </>
                    )}

                    {(gameState === "won" || gameState === "lost") && (
                        <button
                            onClick={reset}
                            className="w-full py-4 rounded-2xl text-lg font-display font-bold transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground shadow-lg"
                        >
                            Jugar de nuevo 🔄
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BalloonGame;
