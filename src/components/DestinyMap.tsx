import {useState} from "react";

interface Destination {
    id: number;
    name: string;
    description: string;
    emoji: string;
    x: number;
    y: number;
}

const DESTINATIONS: Destination[] = [
    {
        id: 1,
        emoji: "💫",
        name: "El día que te conocí",
        description: "Hace poco te conocí, pero no necesito más tiempo para saber lo genial que eres ✨",
        x: 25,
        y: 35
    },
    {
        id: 2,
        emoji: "💬",
        name: "Nuestras primeras conversaciones",
        description: "Hablando como amigos pero queriéndonos más que amigos, de día a noche sin parar.",
        x: 55,
        y: 25
    },
    {
        id: 3,
        emoji: "🎂",
        name: "11 de febrero - Tu cumpleaños",
        description: "El día que el mundo recibió a una persona increíble. ¡Hoy lo celebramos!",
        x: 75,
        y: 45
    },
    {
        id: 4,
        emoji: "😂",
        name: "Las risas infinitas",
        description: "No hay nada más genial que hablar contigo, porque me río sin fin.",
        x: 40,
        y: 60
    },
    {
        id: 5,
        emoji: "💕",
        name: "Lo que me cautivó de ti",
        description: "Tu forma de ser, tu hermosura, tu personalidad... todo de ti me cautivó.",
        x: 65,
        y: 70
    },
    {
        id: 6,
        emoji: "🎈",
        name: "Los cumpleaños que vendrán",
        description: "Quiero estar presente en cada año nuevo de tu vida, celebrándote siempre ∞",
        x: 20,
        y: 65
    },
];

const DestinyMap = () => {
    const [activeDest, setActiveDest] = useState<Destination | null>(null);

    return (
        <section className="relative z-20 py-20 px-4 bg-birthday-cream">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate text-center mb-3">
                    🗺️ Mapa de Nuestros Momentos
                </h2>
                <p className="text-center text-muted-foreground font-body text-lg mb-12">
                    Cada pin es un momento que nos une... toca uno
                </p>

                <div className="relative">
                    <div
                        className="relative w-full aspect-[16/9] rounded-2xl border-2 border-birthday-gold/20 bg-background overflow-hidden shadow-md">
                        {/* Grid */}
                        {[...Array(8)].map((_, i) => (
                            <div key={`h-${i}`} className="absolute left-0 right-0 border-t border-birthday-gold/5"
                                 style={{top: `${(i + 1) * 11}%`}}/>
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <div key={`v-${i}`} className="absolute top-0 bottom-0 border-l border-birthday-gold/5"
                                 style={{left: `${(i + 1) * 8}%`}}/>
                        ))}

                        {/* Abstract shapes */}
                        <div
                            className="absolute w-[30%] h-[40%] top-[15%] left-[10%] rounded-[60%_40%_50%_70%] bg-birthday-lavender/10 border border-birthday-lavender/15"/>
                        <div
                            className="absolute w-[25%] h-[35%] top-[20%] left-[45%] rounded-[40%_60%_30%_70%] bg-birthday-mint/10 border border-birthday-mint/15"/>
                        <div
                            className="absolute w-[20%] h-[30%] top-[45%] left-[30%] rounded-[50%_50%_40%_60%] bg-birthday-coral/10 border border-birthday-coral/15"/>

                        {/* Path */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100"
                             preserveAspectRatio="none">
                            <path
                                d="M25,35 Q35,20 55,25 Q65,30 75,45 Q70,55 65,70 Q50,75 40,60 Q30,55 20,65"
                                fill="none"
                                stroke="hsl(38, 85%, 55%)"
                                strokeWidth="0.3"
                                strokeDasharray="1.5,1"
                                opacity="0.4"
                            />
                        </svg>

                        {/* Pins */}
                        {DESTINATIONS.map((dest) => (
                            <div
                                key={dest.id}
                                className="absolute cursor-pointer group z-10"
                                style={{left: `${dest.x}%`, top: `${dest.y}%`, transform: "translate(-50%, -50%)"}}
                                onClick={() => setActiveDest(activeDest?.id === dest.id ? null : dest)}
                            >
                                <div
                                    className={`absolute inset-0 w-8 h-8 -translate-x-1 -translate-y-1 rounded-full transition-all duration-500 ${
                                        activeDest?.id === dest.id ? "bg-birthday-gold/30 scale-150 animate-pulse-scale" : "bg-transparent"
                                    }`}
                                />
                                <div
                                    className={`relative text-2xl transition-all duration-300 hover:scale-150 ${
                                        activeDest?.id === dest.id ? "scale-125" : ""
                                    }`}
                                    style={{
                                        animation: `gentle-bounce ${2 + dest.id * 0.2}s ease-in-out infinite`,
                                        animationDelay: `${dest.id * 0.3}s`,
                                    }}
                                >
                                    {dest.emoji}
                                </div>
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12 whitespace-nowrap bg-background border-2 border-birthday-gold/30 rounded-xl px-3 py-1.5 text-xs font-body font-semibold text-birthday-chocolate pointer-events-none shadow-md">
                                    {dest.name}
                                </div>
                            </div>
                        ))}

                        {/* Compass */}
                        <div
                            className="absolute bottom-3 right-3 w-10 h-10 rounded-full border-2 border-birthday-gold/20 bg-background flex items-center justify-center">
                            <span className="text-xs font-display text-birthday-gold">♥N</span>
                        </div>
                    </div>

                    {/* Selected info */}
                    <div
                        className={`mt-6 transition-all duration-500 ${activeDest ? "opacity-100 translate-y-0 max-h-40" : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"}`}>
                        {activeDest && (
                            <div
                                className="text-center bg-background border-2 border-birthday-gold/20 rounded-2xl p-6 animate-bounce-in shadow-md">
                                <h3 className="text-xl font-display text-birthday-chocolate mb-2">{activeDest.emoji} {activeDest.name}</h3>
                                <p className="font-body text-muted-foreground">{activeDest.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinyMap;
