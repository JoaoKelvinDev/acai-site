import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo-acai-ki-delicia.png";

const INSTAGRAM_URL = "https://www.instagram.com/acaikideliciapl/";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logomarca Açaí Ki-Delícia"
            className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-display text-lg md:text-xl font-bold text-primary leading-tight">
            Açaí <span className="text-accent">Ki-Delícia</span>
            <span className="block text-[10px] tracking-[0.3em] font-sans font-medium text-muted-foreground -mt-1">
              PAES LANDIM · PI
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 grid place-items-center rounded-full text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-glow transition-colors shadow-soft"
          >
            Peça já
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-primary"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
            >
              Peça já
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-semibold"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};
