import { useMemo, useState } from "react";
import { Send, Plus, Minus, Truck, Store } from "lucide-react";

const WHATS_NUMBER = "5589974001661";

const SIZES = [
  { id: "300", label: "Copo 300ml" },
  { id: "400", label: "Copo 400ml" },
  { id: "500", label: "Copo 500ml" },
  { id: "700", label: "Copo 700ml" },
  { id: "kg", label: "Por kg (montado na hora)" },
];

const BASES = ["Açaí Tradicional", "Açaí Zero"];

const CREMES = [
  "Creme de Cupuaçu",
  "Creme de Maracujá",
  "Creme de Ninho",
  "Creme de Nutela",
  "Creme de Pistache",
];

const SORVETES = [
  "Abacaxi",
  "Babalu",
  "Bombom Ferrero",
  "Chocolate Belga",
  "Côco",
  "Cookies",
  "Doce de Leite",
  "Flocos",
  "Iogurte/Morango",
  "Lacta",
  "Menta",
  "Morango",
  "Prestígio",
  "Terremoto",
];

const ADICIONAIS = [
  "Amendoim",
  "Castanha de Cajú",
  "Cereja",
  "Chocoball",
  "Coloreti",
  "Creme de Cookies",
  "Doce de Leite",
  "Fini Banana",
  "Fini Dentadura",
  "Gotas de Chocolate",
  "Granola",
  "Granulado Colorido",
  "Granulado Crocante",
  "Jujuba",
  "Leite em Pó",
  "Marshmallow",
  "Nutela",
  "Paçoca",
  "Flocos de Cereais",
  "Côco Ralado",
  "Leite Condensado",
  "Kiwi",
  "Morango",
  "Banana",
  "Uva",
];

type Mode = "retirada" | "delivery";

