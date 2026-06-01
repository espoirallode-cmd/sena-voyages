import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sena Voyages" },
      { name: "description", content: "Billetterie aérienne, hôtels, voitures, navettes aéroport et visas : tous nos services voyage à Cotonou." },
      { property: "og:title", content: "Nos services — Sena Voyages" },
      { property: "og:description", content: "Quatre expertises pour votre voyage." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: "fa-plane-departure", title: "Billetterie aérienne", desc: "Comparaison en temps réel sur plus de 500 compagnies pour vous garantir le meilleur prix. Émission immédiate, changements et remboursements gérés par nos agents." },
  { icon: "fa-hotel", title: "Réservation d'hôtels", desc: "Une sélection rigoureuse d'hôtels vérifiés, du boutique-hôtel familial au resort cinq étoiles, avec tarifs négociés et annulation flexible." },
  { icon: "fa-car", title: "Location de voitures", desc: "Véhicules récents et entièrement assurés disponibles dans plus de 200 villes. Livraison à l'aéroport ou à votre hôtel." },
  { icon: "fa-shuttle-van", title: "Navettes aéroport", desc: "Transferts privés ou partagés depuis et vers l'aéroport Cardinal Bernardin Gantin de Cotonou et toute destination internationale." },
  { icon: "fa-passport", title: "Assistance visa", desc: "Constitution du dossier, prise de rendez-vous, traduction et suivi jusqu'à l'obtention. Schengen, USA, Canada, UK, Asie, Moyen-Orient." },
  { icon: "fa-handshake", title: "Voyages d'affaires", desc: "Solutions sur-mesure pour les entreprises : facturation centralisée, reporting, support 24/7 et tarifs corporate négociés." },
];

function ServicesPage() {
  useScrollReveal();
  return (
    <>
      <section className="page-hero">
        <span className="section-eyebrow">Nos services</span>
        <h1>Un accompagnement <span className="text-gradient">de bout en bout</span></h1>
        <p>De la première recherche au retour à Cotonou, nos équipes orchestrent chaque détail.</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="cards-grid cols-3">
            {services.map((s) => (
              <div key={s.title} className="service-card animate-on-scroll">
                <div className="icon"><i className={`fa-solid ${s.icon}`} /></div>
                <h3 className="text-gradient">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "#fafbff" }}>
        <div className="container animate-on-scroll" style={{ textAlign: "center" }}>
          <h2 className="font-display section-title">Besoin d'un <span className="text-gradient">service sur-mesure ?</span></h2>
          <p className="section-sub">Décrivez-nous votre projet, nous construisons l'itinéraire qui vous ressemble.</p>
          <Link to="/contact" className="btn-cta"><i className="fa-solid fa-paper-plane" /> Nous contacter</Link>
        </div>
      </section>
    </>
  );
}