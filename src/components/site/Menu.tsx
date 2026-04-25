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
    id: "combos",
    label: "Combos",
    combos: [
      {
        id: "combo1",
        name: "Combo Tropical",
        desc: "Açaí 700ml + Granola crocante + Leite condensado + Morango. Um combo pronto e delicioso, sem necessidade de escolher!",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bgGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fff5e1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ffe8cc;stop-opacity:1' /%3E%3C/linearGradient%3E%3CradialGradient id='acaiGrad' cx='50%25' cy='30%25' r='60%25'%3E%3Cstop offset='0%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236b21a8;stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bgGrad)'/%3E%3Cg id='bowl'%3E%3Cellipse cx='200' cy='150' rx='90' ry='70' fill='url(%23acaiGrad)' opacity='0.9'/%3E%3Cpath d='M 110 150 Q 110 210 200 220 Q 290 210 290 150' fill='%235d3a9b' opacity='0.6'/%3E%3Cpath d='M 130 140 Q 200 120 270 140' stroke='%23fff' stroke-width='2' fill='none' opacity='0.3'/%3E%3C/g%3E%3Cg id='toppings'%3E%3Ccircle cx='160' cy='130' r='12' fill='%23dc2626'/%3E%3Ccircle cx='240' cy='135' r='11' fill='%23ea580c'/%3E%3Ccircle cx='200' cy='125' r='10' fill='%23facc15'/%3E%3Crect x='175' y='145' width='15' height='8' fill='%23b45309' rx='2'/%3E%3Ccircle cx='220' cy='148' r='8' fill='%23ca8a04'/%3E%3C/g%3E%3Cg id='spoon'%3E%3Cpath d='M 310 180 L 330 200 Q 335 205 330 210 Q 320 215 315 210 Z' fill='%23c4b5fd' stroke='%235b21b6' stroke-width='1.5'/%3E%3Cpath d='M 330 200 L 350 220' stroke='%23a78bfa' stroke-width='3' stroke-linecap='round'/%3E%3C/g%3E%3Cg id='leaves'%3E%3Cpath d='M 60 80 Q 50 60 70 50 Q 85 55 80 75 Z' fill='%2316a34a' opacity='0.7'/%3E%3Cpath d='M 330 90 Q 350 70 360 50 Q 365 70 345 85 Z' fill='%2322c55e' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E",
        price: "R$ 49,90",
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
            Explosão de um sabor em cada copo. Preço fixo por kg — você leva
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


