import heroImg from "@/assets/hero-acai.jpg";
import logo from "@/assets/logo-acai-ki-delicia.png";
import { Clock, ArrowRight, MessageCircle } from "lucide-react";

export const Hero = () => {
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
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Aberto agora · Paes Landim, PI
          </span>

          <h1 className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Explosão de <em className="text-gradient-gold not-italic">sabor</em>
            <br /> em cada{" "}
            <span className="italic font-medium">copo</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
            Açaí, cremes, sorvetes e acompanhamentos vendidos por quilo —
            cremosos, geladinhos e do seu jeito. Todos os dias, das 14h às
            23h, na Rua Licinha Moraes, 20.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform"
            >
              Ver cardápio
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

          <div className="mt-10 inline-flex items-center gap-3 text-sm text-primary-foreground/80">
            <Clock size={18} className="text-accent" />
            <span>
              Todos os dias ·{" "}
              <strong className="text-primary-foreground">14h às 23h</strong>
            </span>
          </div>
        </div>

        {/* Logo showcase */}
        <div className="hidden lg:flex lg:col-span-5 justify-end animate-fade-in">
          <div className="relative reveal-logo">
            <div className="absolute -inset-10 bg-gradient-gold opacity-30 blur-3xl rounded-full animate-pulse" />
            <div className="relative w-80 h-80 grid place-items-center animate-float">
              <img
                src={logo}
                alt="Logomarca Açaí Ki-Delícia"
                width={640}
                height={640}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-2 -left-6 bg-card text-card-foreground px-5 py-3 rounded-full shadow-elegant">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Por kg
              </div>
              <div className="font-display font-bold text-2xl text-primary">
                R$ 70,00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};