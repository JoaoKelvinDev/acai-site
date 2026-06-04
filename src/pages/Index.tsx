import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { MenuSection } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";
import { OrderBuilder } from "@/components/site/OrderBuilder";
const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Açaí Ki-Delícia PL — Açaiteria em Paes Landim, PI";
    const desc =
      "Açaí, cremes e sorvetes em Paes Landim - PI. Seg a Sáb 14h às 23h, Domingo 15h às 23h. Rua Licinha Moraes, 20. Peça pelo WhatsApp (89) 97400-1661.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    const ldId = "ld-localbusiness";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Açaí Ki-Delícia PL",
      servesCuisine: "Açaí",
      telephone: "+5589974001661",
      sameAs: ["https://www.instagram.com/acaikideliciapl/"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Licinha Moraes, 20",
        addressLocality: "Paes Landim",
        addressRegion: "PI",
        postalCode: "64710-000",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "14:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "15:00",
          closes: "23:00",
        },
      ],
    });
    document.head.appendChild(ld);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
   <main>
  <Hero />
  <Gallery />
    <About />
  <MenuSection />


  <section id="gerar-seu-pedido" className="py-24 bg-background scroll-mt-20">
    <div className="container">
      <OrderBuilder />
    </div>
  </section>
  <Contact />
  <Footer />
</main>
    </div>
  );
};

export default Index;
