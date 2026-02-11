import { useState } from "react";
import { Check, X } from "lucide-react";

const ValentineMission = () => {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  return (
    <section className="relative z-20 py-20 px-4 overflow-hidden bg-birthday-gold/10">
      <div className="max-w-md mx-auto text-center relative">
        {/* Decorative balloons */}
        <div className="absolute -top-4 left-4 text-3xl rotate-[-15deg] opacity-40 animate-balloon-float">🎈</div>
        <div className="absolute -top-2 right-6 text-2xl rotate-[10deg] opacity-30 animate-balloon-float" style={{ animationDelay: "0.5s" }}>🎈</div>
        <div className="absolute bottom-8 left-8 text-xl rotate-[20deg] opacity-25">🎉</div>

        <div className="mb-8 text-6xl">🎂</div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 text-birthday-chocolate">
          ¿Seguimos eligiéndonos otro año más? 💕
        </h2>

        {answer === null ? (
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setAnswer("yes")}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-body font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-birthday-coral text-primary-foreground"
            >
              <Check size={20} />
              ¡Siempre!
            </button>
            <button
              onClick={() => setAnswer("yes")}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-body font-semibold transition-all duration-300 hover:scale-105 bg-secondary text-secondary-foreground border-2 border-border"
            >
              <X size={20} />
              No
            </button>
          </div>
        ) : (
          <div className="animate-bounce-in">
            <div className="inline-block px-8 py-6 rounded-2xl bg-background border-2 border-birthday-gold/30 shadow-lg">
              <p className="text-3xl mb-2">🥰</p>
              <p className="text-xl font-display text-birthday-chocolate">
                5 años y los que faltan ∞
              </p>
              <p className="font-body mt-2 text-muted-foreground">
                Hemos aprendido a amarnos mejor, y eso es lo más bonito que tenemos 💕
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center gap-3">
          {["🎈", "⭐", "🎈", "⭐", "🎈"].map((emoji, i) => (
            <span key={i} className="text-xl opacity-40">{emoji}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValentineMission;
