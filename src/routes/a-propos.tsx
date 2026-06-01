import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Sena Voyages" },
      { name: "description", content: "Sena Voyages, agence de voyages béninoise basée à Cotonou. Notre mission, nos valeurs et notre équipe." },
      { property: "og:title", content: "À propos — Sena Voyages" },
      { property: "og:description", content: "Notre histoire, nos valeurs, notre engagement." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: "fa-handshake", title: "Confiance", desc: "Transparence totale sur les prix, les conditions et les délais. Aucune surprise." },
  { icon: "fa-globe", title: "Expertise globale", desc: "Une connaissance fine de chaque destination, héritée de 10 ans d'expérience terrain." },
  { icon: "fa-phone", title: "Disponibilité 24/7", desc: "Une assistance humaine, joignable à toute heure, même en plein voyage." },
  { icon: "fa-star", title: "Excellence", desc: "Des prestations sélectionnées et testées par notre équipe avant d'être proposées." },
];

function AboutPage() {
  useScrollReveal();
  return (
    <>
      <section className="page-hero">
        <span className="section-eyebrow">À propos</span>
        <h1>L'agence de voyages <span className="text-gradient">qui pense <br />Bénin d'abord</span></h1>
        <p>Depuis Cotonou, nous accompagnons familles, professionnels et étudiants vers le monde entier.</p>
      </section>
      <section className="section">
        <div className="container about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div className="animate-on-scroll">
            <span className="section-eyebrow">Notre histoire</span>
            <h2 className="font-display section-title">Né d'une envie de <span className="text-gradient">simplifier le voyage</span></h2>
            <p style={{ lineHeight: 1.8, opacity: 0.85 }}>
              Fondée à Cotonou, Sena Voyages est née du constat que voyager depuis le Bénin
              restait trop souvent une épreuve administrative. Notre mission : faire de chaque
              départ une expérience sereine, du premier clic jusqu'à l'embarquement.
            </p>
            <p style={{ lineHeight: 1.8, opacity: 0.85, marginTop: "1rem" }}>
              Aujourd'hui, une équipe de conseillers passionnés accompagne chaque année des
              milliers de voyageurs vers plus de 80 destinations dans le monde.
            </p>
          </div>
          <div className="animate-on-scroll" style={{
            background: "var(--sena-gradient)", borderRadius: 24, padding: "3rem", color: "#fff", textAlign: "center",
          }}>
            <div className="font-display" style={{ fontSize: "4rem", lineHeight: 1 }}>10+</div>
            <p style={{ margin: "0.5rem 0 2rem", opacity: 0.95 }}>années d'expertise</p>
            <div className="font-display" style={{ fontSize: "4rem", lineHeight: 1 }}>80+</div>
            <p style={{ margin: "0.5rem 0 2rem", opacity: 0.95 }}>destinations couvertes</p>
            <div className="font-display" style={{ fontSize: "4rem", lineHeight: 1 }}>9 500+</div>
            <p style={{ margin: "0.5rem 0 0", opacity: 0.95 }}>clients satisfaits</p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "#fafbff" }}>
        <div className="container">
          <div className="section-head animate-on-scroll">
            <span className="section-eyebrow">Nos valeurs</span>
            <h2 className="font-display section-title">Quatre principes <span className="text-gradient">qui nous guident</span></h2>
            <p className="section-sub">Ce qui fait la différence Sena Voyages au quotidien.</p>
          </div>
          <div className="cards-grid cols-4">
            {values.map((v) => (
              <div key={v.title} className="value-card animate-on-scroll">
                <div className="icon"><i className={`fa-solid ${v.icon}`} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }} className="animate-on-scroll">
            <Link to="/contact" className="btn-cta"><i className="fa-solid fa-paper-plane" /> Rencontrer l'équipe</Link>
          </div>
        </div>
      </section>
    </>
  );
}