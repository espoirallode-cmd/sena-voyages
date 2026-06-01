import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Sena Voyages" },
      { name: "description", content: "Réponses aux questions fréquentes sur la billetterie, les visas, les hôtels et les navettes Sena Voyages." },
      { property: "og:title", content: "FAQ — Sena Voyages" },
      { property: "og:description", content: "Toutes vos questions, toutes nos réponses." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Comment réserver un billet d'avion ?", a: "Contactez-nous via le formulaire, par téléphone ou WhatsApp. Nous vous envoyons un devis sous 24h, et l'émission se fait après confirmation et règlement." },
  { q: "Quels sont les moyens de paiement acceptés ?", a: "Mobile Money (MTN, Moov), virement bancaire, carte Visa/Mastercard et espèces à notre agence de Cotonou." },
  { q: "Combien de temps prend une demande de visa ?", a: "Cela dépend du pays : 5 à 15 jours ouvrés pour la zone Schengen, jusqu'à 4 semaines pour les USA et le Canada. Nous gérons l'intégralité du dossier." },
  { q: "Proposez-vous des navettes depuis l'aéroport de Cotonou ?", a: "Oui, navettes privées ou partagées vers tout le Bénin, et transferts à l'arrivée dans plus de 100 villes à l'international." },
  { q: "Puis-je modifier ou annuler ma réservation ?", a: "La plupart de nos billets sont modifiables. Les conditions exactes dépendent de la compagnie et du tarif choisi, et vous sont communiquées avant achat." },
  { q: "Vos prix incluent-ils les taxes ?", a: "Oui, tous nos devis sont en TTC, taxes aéroportuaires et frais d'agence inclus. Pas de surprise à payer." },
];

function FaqPage() {
  useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="page-hero">
        <span className="section-eyebrow">FAQ</span>
        <h1>Vos questions, <span className="text-gradient">nos réponses</span></h1>
        <p>Tout ce que vous devez savoir avant de réserver votre voyage avec Sena.</p>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""} animate-on-scroll`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <i className="fa-solid fa-chevron-down" />
              </button>
              <div className="faq-a"><p style={{ margin: "0.5rem 0 0" }}>{f.a}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}