import { useState } from "react";

const SpecialDetail = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative z-20 py-20 px-4 bg-background">
      <div className="max-w-lg mx-auto text-center relative">
        {/* Decorative border */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-20 flex flex-col justify-between items-center py-4 opacity-40">
          {["🎈", "🎂", "🎁", "🎂", "🎈"].map((e, i) => (
            <span key={i} className="text-lg sm:text-2xl">{e}</span>
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-20 flex flex-col justify-between items-center py-4 opacity-40">
          {["🎈", "🎂", "🎁", "🎂", "🎈"].map((e, i) => (
            <span key={i} className="text-lg sm:text-2xl">{e}</span>
          ))}
        </div>

        <div className="px-12 sm:px-20">
          <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate mb-4">
            ¡Feliz Cumpleaños! 🎂🎉
          </h2>
          <p className="font-body text-lg sm:text-xl leading-relaxed mb-10 text-muted-foreground">
            Hoy celebro el día en que el mundo recibió a una persona increíble
          </p>

          <button
            onClick={() => setRevealed(!revealed)}
            className="px-10 py-4 rounded-2xl text-lg font-body font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-primary text-primary-foreground animate-glow-pulse"
          >
            {revealed ? "Ocultar Sorpresa" : "Ver Sorpresa"} 🎁
          </button>

          <div
            className={`mt-8 transition-all duration-700 ${revealed ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 overflow-hidden -translate-y-4"}`}
          >
            <div className="rounded-2xl p-6 sm:p-8 border-2 bg-birthday-cream border-birthday-gold/30 shadow-md">
              <p className="text-5xl mb-4">💌</p>
              <p className="font-display text-2xl sm:text-3xl mb-3 text-birthday-chocolate">
                Mi carta para ti
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Hoy es un gran día para ti, es tu cumpleaños y te quiero decir un feliz día, que cumplas muchos años más, que sigas creciendo como persona y que sigas siendo esa niña hermosa que conocí. Sé que hace poco te conocí, pero no creo que necesite más tiempo para saber lo genial que eres. Eres una gran mujer que alegra mis días, día tras día hablando como amigos pero queriéndonos más que amigos. No hay nada más genial que hablar contigo, porque me río sin fin. Tu forma de ser no me deja parar de decir cuánto te quiero y lo hermosa que eres. Eres una gran persona que me cautivó, y a pesar de que todo esto fue virtual, desearía que hubiera sido en presencia para demostrarte cuánto te quiero. ¡Feliz cumpleaños, que pases un día genial! Te quiero mucho ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDetail;
