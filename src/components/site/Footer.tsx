import logo from "@/assets/logo-acai-ki-delicia.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
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
        <div className="text-xs text-primary-foreground/60 text-center sm:text-right">
          © {new Date().getFullYear()} Açaí Ki-Delícia PL. Feito com carinho
          para a nossa cidade.
        </div>
      </div>
    </footer>
  );
};
