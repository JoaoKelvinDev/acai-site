import { useMemo, useState } from "react";
import { Send, Plus, Minus, Truck, Store, AlertCircle } from "lucide-react";

const WHATS_NUMBER = "5589974001661";
const DELIVERY_FEE = 3.00;
const DELIVERY_START_HOUR = 17;

const SIZES = [
  { id: "300", label: "Copo 300ml" },
  { id: "400", label: "Copo 400ml" },
  { id: "500", label: "Copo 500ml" },
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
  "Tapioca",
  "Cookies",
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
  "Leitinho",
  "Paçoca",
  "Flocos de Cereais",
  "Côco Ralado",
  "Leite Condensado",
  "Kiwi",
  "Morango",
  "Banana",
  "Mel"
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
  const [base, setBase] = useState<string>("");
  const [cremes, setCremes] = useState<string[]>([]);
  const [sorvetes, setSorvetes] = useState<string[]>([]);
  const [adicionais, setAdicionais] = useState<string[]>([]);
  const [qty, setQty] = useState(1);
  const [obs, setObs] = useState("");
  
  // Novos estados para Pagamento
  const [payment, setPayment] = useState<string>("Pix");
  const [change, setChange] = useState("");

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
    lines.push("\u{2705}  *Novo pedido - Açaí Ki-Delícia PL*", "");
    lines.push(`\u{1F464} *Nome:* ${name || "(não informado)"}`);
    lines.push(`\u{1F4F1} *Telefone:* ${phone || "(não informado)"}`);
    lines.push(
      `\u{1F6F5} *Modalidade:* ${mode === "delivery" ? "Delivery" : "Retirar na loja"}`
    );
    if (mode === "delivery") {
      lines.push(`\u{1F3E0} *Endereço:* ${address || "(não informado)"}`);
      if (reference) lines.push(`\u{1F4CD} *Ponto de referência:* ${reference}`);
      lines.push(`\u{1F6A8} *Taxa de Entrega:* R$ ${DELIVERY_FEE.toFixed(2)}`);
    }
    
    lines.push("", "------------------------------", "*\u{1F4D1} Pedido*");
    lines.push(`• Quantidade: ${qty}x`);
    lines.push(`• Tamanho: ${sizeLabel}`);
    if (base) lines.push(`• Base: ${base}`);
    if (cremes.length) lines.push(`• Cremes: ${cremes.join(", ")}`);
    if (sorvetes.length) lines.push(`• Sorvetes: ${sorvetes.join(", ")}`);
    if (adicionais.length) lines.push(`• Adicionais: ${adicionais.join(", ")}`);
    
    // Parte do Pagamento na Mensagem
    lines.push("", `\u{1F4B3} *Pagamento:* ${payment}`);
    if (payment === "Dinheiro" && change) {
      lines.push(`\u{1F4B5} *Troco para:* ${change}`);
    }

    if (obs) lines.push("", `\u{1F4DD} *Observações:* ${obs}`);
    lines.push("", "Obrigado! \u{1F49C}");    
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
        {mode === "delivery" && (
          <div className="mt-3 flex gap-2 items-start p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg">
            <AlertCircle size={18} className="text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <p className="font-semibold">Taxa de entrega: R$ {DELIVERY_FEE.toFixed(2)}</p>
              <p className="text-xs mt-1">Deliveries a partir das {DELIVERY_START_HOUR}h</p>
            </div>
          </div>
        )}
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
            maxLength={11}
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="89 0000-0000"
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

      {/* Tamanho, Base, Cremes, Sorvetes e Adicionais (Mantidos igual) */}
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tamanho</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <Chip key={s.id} active={size === s.id} onClick={() => setSize(s.id)}>{s.label}</Chip>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Base</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {BASES.map((b) => (
            <Chip key={b} active={base === b} onClick={() => setBase(base === b ? "" : b)}>{b}</Chip>
          ))}
        </div>
      </div>

      {/* Cremes */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cremes</label>
          <span className="text-[10px] text-muted-foreground">{cremes.length}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {CREMES.map((c) => (
            <Chip key={c} active={cremes.includes(c)} onClick={() => toggle(cremes, setCremes, c,)}>{c}</Chip>
          ))}
        </div>
      </div>

      {/* Sorvetes */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sorvetes</label>
          <span className="text-[10px] text-muted-foreground">{sorvetes.length}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {SORVETES.map((s) => (
            <Chip key={s} active={sorvetes.includes(s)} onClick={() => toggle(sorvetes, setSorvetes, s,)}>{s}</Chip>
          ))}
        </div>
      </div>

      {/* Adicionais */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Adicionais</label>
          <span className="text-[10px] text-muted-foreground">{adicionais.length}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {ADICIONAIS.map((a) => (
            <Chip key={a} active={adicionais.includes(a)} onClick={() => toggle(adicionais, setAdicionais, a)}>{a}</Chip>
          ))}
        </div>
      </div>

      {/* Pagamento (NOVO) */}
      <div className="mt-6">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Forma de Pagamento
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Pix", "Cartão", "Dinheiro"].map((m) => (
            <Chip key={m} active={payment === m} onClick={() => setPayment(m)}>
              {m}
            </Chip>
          ))}
        </div>
        {payment === "Dinheiro" && (
          <input
            type="text"
            value={change}
            onChange={(e) => setChange(e.target.value)}
            placeholder="Troco para quanto?"
            className="mt-3 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
          />
        )}
      </div>

      {/* Quantidade + Observação */}
      <div className="mt-6 grid sm:grid-cols-[160px_1fr] gap-4 items-end">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quantidade</label>
          <div className="mt-1.5 flex items-center bg-secondary border border-border rounded-xl overflow-hidden">
            <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-3 hover:bg-muted"><Minus size={16} /></button>
            <input type="number" value={qty} readOnly className="flex-1 text-center bg-transparent py-3 focus:outline-none font-semibold" />
            <button type="button" onClick={() => setQty(Math.min(20, qty + 1))} className="px-3 py-3 hover:bg-muted"><Plus size={16} /></button>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Observações (opcional)</label>
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
    </form>
  );
};