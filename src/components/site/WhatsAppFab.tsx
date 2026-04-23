import { MessageCircle } from "lucide-react";

const WHATS_NUMBER = "5589994240590";
const MSG = "Olá! Vi o site e gostaria de mais informações.";

export const WhatsAppFab = () => {
  const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(MSG)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
      <span className="relative flex items-center gap-2 bg-gradient-gold text-accent-foreground pl-4 pr-5 py-3.5 rounded-full shadow-gold hover:scale-105 transition-transform font-semibold">
        <MessageCircle size={22} />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </span>
    </a>
  );
};
