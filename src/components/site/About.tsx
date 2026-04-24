import lojaFachadaDia from "@/assets/loja-fachada-dia.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img
              src={lojaFachadaDia}
              alt="Fachada da loja Açaí Ki-Delícia em Paes Landim durante o dia"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card px-6 py-5 rounded-2xl shadow-elegant border border-border max-w-[220px]">
            <div className="font-display text-3xl font-bold text-primary">+5 anos</div>
            <div className="text-sm text-muted-foreground mt-1">
              servindo açaí com carinho em Paes Landim.
            </div>
          </div>
        </div>

        <div className="reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
            Sobre nós
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary leading-tight">
            Uma açaiteria <em className="font-medium">da gente</em>, pra gente daqui.
          </h2>

          <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              A <strong>Açaí Ki-Delícia PL</strong> nasceu do sonho simples de
              oferecer um açaí de verdade — cremoso, gelado e do jeitinho que
              cada cliente gosta — bem aqui em Paes Landim. Começamos pequeno,
              atendendo amigos e vizinhos, e fomos crescendo pelo boca a boca de
              quem provou e voltou.
            </p>
            <p>
              Atendemos cada pedido como se fosse pra alguém da família. Aqui
              você não é "o próximo da fila" — você é o <em>fulano que gosta de
              leite condensado a mais</em>, a <em>menina que pede paçoca todo
              sábado</em>. É essa proximidade que faz da nossa casa um pedacinho
              da cidade.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "100%", l: "Açaí fresco" },
              { v: "+20", l: "Complementos" },
              { v: "23h", l: "Todo dia" },
            ].map((s) => (
              <div
                key={s.l}
                className="text-center p-4 rounded-2xl bg-secondary border border-border"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  {s.v}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
