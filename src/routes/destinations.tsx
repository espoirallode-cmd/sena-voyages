import { createFileRoute } from "@tanstack/react-router";
import paris from "@/assets/dest-paris.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import istanbul from "@/assets/dest-istanbul.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Sena Voyages" },
      { name: "description", content: "Découvrez les destinations phares proposées par Sena Voyages depuis Cotonou : Europe, Moyen-Orient, Asie, Amérique." },
      { property: "og:title", content: "Destinations — Sena Voyages" },
      { property: "og:description", content: "Inspirez votre prochain voyage." },
    ],
  }),
  component: DestinationsPage,
});

const items = [
  { img: paris, name: "Paris", country: "France", price: "À partir de 580 000 FCFA" },
  { img: dubai, name: "Dubaï", country: "Émirats Arabes Unis", price: "À partir de 720 000 FCFA" },
  { img: istanbul, name: "Istanbul", country: "Turquie", price: "À partir de 490 000 FCFA" },
  { img: paris, name: "Londres", country: "Royaume-Uni", price: "À partir de 650 000 FCFA" },
  { img: dubai, name: "Doha", country: "Qatar", price: "À partir de 680 000 FCFA" },
  { img: istanbul, name: "Marrakech", country: "Maroc", price: "À partir de 380 000 FCFA" },
];

function DestinationsPage() {
  useScrollReveal();
  return (
    <>
      <section className="page-hero">
        <span className="section-eyebrow">Destinations</span>
        <h1>Le monde, <span className="text-gradient">à portée de Cotonou</span></h1>
        <p>Une sélection des destinations les plus demandées par nos voyageurs béninois.</p>
      </section>
      <section className="section">
        <div className="container">
          <div className="cards-grid cols-3">
            {items.map((d, i) => (
              <div key={i} className="dest-card animate-on-scroll">
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="overlay">
                  <h3>{d.name}</h3>
                  <div className="meta"><i className="fa-solid fa-map-marker-alt" /> {d.country}</div>
                  <div className="meta" style={{ marginTop: "0.5rem", fontWeight: 600 }}>{d.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}