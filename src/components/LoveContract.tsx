import { useState } from "react";

interface Clause {
  id: number;
  text: string;
  emoji: string;
}

const CLAUSES: Clause[] = [
  { id: 1, text: "Prometo hacerte reír sin fin cada día, como solo nosotros sabemos", emoji: "😂" },
  { id: 2, text: "Me comprometo a celebrar cada cumpleaños tuyo como si fuera el más importante", emoji: "🎂" },
  { id: 3, text: "Acepto seguir hablando contigo de día a noche, como amigos pero queriéndonos más", emoji: "💬" },
  { id: 4, text: "Juro decirte siempre lo hermosa y genial que eres", emoji: "✨" },
  { id: 5, text: "Prometo estar presente en cada momento importante de tu vida", emoji: "🤝" },
  { id: 6, text: "Me comprometo a seguir admirando tu forma de ser única", emoji: "💕" },
  { id: 7, text: "Acepto que me cautivaste y que no hay vuelta atrás", emoji: "💖" },
  { id: 8, text: "Juro quererte más con cada año que cumplas, por siempre", emoji: "∞" },
];

const LoveContract = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [signed, setSigned] = useState(false);
  const allChecked = checked.size === CLAUSES.length;

  const toggle = (id: number) => {
    if (signed) return;
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="relative z-20 py-20 px-4 bg-birthday-lavender/10">
      <div className="max-w-lg mx-auto">
        <div className="bg-background border-2 border-birthday-gold/20 rounded-2xl p-6 sm:p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-birthday-gold/15 border-2 border-birthday-gold/20 mb-4">
              <span className="text-xs font-body tracking-widest uppercase text-birthday-chocolate/70">Documento oficial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate mb-2">
              📜 Contrato de Cumpleaños
            </h2>
            <p className="font-body text-muted-foreground">
              Promesas vigentes desde tu cumpleaños hasta la eternidad
            </p>
          </div>

          {/* Clauses */}
          <div className="space-y-3 mb-8">
            {CLAUSES.map((clause, i) => (
              <div
                key={clause.id}
                onClick={() => toggle(clause.id)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  checked.has(clause.id)
                    ? "bg-birthday-gold/10 border-birthday-gold/30 scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-birthday-cream hover:border-birthday-gold/10"
                } ${signed ? "pointer-events-none" : ""}`}
                style={{
                  animation: "fade-in-up 0.5s ease-out forwards",
                  animationDelay: `${i * 80}ms`,
                  opacity: 0,
                }}
              >
                <div
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                    checked.has(clause.id)
                      ? "bg-birthday-gold border-birthday-gold scale-110"
                      : "border-birthday-gold/40 hover:border-birthday-gold/60"
                  }`}
                >
                  {checked.has(clause.id) && (
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  )}
                </div>

                <p className={`font-body text-sm transition-colors duration-300 ${
                  checked.has(clause.id) ? "text-foreground" : "text-foreground/70"
                }`}>
                  <span className="mr-2">{clause.emoji}</span>
                  {clause.text}
                </p>
              </div>
            ))}
          </div>

          {/* Sign */}
          <div className="text-center">
            {!signed ? (
              <button
                onClick={() => allChecked && setSigned(true)}
                disabled={!allChecked}
                className={`px-8 py-4 rounded-2xl font-body font-bold text-lg transition-all duration-500 ${
                  allChecked
                    ? "bg-birthday-coral text-primary-foreground hover:scale-105 hover:shadow-lg cursor-pointer animate-pulse-scale"
                    : "bg-secondary text-muted-foreground cursor-not-allowed opacity-60"
                }`}
              >
                {allChecked ? "Firmar con cariño ✍️🎂" : `Faltan ${CLAUSES.length - checked.size} promesas...`}
              </button>
            ) : (
              <div className="animate-bounce-in space-y-4">
                <div className="inline-block px-8 py-6 rounded-2xl bg-birthday-gold/10 border-2 border-birthday-gold/30">
                  <p className="text-3xl mb-2">🎉</p>
                  <p className="text-xl font-display text-birthday-chocolate">
                    ¡Contrato firmado!
                  </p>
                  <p className="font-body text-muted-foreground mt-1">
                    Promesas vigentes desde hoy hasta la eternidad ∞
                  </p>
                  <div className="mt-3 font-cursive text-4xl text-birthday-pink/60 rotate-[-5deg]">
                    Mariangel
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Stamp */}
          <div className="mt-6 flex justify-center opacity-30">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-birthday-gold/40 flex items-center justify-center">
              <span className="text-xs font-body text-birthday-gold/60">SELLO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveContract;
