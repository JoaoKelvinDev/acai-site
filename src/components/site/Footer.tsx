import { Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-acai-ki-delicia.png";

const INSTAGRAM_URL = "https://www.instagram.com/acaikideliciapl/";
const WHATS_DEFAULT_MSG = "Olá! Vi o site e gostaria de mais informações.";
const MAPS_URL =
  "https://www.google.com/maps/place/AÇAÍ+KI-DELÍCIA+PL/@-7.7838905,-42.2529178,15z/data=!4m6!3m5!1s0x79d5d961f62d657:0x5f47a47c990b3e6b!8m2!3d-7.7794658!4d-42.2498863!16s%2Fg%2F11z1xz06zt?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D" +
  encodeURIComponent("Açaí Ki-Delícia PL, Rua Licinha Moraes, 20, Paes Landim, PI, 64710-000");
const WHATS_URL = `https://wa.me/5589974001661?text=${encodeURIComponent(WHATS_DEFAULT_MSG)}`;

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-10">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between text-sm">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logomarca Açaí Ki-Delícia"
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="font-display font-bold text-primary-foreground">
              Açaí Ki-Delícia PL
            </div>
            <div className="text-xs text-primary-foreground/60">
              Paes Landim · Piauí
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Açaí Ki-Delícia"
            className="w-10 h-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir no Google Maps"
            className="w-10 h-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MapPin size={18} />
          </a>
          <a
            href={WHATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <div className="text-xs text-primary-foreground/60 text-center sm:text-right order-last sm:order-none">
          © {new Date().getFullYear()} Açaí Ki-Delícia PL.
          <br />
          Feito com carinho para a nossa cidade.
          <br />
          <br />
        
          Desenvolvimento por{" "}
          <a
            href="https://www.linkedin.com/in/joaokelvindev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-accent transition-colors font-semibold"
          >
            João Kelvin Barbosa Novais | 
            Soluções Web & Sistemas
          </a>
        </div>
      </div>
    </footer>
  );
};
