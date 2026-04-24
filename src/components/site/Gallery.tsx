import lojaInterior from "@/assets/loja-interior.jpg";
import lojaFachada from "@/assets/loja-fachada.jpg";
import lojaFachadaNoite from "@/assets/loja-fachada-noite.jpg";

const photos = [
  {
    src: lojaFachadaNoite,
    alt: "Fachada da Açaí Ki-Delícia iluminada à noite",
  },
  {
    src: lojaInterior,
    alt: "Interior da loja com balcão de acompanhamentos",
  },
  {
    src: lojaFachada,
    alt: "Fachada da loja com mesas externas",
  },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
            Galeria
          </span>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-foreground">
            Conheça nossa <em className="text-gradient-gold not-italic">loja</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um ambiente aconchegante, perfeito para curtir aquele açaí cremoso com quem você gosta.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-elegant aspect-[3/4] reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-primary-foreground text-sm font-medium drop-shadow-lg">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
