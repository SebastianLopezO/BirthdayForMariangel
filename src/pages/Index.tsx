import { useState } from "react";
import FallingHearts from "@/components/FallingHearts";
import HeartTree from "@/components/HeartTree";
import LoveCounter from "@/components/LoveCounter";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import MessageCard from "@/components/MessageCard";
import ReasonsJar from "@/components/ReasonsJar";
import GiftReveal from "@/components/GiftReveal";
import HeartMonitor from "@/components/HeartMonitor";
import ValentineMission from "@/components/ValentineMission";
import CupidMail from "@/components/CupidMail";
import SpecialDetail from "@/components/SpecialDetail";
import DestinyMap from "@/components/DestinyMap";
import LoveContract from "@/components/LoveContract";


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
          <p className="text-muted-foreground font-elegant italic text-lg mb-2">¡Hoy es tu día especial!</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-primary mb-4 animate-gentle-bounce">
            ¡Feliz Cumpleaños, Mariangel! 🎂
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-elegant italic max-w-lg mx-auto">
            Hoy celebro tu existencia, la alegría que traes a mi vida y lo hermosa que eres por dentro y por fuera ♥
          </p>
        </div>
        <div className="mt-8 text-4xl animate-pulse-heart">🎉🎂🎈</div>
      </section>

      {/* Heart Tree Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-display text-primary mb-4">
              Un día como hoy 🎂
            </h2>
            <p className="text-foreground/85 font-elegant text-lg leading-relaxed italic">
              Llegó al mundo una persona increíble que alegra mis días. 
              Hace poco te conocí, pero no necesito más tiempo para saber lo genial que eres.
              Eres una gran mujer que me cautivó desde el primer momento.
            </p>
          </div>
          <HeartTree />
        </div>
      </section>

      {/* Counter Section */}
      <section className="relative z-20 py-16 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <LoveCounter />
        </div>
      </section>

      {/* Messages Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display text-primary text-center mb-8">
            Razones para celebrarte 🎉
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <MessageCard title="Tu sonrisa que alegra todo" message="Esa sonrisa radiante que me hace feliz desde la distancia. Me río sin fin cada vez que hablamos, y eso es un regalo que me das todos los días." delay={0} variant="default" />
            <MessageCard title="Lo genial que eres" message="No creo que necesite más tiempo para saber lo genial que eres. Eres una gran mujer que alegra mis días, día tras día hablando como amigos pero queriéndonos más que amigos." delay={200} variant="accent" />
            <MessageCard title="Tu forma de ser única" message="Tu forma de ser no me deja parar de decir cuánto te quiero y lo hermosa que eres. Eres una gran persona que me cautivó desde el primer momento." delay={400} variant="elegant" />
            <MessageCard title="Lo que deseo para ti" message="Que cumplas muchos años más, que sigas creciendo como persona y que sigas siendo esa niña hermosa que conocí. Mereces todo lo bonito del mundo." delay={600} variant="default" />
          </div>
        </div>
      </section>

      {/* Reasons Jar */}
      <ReasonsJar />

      {/* 1. Gift Reveal */}
      <GiftReveal />

      {/* 2. Heart Monitor */}
      <HeartMonitor />

      {/* 3. Valentine Mission */}
      <ValentineMission />

      {/* 4. Cupid Mail */}
      <CupidMail />

      {/* 5. Special Detail */}
      <SpecialDetail />

      {/* Destiny Map */}
      <DestinyMap />

      {/* Love Contract */}
      <LoveContract />


      {/* Final Message */}
      <section className="relative z-20 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-display text-primary mb-6">
            ¡Feliz Cumpleaños, Mary! 🎂🎉
          </h2>
          <p className="text-foreground/85 font-elegant text-xl leading-relaxed italic mb-8">
            Hoy es un gran día para ti, es tu cumpleaños y te quiero decir un feliz día. 
            No hay nada más genial que hablar contigo, porque me río sin fin. 
            A pesar de que todo esto fue virtual, desearía que hubiera sido en presencia para demostrarte cuánto te quiero. 
            Te quiero mucho ❤️
          </p>
          <div className="text-6xl animate-pulse-heart">🎂🎈🎁</div>
          <p className="mt-6 text-muted-foreground font-body text-sm">
            Que este nuevo año de vida te traiga todo lo hermoso que mereces ∞
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
