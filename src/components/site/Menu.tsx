import { useState } from "react";

type Item = { name: string; desc: string; price: string };
type Category = { id: string; label: string; items: Item[] };

const categories: Category[] = [
  {
    id: "principal",
    label: "Cardápio",
    items: [
      { name: "Açaí (kg)", desc: "Açaí cremoso, fresquinho, pesado na hora. Você escolhe quanto quer levar.", price: "R$ 70,00 / kg" },
      { name: "Sorvete (kg)", desc: "Diversos sabores cremosos, também vendidos por peso.", price: "R$ 60,00 / kg" },
      { name: "Cremes (kg)", desc: "Cremes artesanais — ninho, morango, chocolate e outros sabores da casa.", price: "Sob consulta" },
    ],
  },
  {
    id: "complementos",
    label: "Complementos",
    items: [
      { name: "Granola crocante", desc: "Aveia, mel e castanhas torradas.", price: "Sob consulta" },
      { name: "Leite condensado", desc: "Aquele fio doce que faz toda diferença.", price: "Sob consulta" },
      { name: "Banana & Morango", desc: "Frutas fresquinhas em fatias generosas.", price: "Sob consulta" },
      { name: "Paçoca esfarelada", desc: "Sabor de roça que combina demais.", price: "Sob consulta" },
      { name: "Leite Ninho em pó", desc: "Cremosidade e sabor de infância.", price: "Sob consulta" },
      { name: "Chocolate ao leite", desc: "Calda quentinha por cima do açaí gelado.", price: "Sob consulta" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas & Extras",
    items: [
      { name: "Vitamina de açaí", desc: "Açaí batido com leite e banana.", price: "Sob consulta" },
      { name: "Suco natural", desc: "Frutas da estação — pergunte ao atendente.", price: "Sob consulta" },
      { name: "Água mineral 500ml", desc: "Geladinha.", price: "Sob consulta" },
      { name: "Refrigerante lata", desc: "Coca, Guaraná ou Fanta.", price: "Sob consulta" },
    ],
  },
];

export const MenuSection = () => {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

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
            Explosão de sabor em cada copo. Preço fixo por kg — você leva
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
          {current.items.map((item, i) => (
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
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="shrink-0 px-3 py-1.5 rounded-full bg-accent-soft text-accent-foreground font-bold text-sm whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-xs text-muted-foreground text-center">
          * Preços sujeitos a pequenas alterações. Confirme pelo WhatsApp.
        </p>
      </div>
    </section>
  );
};
