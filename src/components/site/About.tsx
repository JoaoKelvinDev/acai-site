
export const About = () => {
  return (
    <section id="sobre" className="py-8 sm:py-12 bg-background scroll-mt-20">
      <div className="container grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
        </div>
        
        <div className="reveal">

          <h2 className="mt-2 font-display text-lg sm:text-2xl font-bold text-primary leading-tight">
            Consagre ao Senhor tudo o que <em className="font-medium">você faz,</em>, e os seus planos serão bem-sucedidos. <span className="text-gradient-gold text-xs text-muted-foreground font-medium">Provérbios 16:3</span>
          </h2>
        </div>
      </div>
    </section>
  );
};