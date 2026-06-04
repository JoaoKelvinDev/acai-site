import { MapPin, Phone, Clock, MessageCircle, Instagram } from "lucide-react";
import { Star } from "lucide-react";

const WHATS_NUMBER = "5589974001661";
const WHATS_DEFAULT_MSG = "Olá! Vi o site e gostaria de mais informações.";
const INSTAGRAM_URL = "https://www.instagram.com/acaikideliciapl/";
const MAPS_URL =
  "https://www.google.com/maps/place/AÇAÍ+KI-DELÍCIA+PL/@-7.7838905,-42.2529178,15z/data=!4m6!3m5!1s0x79d5d961f62d657:0x5f47a47c990b3e6b!8m2!3d-7.7794658!4d-42.2498863!16s%2Fg%2F11z1xz06zt?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D" +
  encodeURIComponent(
    "Açaí Ki-Delícia PL, Rua Licinha Moraes, 20, Paes Landim, PI, 64710-000"
  );

export const Contact = () => {
  const directLink = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(
    WHATS_DEFAULT_MSG
  )}`;

  return (
    <section
      id="contato"
      className="py-24 sm:py-32 bg-gradient-acai text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent)/0.18),transparent_50%)]" />

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
            Faça seu pedido pelo WhatsApp, retire na loja ou peça delivery.
            Estamos te esperando!
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
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-accent transition-colors inline-block"
                >
                  Rua Licinha Moraes, 20 — Paes Landim, PI
                </a>
                <div className="text-sm text-primary-foreground/70">
                  CEP 64710-000 ·{" "}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent transition-colors"
                  >
                    abrir no Google Maps 👈🏽
                  </a>
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
                <Instagram size={20} />
              </div>
                 <div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">
                  Instagram
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-accent transition-colors inline-block"
                >
                  @acaikideliciapl
                </a>
                <div className="text-sm text-primary-foreground/70">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent transition-colors"
                  >
                    abrir no Instagram 👈🏽
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 grid place-items-center text-accent shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest text-primary-foreground/60">
                  Horário de funcionamento
                </div>
                <div className="font-medium">Segunda a sábado · 14h às 23h</div>
                <div className="font-medium">Domingo · 15h às 23h</div>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
            >
              <Instagram size={20} />
              Instagram
            </a>
            
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
            >
              <MapPin size={20} />
              Como chegar
            </a>
          </div>
        </div>

        {/* Order builder */}

      </div>
    </section>
  );
};
