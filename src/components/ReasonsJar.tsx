import { useState } from "react";

const REASONS = [
  "Tu sonrisa de niña pequeña",
  "Tus mejillas siempre rojas",
  "Tus ojos oscuros que brillan en el sol",
  "Tu pelo brillante y suave",
  "Tus labios dulces y frescos",
  "Tu piel suave y fría al tomarme la mano",
  "Tu risa que me llena de alegría",
  "Tu forma bizarra de amar",
  "Cómo me enseñas cosas de sol a sol",
  "Tu carisma inigualable",
  "Esa confianza que me diste",
  "Tus conversaciones eternas de día a noche",
  "Cómo me hablas sin escrúpulos",
  "Tu inteligencia que me enamora",
  "Tu mirada analizadora",
  "Cómo me haces reír sin intentarlo",
  "Tu forma de ser alegre y bromear",
  "Esa seguridad que generas en mí",
  "Tu fragante palidez de nieve",
  "Tu palabra cristalina",
  "Esa dulzura de romántica princesa",
  "Tu determinación ante todo",
  "Cómo compartes tu conocimiento",
  "Tus imperfecciones perfectas",
  "Nuestros momentos íntimos",
  "Cada abrazo que me devuelve la paz",
  "Esas fotos que no quiero borrar",
  "Tu nombre que alegra mi corazón",
  "Todo lo que descubro de ti",
  "Todo tu hermoso ser ♥",
];

const GIFT_COLORS = [
  "hsl(330, 70%, 55%)",
  "hsl(38, 85%, 55%)",
  "hsl(175, 50%, 45%)",
  "hsl(260, 40%, 65%)",
  "hsl(15, 80%, 60%)",
  "hsl(50, 90%, 60%)",
];

const ReasonsJar = () => {
  const [showAll, setShowAll] = useState(false);
  const [revealedIndex, setRevealedIndex] = useState<number | null>(null);

  return (
    <section className="relative z-20 py-20 px-4 bg-birthday-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate text-center mb-2">
          🎁 Razones para celebrarte
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-10">
          Cada regalo esconde una razón... ¡toca uno!
        </p>

        {/* Gift grid */}
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8">
          {REASONS.slice(0, 18).map((reason, i) => (
            <div
              key={i}
              className="relative cursor-pointer group"
              onClick={() => setRevealedIndex(revealedIndex === i ? null : i)}
            >
              <div
                className={`w-full aspect-square rounded-xl flex items-center justify-center text-2xl sm:text-3xl transition-all duration-500 border-2 ${
                  revealedIndex === i
                    ? "scale-110 shadow-lg border-birthday-gold"
                    : "hover:scale-105 border-transparent hover:border-birthday-gold/30"
                }`}
                style={{
                  backgroundColor: `${GIFT_COLORS[i % GIFT_COLORS.length]}20`,
                }}
              >
                {revealedIndex === i ? "💝" : "🎁"}
              </div>

              {/* Tooltip */}
              {revealedIndex === i && (
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-40 bg-background border-2 border-birthday-gold/30 rounded-xl px-4 py-2 shadow-lg whitespace-nowrap animate-bounce-in">
                  <p className="text-xs sm:text-sm font-body text-foreground">{reason}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-2xl font-body font-semibold transition-all duration-300 hover:scale-105 bg-birthday-gold/20 text-birthday-chocolate border-2 border-birthday-gold/30 hover:bg-birthday-gold/30"
          >
            {showAll ? "Ocultar" : "Ver todas las razones"} 🎉
          </button>

          {showAll && (
            <div className="mt-6 grid sm:grid-cols-2 gap-2 text-left animate-fade-in-up max-w-xl mx-auto">
              {REASONS.map((r, i) => (
                <p key={i} className="text-sm font-body text-foreground/80 flex items-center gap-2 py-1">
                  <span className="text-birthday-coral">🎈</span> {r}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReasonsJar;
