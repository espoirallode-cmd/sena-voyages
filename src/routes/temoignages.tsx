import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/temoignages")({
  head: () => ({
    meta: [
      { title: "Témoignages — Sena Voyages" },
      { name: "description", content: "Les avis de nos clients : familles, étudiants et professionnels partagent leur expérience Sena Voyages." },
      { property: "og:title", content: "Témoignages — Sena Voyages" },
      { property: "og:description", content: "L'avis de nos voyageurs." },
    ],
  }),
  component: TestimonialsPage,
});

const slides = [
  { quote: "Service impeccable du début à la fin. Mon visa Schengen obtenu en deux semaines, billet émis le jour même. Je recommande à 100%.", author: "Akouavi M.", role: "Entrepreneure, Cotonou" },
  { quote: "Première fois que je voyage seul à Dubaï, l'équipe Sena m'a tout expliqué et la navette était bien là à l'arrivée. Parfait.", author: "Patrice K.", role: "Étudiant" },
  { quote: "Nous avons organisé notre voyage de noces à Istanbul via Sena. Hôtel sublime, vol confortable, prix imbattable. Merci !", author: "Mireille & Jean", role: "Jeunes mariés" },
  { quote: "En tant que PME, leur service voyages d'affaires nous fait gagner un temps fou. Réactifs et précis.", author: "Sébastien D.", role: "DAF, BTP Bénin" },
];

function TestimonialsPage() {
  useScrollReveal();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <section className="page-hero">
        <span className="section-eyebrow">Témoignages</span>
        <h1>Ils nous ont fait <span className="text-gradient">confiance</span></h1>
        <p>Découvrez les retours authentiques de voyageurs que nous avons accompagnés.</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="testimonial-slider">
            {slides.map((s, idx) => (
              <div key={idx} className={`testimonial-slide ${i === idx ? "active" : ""}`}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, k) => <i key={k} className="fa-solid fa-star" />)}
                </div>
                <blockquote>“{s.quote}”</blockquote>
                <div className="author">{s.author}</div>
                <div className="role">{s.role}</div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {slides.map((_, idx) => (
              <button key={idx} className={i === idx ? "active" : ""} onClick={() => setI(idx)} aria-label={`Témoignage ${idx + 1}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "#fafbff" }}>
        <div className="container">
          <div className="cards-grid cols-3">
            {slides.map((s, idx) => (
              <div key={idx} className="value-card animate-on-scroll">
                <div className="stars" style={{ color: "var(--sena-yellow)", marginBottom: "0.75rem" }}>
                  {Array.from({ length: 5 }).map((_, k) => <i key={k} className="fa-solid fa-star" />)}
                </div>
                <p style={{ fontStyle: "italic" }}>“{s.quote}”</p>
                <div style={{ marginTop: "1rem", fontWeight: 700, color: "var(--sena-blue)" }}>{s.author}</div>
                <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}