const Chip = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
      active
        ? "bg-accent text-accent-foreground border-accent shadow-soft"
        : "bg-secondary text-foreground/80 border-border hover:border-accent/50"
    }`}
  >
    {children}
  </button>
);

export const OrderBuilder = () => {
  const [mode, setMode] = useState<Mode>("retirada");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [reference, setReference] = useState("");
  const [size, setSize] = useState(SIZES[2].id);
  const [base, setBase] = useState<string>(BASES[0]);
  const [cremes, setCremes] = useState<string[]>([]);
  const [sorvetes, setSorvetes] = useState<string[]>([]);
  const [adicionais, setAdicionais] = useState<string[]>([]);
  const [qty, setQty] = useState(1);
  const [obs, setObs] = useState("");

  const toggle = (
    list: string[],
    setList: (v: string[]) => void,
    item: string,
    max?: number
  ) => {
    if (list.includes(item)) {
      setList(list.filter((x) => x !== item));
    } else {
      if (max && list.length >= max) return;
      setList([...list, item]);
    }
  };

  const sizeLabel = useMemo(
    () => SIZES.find((s) => s.id === size)?.label ?? "",
    [size]
  );

  const buildMessage = () => {
    const lines: string[] = [];
    lines.push("🍇 *Novo pedido — Açaí Ki-Delícia PL*", "");
    lines.push(`👤 *Nome:* ${name || "(não informado)"}`);
    lines.push(`📱 *Telefone:* ${phone || "(não informado)"}`);
    lines.push(
      `🛵 *Modalidade:* ${mode === "delivery" ? "Delivery" : "Retirar na loja"}`
    );
    if (mode === "delivery") {
      lines.push(`🏠 *Endereço:* ${address || "(não informado)"}`);
      if (reference) lines.push(`🧭 *Ponto de referência:* ${reference}`);
    }
    lines.push("", "──────────────", "*🧾 Pedido*");
    lines.push(`• Quantidade: ${qty}x`);
    lines.push(`• Tamanho: ${sizeLabel}`);
    lines.push(`• Base: ${base}`);
    if (cremes.length) lines.push(`• Cremes: ${cremes.join(", ")}`);
    if (sorvetes.length) lines.push(`• Sorvetes: ${sorvetes.join(", ")}`);
    if (adicionais.length)
      lines.push(`• Adicionais: ${adicionais.join(", ")}`);
    if (obs) lines.push("", `📝 *Observações:* ${obs}`);
    lines.push("", "Obrigado! 💜");
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "delivery" && !address.trim()) {
      alert("Por favor, informe o endereço para entrega.");
      return;
    }
    const text = buildMessage();
    const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal bg-card text-card-foreground rounded-3xl p-6 sm:p-8 shadow-elegant border border-border"
    >
      <h3 className="font-display text-2xl font-bold text-primary">
        Gere seu pedido aqui
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        Monte do seu jeito e enviaremos direto para o nosso WhatsApp.
      </p>

      {/* Modalidade */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Como você quer receber?
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setMode("retirada")}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-semibold text-sm transition-all ${
              mode === "retirada"
                ? "bg-primary text-primary-foreground border-primary shadow-soft"
                : "bg-secondary border-border text-foreground/80 hover:border-primary/50"
            }`}
          >
            <Store size={18} />
            Retirar na loja
          </button>
          <button
            type="button"
            onClick={() => setMode("delivery")}
            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-semibold text-sm transition-all ${
              mode === "delivery"
                ? "bg-primary text-primary-foreground border-primary shadow-soft"
                : "bg-secondary border-border text-foreground/80 hover:border-primary/50"
            }`}
          >
            <Truck size={18} />
            Delivery
          </button>
        </div>
      </div>

      {/* Dados pessoais */}
      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Nome
          </label>
          <input
            required
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Telefone
          </label>
          <input
            required
            type="tel"
            maxLength={20}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(89) 9 0000-0000"
            className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
          />
        </div>
      </div>

      {/* Endereço (delivery) */}
      {mode === "delivery" && (
        <div className="mt-4 grid gap-4 animate-fade-in">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Endereço completo
            </label>
            <input
              required
              maxLength={200}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Rua, número, bairro"
              className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Ponto de referência (opcional)
            </label>
            <input
              maxLength={150}
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Ex.: próximo à praça, casa branca de portão azul"
              className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
            />
          </div>
        </div>
      )}

      <div className="my-6 h-px bg-border" />

      {/* Tamanho */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Tamanho
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <Chip key={s.id} active={size === s.id} onClick={() => setSize(s.id)}>
              {s.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* Base */}
      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Base
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {BASES.map((b) => (
            <Chip key={b} active={base === b} onClick={() => setBase(b)}>
              {b}
            </Chip>
          ))}
        </div>
      </div>

      {/* Cremes */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Cremes
          </label>
          <span className="text-[10px] text-muted-foreground">
            até 2 · {cremes.length}/2
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {CREMES.map((c) => (
            <Chip
              key={c}
              active={cremes.includes(c)}
              onClick={() => toggle(cremes, setCremes, c, 2)}
            >
              {c}
            </Chip>
          ))}
        </div>
      </div>

      {/* Sorvetes */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Sorvetes
          </label>
          <span className="text-[10px] text-muted-foreground">
            até 3 · {sorvetes.length}/3
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {SORVETES.map((s) => (
            <Chip
              key={s}
              active={sorvetes.includes(s)}
              onClick={() => toggle(sorvetes, setSorvetes, s, 3)}
            >
              {s}
            </Chip>
          ))}
        </div>
      </div>

      {/* Adicionais */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Adicionais
          </label>
          <span className="text-[10px] text-muted-foreground">
            {adicionais.length} selecionado(s)
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {ADICIONAIS.map((a) => (
            <Chip
              key={a}
              active={adicionais.includes(a)}
              onClick={() => toggle(adicionais, setAdicionais, a)}
            >
              {a}
            </Chip>
          ))}
        </div>
      </div>

      {/* Quantidade + Observação */}
      <div className="mt-6 grid sm:grid-cols-[160px_1fr] gap-4 items-end">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Quantidade
          </label>
          <div className="mt-1.5 flex items-center bg-secondary border border-border rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-3 hover:bg-muted transition-colors"
              aria-label="Diminuir quantidade"
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              min={1}
              max={20}
              value={qty}
              onChange={(e) =>
                setQty(Math.min(20, Math.max(1, Number(e.target.value) || 1)))
              }
              className="flex-1 text-center bg-transparent py-3 focus:outline-none font-semibold"
            />
            <button
              type="button"
              onClick={() => setQty(Math.min(20, qty + 1))}
              className="px-3 py-3 hover:bg-muted transition-colors"
              aria-label="Aumentar quantidade"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Observações (opcional)
          </label>
          <input
            maxLength={250}
            value={obs}
            onChange={(e) => setObs(e.target.value)}
            placeholder="Ex.: pouco gelo, sem leite condensado..."
            className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-colors shadow-soft"
      >
        <Send size={18} />
        Enviar pedido pelo WhatsApp
      </button>
      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        Você confirma o pedido conosco pelo WhatsApp antes do preparo.
      </p>
    </form>
  );
};
