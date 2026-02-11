import { useState } from "react";
import FallingHearts from "@/components/FallingHearts";
import HeartTree from "@/components/HeartTree";
import LoveCounter from "@/components/LoveCounter";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import MessageCard from "@/components/MessageCard";
import ReasonsJar from "@/components/ReasonsJar";
import GiftReveal from "@/components/GiftReveal";
import ValentineMission from "@/components/ValentineMission";
import CupidMail from "@/components/CupidMail";
import SpecialDetail from "@/components/SpecialDetail";
import DestinyMap from "@/components/DestinyMap";
import WatercolorCake from "@/components/WatercolorCake";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <EnvelopeIntro onOpen={() => setIsOpen(true)} />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <FallingHearts />

      {/* Hero */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="animate-fade-in-up">
          <p className="text-muted-foreground font-body text-lg mb-2">11 de febrero · Cumpleaños #22</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-birthday-chocolate mb-4 animate-gentle-bounce">
            ¡Feliz Cumpleaños, Mariangel! 🎂
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-cursive text-4xl max-w-lg mx-auto">
            22 años de una mujer increíble, y 5 años eligiéndonos
          </p>
        </div>
        <div className="mt-8 text-5xl animate-pulse-scale">🎉🎂🎈</div>
      </section>

      {/* Watercolor Cake + Message */}
      <section className="relative z-20 py-16 px-4 bg-birthday-cream">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate mb-4">
              Un día como hoy, hace 22 años 🎂
            </h2>
            <p className="text-foreground/80 font-body text-lg leading-relaxed">
              El mundo recibió a una mujer inteligente, sensible, sarcástica y con un corazón noble.
              Alguien que sin proponérselo se convirtió en mi refugio, mi guía y mi inspiración.
              5 años después, sigo eligiéndote cada día.
            </p>
          </div>
          <WatercolorCake />
        </div>
      </section>

      {/* Counter */}
      <section className="relative z-20 py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <LoveCounter />
        </div>
      </section>

      {/* Messages - Razones para celebrarte */}
      <section className="relative z-20 py-16 px-4 bg-birthday-cream">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate text-center mb-8">
            🎉 Razones para celebrar tu vida
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <MessageCard title="Tu amor que elige quedarse" message="No somos perfectos, pero somos reales. Hemos aprendido a amarnos mejor, a callar cuando hay que callar y a hablar cuando el silencio pesa. 5 años eligiéndonos, y aquí seguimos." delay={0} variant="default" />
            <MessageCard title="Tu forma de amar sin ruido" message="Amas con acciones, con presencia, con gestos que valen más que mil palabras. Tu humor bizarro, tu sarcasmo, tu inteligencia... todo eso es tu forma de decir 'te quiero'." delay={200} variant="accent" />
            <MessageCard title="Lo que hemos superado juntos" message="Momentos difíciles, silencios, malentendidos, perdón mutuo. Cada obstáculo nos hizo más fuertes. No celebro solo tus 22, celebro la mujer que eres después de todo lo vivido." delay={400} variant="elegant" />
            <MessageCard title="Lo que sigo eligiendo" message="Elegirte hoy, en calma, sin ruido, con respeto. Elegirte mejor que ayer. Porque crecer contigo vale cada segundo, cada risa y cada lágrima que compartimos." delay={600} variant="default" />
          </div>
        </div>
      </section>

      {/* Reasons */}
      <ReasonsJar />

      {/* Birthday Cake (simple) */}
      <section className="relative z-20 py-16 px-4 bg-background">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display text-birthday-chocolate mb-2">
            Tu Pastel 🎂
          </h2>
          <p className="text-muted-foreground font-body mb-6">22 velas, una por cada año que el mundo es mejor contigo</p>
          <HeartTree />
        </div>
      </section>

      {/* Gift Reveal */}
      <GiftReveal />

      {/* Mission */}
      <ValentineMission />

      {/* Cupid Mail */}
      <CupidMail />

      {/* Special Detail */}
      <SpecialDetail />

      {/* Destiny Map */}
      <DestinyMap />

      {/* Final */}
      <section className="relative z-20 py-20 px-4 text-center bg-birthday-cream">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-display text-birthday-chocolate mb-6">
            Felices 22, mi amor 🎂🎉
          </h2>
          <p className="text-foreground/80 font-body text-xl leading-relaxed mb-8">
            Este cumpleaños no celebra solo tu edad, celebra la mujer que eres,
            el amor que das y la historia que seguimos escribiendo juntos.
            Hemos aprendido a amarnos mejor, y aquí seguimos.
            Te amo, Mariangel ❤️
          </p>
          <div className="text-6xl animate-pulse-scale">🎂🎈🎁</div>
          <p className="mt-6 text-muted-foreground font-body text-sm">
            5 años de amor que se elige, y toda una vida por delante ∞
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
