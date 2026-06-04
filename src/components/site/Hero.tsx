import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-acai.jpg";
import logo from "@/assets/logo-acai-ki-delicia.png";
import { Clock, ArrowRight, MessageCircle, Truck } from "lucide-react";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      // day: 0 = domingo, 1 = segunda, ..., 6 = sábado
      const isSunday = day === 0;
      const isWeekday = day >= 1 && day <= 6;

      let open = false;

      if (isWeekday) {
        // Segunda a sábado: 14h às 23h
        open = hour >= 14 && hour < 23;
      } else if (isSunday) {
        // Domingo: 15h às 23h
        open = hour >= 15 && hour < 23;
      }

      setIsOpen(open);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Atualiza a cada minuto

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Logomarca Açaí Ki-Delícia em parede de tijolos com iluminação neon"
          width={1536}
          height={1024}
          className="w-full h-full object-cover"
        />
        {/* Mobile: gradient escuro de baixo p/ cima garante legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30 sm:hidden" />
        {/* Desktop/tablet: overlay roxo uniforme com leve transparência */}
        <div className="absolute inset-0 bg-gradient-acai opacity-70 hidden sm:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(120_61%_50%/0.2),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center py-16">
        <div className="lg:col-span-7 text-primary-foreground animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm text-xs tracking-[0.25em] uppercase">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-accent" : "bg-red-500"}`} />
            {isOpen ? "Aberto agora" : "Fechado"} · Paes Landim, PI
          </span>

          <h1 className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Uma Explosão de <em className="text-gradient-gold not-italic">sabor</em>
            <br /> em cada{" "}
            <span className="italic font-medium">copo</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
            Açaí, cremes, sorvetes e acompanhamentos vendidos por quilo
            cremosos, geladinhos e do seu jeito. Segunda a sábado das 14h às 23h, domingos das 15h às 23h.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#gerar-seu-pedido"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform"
            >
              Gere seu pedido
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 backdrop-blur-md text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle size={18} />
              Falar conosco
            </a>
          </div>



          <div className="mt-6 flex flex-col gap-3 items-start">
            <div className="flex gap-3 items-start p-4 rounded-lg bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <Truck size={20} className="text-accent flex-shrink-0 mt-0.5" />
              
              <div className="text-sm text-primary-foreground">
                <p className="font-semibold">Delivery disponível</p>
                <p className="text-primary-foreground/80 mt-1">Taxa: <strong>R$ 3,00</strong> · A partir das <strong>17h</strong></p>
              </div>
            </div>
          </div>
        </div>

{/* Logo e Preço */}
{/* Removemos o 'hidden' e trocamos 'lg:col-span-5' por uma estrutura que funcione em todos os tamanhos */}
<div className="flex flex-col items-center lg:grid lg:col-span-5 lg:justify-end animate-fade-in mt-10 lg:mt-0">
  <div className="relative reveal-logo">
    {/* Efeito de brilho ao fundo - Ajustado o tamanho para mobile (w-64) e desktop (lg:w-80) */}
    <div className="absolute -inset-10 bg-gradient-gold opacity-30 blur-3xl rounded-full animate-pulse" />
    
    <div className="relative w-64 h-64 lg:w-80 lg:h-80 grid place-items-center animate-float">
      <img
        src={logo}
        alt="Logomarca Açaí Ki-Delícia"
        className="w-full h-full object-contain drop-shadow-2xl"
      />
    </div>

    {/* Badge de Preço - Posicionamento ajustado para não cortar no mobile */}
  </div>
</div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};