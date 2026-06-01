import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sena Voyages" },
      { name: "description", content: "Contactez Sena Voyages à Cotonou pour un devis personnalisé : billets, hôtels, navettes, visas." },
      { property: "og:title", content: "Contact — Sena Voyages" },
      { property: "og:description", content: "Nous vous répondons sous 24h." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useScrollReveal();
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-hero">
        <span className="section-eyebrow">Contact</span>
        <h1>Parlons de votre <span className="text-gradient">prochain voyage</span></h1>
        <p>Notre équipe à Cotonou vous répond sous 24h avec un devis personnalisé.</p>
      </section>
      <section className="section">
        <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem" }}>
          <div className="animate-on-scroll">
            <h2 className="font-display" style={{ fontSize: "1.75rem", margin: "0 0 1.5rem" }}>Nos coordonnées</h2>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-wrap"><i className="fa-solid fa-map-marker-alt" /></div>
                <div><h4>Adresse</h4><p>Cotonou, Bénin</p></div>
              </div>
              <div className="contact-info-item">
                <div className="icon-wrap"><i className="fa-solid fa-phone" /></div>
                <div><h4>Téléphone</h4><p>+229 01 00 00 00 00</p></div>
              </div>
              <div className="contact-info-item">
                <div className="icon-wrap"><i className="fa-solid fa-envelope" /></div>
                <div><h4>Email</h4><p>contact@senavoyages.bj</p></div>
              </div>
              <div className="contact-info-item">
                <div className="icon-wrap"><i className="fa-brands fa-whatsapp" /></div>
                <div><h4>WhatsApp</h4><p>+229 01 00 00 00 00</p></div>
              </div>
            </div>
          </div>
          <form
            className="animate-on-scroll"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ background: "#fff", border: "1px solid rgba(0,3,196,0.1)", borderRadius: 20, padding: "2.5rem" }}
          >
            <h2 className="font-display" style={{ fontSize: "1.75rem", margin: "0 0 1.5rem" }}>Demander un devis</h2>
            {sent ? (
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <i className="fa-solid fa-circle-check" style={{ fontSize: "3rem", background: "var(--sena-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />
                <h3 className="font-display" style={{ margin: "1rem 0 0.5rem" }}>Message envoyé !</h3>
                <p style={{ opacity: 0.75 }}>Nous vous répondons sous 24h.</p>
              </div>
            ) : (
              <div className="form-grid">
                <div className="form-field"><label>Prénom</label><input required type="text" /></div>
                <div className="form-field"><label>Nom</label><input required type="text" /></div>
                <div className="form-field"><label>Email</label><input required type="email" /></div>
                <div className="form-field"><label>Téléphone</label><input required type="tel" /></div>
                <div className="form-field full">
                  <label>Service souhaité</label>
                  <select>
                    <option>Billet d'avion</option>
                    <option>Hôtel</option>
                    <option>Location de voiture</option>
                    <option>Navette aéroport</option>
                    <option>Assistance visa</option>
                    <option>Voyage sur-mesure</option>
                  </select>
                </div>
                <div className="form-field full"><label>Votre message</label><textarea rows={5} placeholder="Décrivez votre projet de voyage..." /></div>
                <div className="form-field full">
                  <button type="submit" className="btn-cta" style={{ justifyContent: "center" }}>
                    <i className="fa-solid fa-paper-plane" /> Envoyer
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}