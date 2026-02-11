import { useState, useRef } from "react";

const CupidMail = () => {
  const [accepted, setAccepted] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodgeButton = () => {
    if (!noButtonRef.current || !containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 120;
    const maxY = 80;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    noButtonRef.current.style.transform = `translate(${newX - maxX / 2}px, ${newY - maxY / 2}px)`;
  };

  return (
    <section className="relative z-20 py-20 px-4 overflow-hidden bg-birthday-mint/20">
      <div className="max-w-lg mx-auto text-center relative">
        <div className="mb-8 text-6xl animate-gentle-bounce">
          🎂
        </div>

        <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate mb-3">
          Lo que hemos superado 🕊️
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10">
          Momentos difíciles, silencios, perdón... pero aquí seguimos
        </p>

        {!accepted ? (
          <div ref={containerRef} className="relative min-h-[120px] flex items-center justify-center gap-6">
            <button
              onClick={() => setAccepted(true)}
              className="px-10 py-4 rounded-2xl text-xl font-body font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl z-10 bg-birthday-coral text-primary-foreground"
            >
              Descubrir 💌
            </button>
            <button
              ref={noButtonRef}
              onMouseEnter={dodgeButton}
              onTouchStart={dodgeButton}
              className="px-8 py-4 rounded-2xl text-lg font-body font-semibold transition-all duration-300 z-10 bg-secondary text-secondary-foreground"
            >
              No 😅
            </button>
          </div>
        ) : (
          <div className="animate-bounce-in">
            <div className="inline-block px-10 py-8 rounded-3xl bg-background border-2 border-birthday-gold/30 shadow-lg max-w-md">
              <p className="text-4xl mb-3">🕊️</p>
              <p className="text-2xl font-display text-birthday-chocolate">
                Nuestro amor maduró
              </p>
              <p className="text-muted-foreground font-body mt-2 leading-relaxed">
                Pasamos por pausas, malentendidos y silencios. Pero no porque dejamos de querernos, sino porque aprendimos a amar mejor. Cada obstáculo nos hizo más fuertes, más conscientes y más elegidos. Aquí seguimos, con orgullo. 💕
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CupidMail;
