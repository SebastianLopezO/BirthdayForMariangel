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
            Mi carta para ti 💌
          </h2>
          <p className="font-body text-lg sm:text-xl leading-relaxed mb-10 text-muted-foreground">
            22 años de ti, 5 años nuestros. Toca para leer lo que mi corazón quiere decirte.
          </p>

          <button
            onClick={() => setRevealed(!revealed)}
            className="px-10 py-4 rounded-2xl text-lg font-body font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-primary text-primary-foreground animate-glow-pulse"
          >
            {revealed ? "Ocultar carta" : "Leer mi carta"} 💌
          </button>

          <div
            className={`mt-8 transition-all duration-700 ${revealed ? "opacity-100 max-h-[800px] translate-y-0" : "opacity-0 max-h-0 overflow-hidden -translate-y-4"}`}
          >
            <div className="rounded-2xl p-6 sm:p-8 border-2 bg-birthday-cream border-birthday-gold/30 shadow-md">
              <p className="text-5xl mb-4">💌</p>
              <p className="font-display text-2xl sm:text-3xl mb-4 text-birthday-chocolate">
                Para Mariangel, en sus 22
              </p>
              <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Hoy celebro mucho más que un número. Celebro a la mujer inteligente, analítica, sensible y sarcástica que eres. 
                  Esa que cuida a todos antes que a sí misma, la del corazón noble que ha sido lastimado pero sigue amando con fuerza.
                </p>
                <p>
                  Hace 5 años pasamos de ser amigos a ser todo. El tiempo contigo siempre pasa diferente — a veces vuela, a veces se detiene, 
                  pero siempre vale la pena. No somos una pareja perfecta, somos una pareja en construcción, y eso es lo más bonito que tenemos.
                </p>
                <p>
                  Hemos pasado por momentos difíciles, por silencios que pesaban, por malentendidos y por perdón. 
                  Pero nada de eso fue despedida — fue aprender a amarnos mejor. Cada obstáculo nos hizo más fuertes, 
                  más conscientes, más elegidos.
                </p>
                <p>
                  Tú eres mi refugio, mi guía, mi inspiración. No eres perfecta — eres real, y por eso eres perfecta para mí. 
                  Tu risa sana, tu mirada profunda, tu humor que nadie más entiende... todo eso me cautivó y no hay vuelta atrás.
                </p>
                <p>
                  Sigo eligiéndote. Hoy, en calma, sin ruido, con respeto. Te elijo mejor que ayer. 
                  Porque este cumpleaños no celebra solo tu edad — celebra la mujer que eres, el amor que das 
                  y la historia que seguimos escribiendo juntos.
                </p>
                <p className="font-cursive text-2xl text-birthday-chocolate/70 mt-6">
                  Felices 22, mi amor. Te amo ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDetail;
