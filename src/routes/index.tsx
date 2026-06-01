import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import heroImg from "@/assets/hero-airport.jpg";
import heroGirlImg from "@/assets/hero-girl.png";
import paris from "@/assets/dest-paris.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import istanbul from "@/assets/dest-istanbul.jpg";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sena Voyages — Voyagez sans frontières depuis le Bénin" },
      { name: "description", content: "Agence de voyages à Cotonou : billetterie aérienne, hôtels, navettes aéroport et assistance visa. Réservez votre prochain voyage avec Sena Voyages." },
      { property: "og:title", content: "Sena Voyages — Voyagez sans frontières" },
      { property: "og:description", content: "Billetterie, hôtels, navettes et visas depuis Cotonou, Bénin." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: "fa-plane-departure", title: "Billetterie aérienne", desc: "Les meilleurs tarifs sur toutes les compagnies, partout dans le monde." },
  { icon: "fa-hotel", title: "Réservation d'hôtels", desc: "Hébergements vérifiés, du boutique-hôtel au resort cinq étoiles." },
  { icon: "fa-car", title: "Location de voitures", desc: "Une flotte fiable à destination, prête dès votre arrivée." },
  { icon: "fa-shuttle-van", title: "Navettes aéroport", desc: "Transferts confortables et ponctuels à Cotonou et à l'étranger." },
];

const destinations = [
  { img: paris, name: "Paris", country: "France" },
  { img: dubai, name: "Dubaï", country: "Émirats Arabes Unis" },
  { img: istanbul, name: "Istanbul", country: "Turquie" },
];

function Stat({ end, label, icon, suffix = "" }: { end: number; label: string; icon: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, end);
  return (
    <div>
      <div className="stat-icon"><i className={`fa-solid ${icon}`} /></div>
      <div className="stat-num"><span ref={ref}>0</span>{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Home() {
  useScrollReveal();
  return (
    <>
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="font-display">
              Voyagez <span className="text-gradient">Sans Frontières,</span><br />
              Depuis le Bénin
            </h1>
            <p className="lead">
              Sena Voyages vous accompagne à chaque étape — billets d'avion, hôtels, navettes
              et visas. Une équipe basée à Cotonou, des destinations partout dans le monde.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-cta">
                <i className="fa-solid fa-paper-plane" /> Réserver maintenant
              </Link>
              <Link to="/destinations" className="btn-ghost">
                <i className="fa-solid fa-globe" /> Explorer les destinations
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroGirlImg} alt="Voyageuse Sena Voyages" className="hero-girl-image" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-grid">
          <Stat end={12500} icon="fa-plane-departure" label="Vols réservés" suffix="+" />
          <Stat end={3200} icon="fa-hotel" label="Nuits d'hôtel" suffix="+" />
          <Stat end={80} icon="fa-globe" label="Destinations" suffix="+" />
          <Stat end={9500} icon="fa-handshake" label="Clients satisfaits" suffix="+" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head animate-on-scroll">
            <span className="section-eyebrow">Nos services</span>
            <h2 className="section-title font-display">
              Tout ce qu'il faut pour <span className="text-gradient">un voyage parfait</span>
            </h2>
            <p className="section-sub">Quatre expertises sous un même toit, pensées pour les voyageurs exigeants.</p>
          </div>
          <div className="cards-grid cols-4">
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
        <div className="container">
          <div className="section-head animate-on-scroll">
            <span className="section-eyebrow">Destinations phares</span>
            <h2 className="section-title font-display">
              Inspirez votre <span className="text-gradient">prochaine aventure</span>
            </h2>
            <p className="section-sub">Une sélection des destinations préférées de nos voyageurs.</p>
          </div>
          <div className="cards-grid cols-3">
            {destinations.map((d) => (
              <div key={d.name} className="dest-card animate-on-scroll">
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="overlay">
                  <h3>{d.name}</h3>
                  <div className="meta"><i className="fa-solid fa-map-marker-alt" /> {d.country}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }} className="animate-on-scroll">
            <Link to="/destinations" className="btn-ghost">
              Voir toutes les destinations <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <section className="marquee animate-on-scroll">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: "4rem" }}>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> Air France</span>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> Turkish Airlines</span>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> Emirates</span>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> Ethiopian Airlines</span>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> Royal Air Maroc</span>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> Brussels Airlines</span>
              <span className="marquee-item"><i className="fa-solid fa-plane" /> ASKY</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container animate-on-scroll" style={{
          background: "var(--sena-gradient)", borderRadius: 24, padding: "3.5rem",
          textAlign: "center", color: "#fff",
        }}>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", margin: "0 0 1rem" }}>
            Prêt à partir ? Parlons de votre prochain voyage.
          </h2>
          <p style={{ opacity: 0.95, maxWidth: 560, margin: "0 auto 2rem" }}>
            Notre équipe vous répond en moins de 24h avec un devis personnalisé.
          </p>
          <Link to="/contact" className="btn-ghost" style={{ borderColor: "#fff", color: "#fff" }}>
            <i className="fa-solid fa-envelope" /> Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
