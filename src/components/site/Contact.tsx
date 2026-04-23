import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";

const WHATS_NUMBER = "5589994240590";
const WHATS_DEFAULT_MSG =
  "Olá! Vi o site e gostaria de mais informações.";

const subjects = [
  "Fazer um pedido",
  "Tirar uma dúvida",
  "Encomenda para evento",
  "Elogios e sugestões",
  "Outro assunto",
];

// ✅ função de máscara
function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 10) {
    return numbers
      .replace(/^(\d{0,2})/, "($1")
      .replace(/^(\(\d{2})(\d{0,4})/, "$1) $2")
      .replace(/(\d{4})(\d{0,4})$/, "$1-$2");
  }

  return numbers
    .replace(/^(\d{0,2})/, "($1")
    .replace(/^(\(\d{2})(\d{0,5})/, "$1) $2")
    .replace(/(\d{5})(\d{0,4})$/, "$1-$2");
}

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: subjects[0],
    message: "",
  });

  const directLink = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(
    WHATS_DEFAULT_MSG
  )}`;

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const cleanNumber = WHATS_NUMBER.replace(/\D/g, "");

  const text = `Olá, Açaí Ki-Delícia! 🍇

*Nome:* ${form.name || "(não informado)"}
*Telefone:* ${form.phone || "(não informado)"}
*Assunto:* ${form.subject}

${form.message || "(sem mensagem)"}`;

  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;

  // 🔴 delay mínimo resolve bug de mobile (isso é o ponto-chave)
  setTimeout(() => {
    window.location.assign(url);
  }, 50);
};

  return (
    <section
      id="contato"
      className="py-24 sm:py-32 bg-gradient-acai text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(40_80%_55%/0.18),transparent_50%)]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Info */}
        <div className="reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
            Contato
          </span>

          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
            Vem provar o nosso{" "}
            <em className="text-gradient-gold not-italic">açaí</em>.
          </h2>

          <p className="mt-4 text-primary-foreground/80 max-w-md">
            Estamos te esperando! Faça seu pedido pelo WhatsApp ou venha
            conhecer a nossa casa.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 grid place-items-center text-accent shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">
                  Endereço
                </div>
                <div className="font-medium">
                  Rua Licinha Moraes, 20 — Paes Landim, PI
                </div>
                <div className="text-sm text-primary-foreground/70">
                  CEP 64710-000
                </div>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 grid place-items-center text-accent shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">
                  Telefone / WhatsApp
                </div>
                <a
                  href={directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-accent transition-colors"
                >
                  (89) 97400-1661
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 grid place-items-center text-accent shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">
                  Horário
                </div>
                <div className="font-medium">Todos os dias</div>
                <div className="text-sm text-primary-foreground/70">
                  Das 14h00 às 23h00
                </div>
              </div>
            </li>
          </ul>

          <a
            href={directLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform"
          >
            <MessageCircle size={20} />
            Conversar no WhatsApp
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal bg-card text-card-foreground rounded-3xl p-6 sm:p-8 shadow-elegant border border-border"
        >
          <h3 className="font-display text-2xl font-bold text-primary">
            Envie uma mensagem
          </h3>

          <p className="text-sm text-muted-foreground mt-1">
            Preencha abaixo e abriremos o WhatsApp com a sua mensagem pronta.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Nome
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
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
                value={form.phone}
                onChange={(e) => {
                  const raw = e.target.value;
                  const numbers = raw.replace(/\D/g, "").slice(0, 11);
                  const formatted = formatPhone(numbers);

                  setForm({ ...form, phone: formatted });
                }}
                placeholder="(89) 90000-0000"
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Assunto
              </label>
              <select
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Escreva sua mensagem..."
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-colors shadow-soft"
            >
              <Send size={18} />
              Enviar pelo WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};