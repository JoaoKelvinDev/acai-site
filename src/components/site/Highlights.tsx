import { Sparkles, Heart, Clock, MapPin } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Vendido por kg",
    text: "De 100g a 1kg, pesado na hora pra ficar do seu jeito.",
  },
  {
    icon: Heart,
    title: "Do seu jeito",
    text: "Mais de 20 complementos pra montar do seu jeito.",
  },
  {
    icon: Clock,
    title: "Seg-Sáb: 14h-23h · Dom: 15h-23h",
    text: "Aberto todos os dias para matar a vontade.",
  },
  {
    icon: MapPin,
    title: "Rua Licinha Moraes, 20",
    text: "Em Paes Landim/PI  pertinho de você.",
  },
];

export const Highlights = () => {
  return (
    <section className="relative -mt-10 z-20">
      <div className="container">
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 bg-card rounded-3xl p-5 sm:p-8 shadow-elegant border border-border">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex flex-col items-start gap-3 p-4 rounded-2xl hover:bg-secondary transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-acai grid place-items-center text-primary-foreground shadow-soft group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-primary leading-tight">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
