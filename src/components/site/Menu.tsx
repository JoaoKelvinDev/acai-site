import { useState } from "react";
import { ComboOrderDialog } from "./ComboOrderDialog";

type Item = { name: string; price: string };
type Combo = { id: string; name: string; desc: string; image?: string; price: string };
type Category = { id: string; label: string; items?: Item[]; combos?: Combo[] };

const categories: Category[] = [
  {
    id: "principal",
    label: "Cardápio",
    items: [
      { name: "Açaí, Sorvete & Cremes (kg)", price: "R$ 64,90 / kg" },
    ],
  },
  {
    id: "complementos",
    label: "Complementos",
    items: [
      { name: "Amendoim", price: "Sob consulta" },
      { name: "Castanha de Cajú", price: "Sob consulta" },
      { name: "Cereja", price: "Sob consulta" },
      { name: "Chocoball", price: "Sob consulta" },
      { name: "Coloreti", price: "Sob consulta" },
      { name: "Creme de Cookies", price: "Sob consulta" },
      { name: "Doce de Leite", price: "Sob consulta" },
      { name: "Fini Banana", price: "Sob consulta" },
      { name: "Fini Dentadura", price: "Sob consulta" },
      { name: "Gotas de Chocolate", price: "Sob consulta" },
      { name: "Granola", price: "Sob consulta" },
      { name: "Granulado Colorido", price: "Sob consulta" },
      { name: "Granulado Crocante", price: "Sob consulta" },
      { name: "Jujuba", price: "Sob consulta" },
      { name: "Leite em Pó", price: "Sob consulta" },
      { name: "Marshmallow", price: "Sob consulta" },
      { name: "Nutela", price: "Sob consulta" },
      { name: "Paçoca", price: "Sob consulta" },
      { name: "Flocos de Cereais", price: "Sob consulta" },
      { name: "Côco Ralado", price: "Sob consulta" },
      { name: "Leite Condensado", price: "Sob consulta" },
      { name: "Kiwi", price: "Sob consulta" },
      { name: "Morango", price: "Sob consulta" },
      { name: "Banana", price: "Sob consulta" },
      { name: "Uva", price: "Sob consulta" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas & Extras",
    items: [
      { name: "Água mineral 500ml", price: "Sob consulta" },
    ],
  },
  {
    // Combos 
    id: "combos",
    label: "Combos",
    combos: [
      {
        id: "combo1",
        name: "Combo Tradicional",
        desc: "Açaí + Banana + Granola + Leite Condensado",
        image: "src/assets/combo-tradicional.jpg",
        price: "Escolha o tamanho do copo",
      },
      {
        id: "Combo2",
        name: "Combo Premium",
        desc: "Açaí + Leite em Pó + Leite Condensado + Kiwi + Granola",
        image: "src/assets/combo-premium.jpg",
        price: "Escolha o tamanho do copo",
      },
      {
        id: "Combo3",
        name: "Combo Top",
        desc: "Açaí + Morango + Leite em Pó + Paçoca + Nutela",
        image: "src/assets/combo-top.jpg",
        price: "Escolha o tamanho do copo",
      },
    ],
  },
];

export const MenuSection = () => {
  const [active, setActive] = useState(categories[0].id);
  const [selectedCombo, setSelectedCombo] = useState<Combo | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const current = categories.find((c) => c.id === active)!;

  const openCombo = (combo: Combo) => {
    setSelectedCombo(combo);
    setDialogOpen(true);
  };

  return (
    <section id="cardapio" className="py-24 sm:py-32 bg-gradient-cream">
      <div className="container">
        <div className="reveal max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
            Cardápio
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">
            Açaí, cremes e sorvetes <em className="font-medium">vendidos por quilo</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma Explosão de  sabor em cada copo. Preço fixo por kg você leva
            quanto quiser e monta com os acompanhamentos da casa.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal mt-10 flex flex-wrap gap-2 sm:gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === c.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-foreground/70 hover:bg-secondary border border-border"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Items */}
<div className="reveal mt-10 grid sm:grid-cols-2 gap-4">
  {current.items && current.items.map((item, i) => (
    <article
      key={item.name}
      className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/60 hover:shadow-elegant transition-all"
      style={{ animationDelay: `${i * 60}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-xl text-primary">
            {item.name}
          </h3>
        </div>
        <span className="shrink-0 px-2 py-0.5 rounded-full border border-accent/40 text-accent font-semibold text-xs sm:text-sm whitespace-nowrap bg-accent/5">
  {item.price}
</span>
      </div>
      <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent v  ia-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  ))}
</div>

        {current.combos && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {current.combos.map((combo) => (
              <article
                key={combo.name}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/60 hover:shadow-elegant transition-all"
              >
                <div className="aspect-video sm:aspect-[4/3] bg-gradient-acai relative overflow-hidden">
                  {combo.image ? (
                    <img
                      src={combo.image}
                      alt={combo.name}
                      loading="lazy"
                      srcSet={`${combo.image}?w=300 300w, ${combo.image}?w=600 600w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary-foreground/80 text-xs sm:text-sm tracking-widest uppercase">
                      Foto em breve
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-primary break-words">
                      {combo.name}
                    </h3>
                    <span className="shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-accent/40 text-accent font-semibold text-xs sm:text-sm whitespace-nowrap bg-accent/5">
                      {combo.price}
                    </span>
                  </div>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {combo.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => openCombo(combo)}
                    className="mt-4 sm:mt-5 w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-soft"
                  >
                    Pedir o {combo.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="reveal mt-10 text-xs text-muted-foreground text-center">
          * Preços sujeitos a pequenas alterações. Confirme pelo WhatsApp.
        </p>
      </div>

      <ComboOrderDialog
        combo={selectedCombo}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
};


