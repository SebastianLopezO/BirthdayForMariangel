import {useState} from "react";

const GiftReveal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative z-20 py-20 px-4 overflow-hidden bg-birthday-lavender/15">
            <div className="max-w-lg mx-auto flex flex-col items-center text-center relative">
                {/* Gift box */}
                <div
                    className={`relative cursor-pointer select-none transition-transform duration-300 ${!isOpen ? "animate-gift-bounce hover:scale-110" : ""}`}
                    onClick={() => !isOpen && setIsOpen(true)}
                >
                    <div className="w-40 h-32 sm:w-52 sm:h-40 rounded-xl relative overflow-hidden bg-birthday-coral">
                        {/* Polka dots */}
                        {Array.from({length: 12}).map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-primary-foreground/20"
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    top: `${15 + (i % 3) * 30}%`,
                                    left: `${10 + Math.floor(i / 3) * 25}%`,
                                }}
                            />
                        ))}
                        {/* Ribbons */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-birthday-gold/60"/>
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-5 bg-birthday-gold/60"/>
                    </div>

                    {/* Lid */}
                    <div
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-birthday-coral transition-all duration-700 border-b-2 border-birthday-gold/40 ${isOpen ? "-translate-y-16 rotate-12 opacity-0" : ""}`}
                        style={{width: "calc(100% + 16px)", height: "20px"}}
                    />

                    {/* Bow */}
                    <div
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 text-5xl transition-all duration-700 ${isOpen ? "-translate-y-20 scale-0 opacity-0" : ""}`}
                    >
                        🎀
                    </div>
                </div>

                <div
                    className={`mt-8 transition-all duration-700 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
                >
                    <div className="bg-background rounded-2xl p-6 sm:p-8 border-2 border-birthday-gold/30 shadow-lg">
                        <p className="text-2xl sm:text-3xl font-display text-birthday-chocolate">
                            ¡Sorpresa de cumpleaños! 🎁🎉
                        </p>
                        <p className="mt-3 font-body text-lg text-muted-foreground">
                            Eres una gran persona que me cautivó. Que este día esté lleno de alegría, risas y todo lo
                            bonito que mereces, Mary.
                        </p>
                    </div>
                </div>

                {!isOpen && (
                    <p className="mt-8 font-body text-sm animate-pulse-scale text-muted-foreground">
                        Toca el regalo para abrirlo 🎁
                    </p>
                )}
            </div>
        </section>
    );
};

export default GiftReveal;
