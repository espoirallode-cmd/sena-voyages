import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="sena-footer">
      <div className="sena-footer-inner">
        <div>
          <div style={{ marginBottom: "1.25rem" }}>
            <Link to="/" style={{ display: "inline-block", background: "#fff", padding: "0.6rem 1rem", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <img src={logoImg} alt="Sena Voyages" style={{ height: "54px", width: "auto", display: "block" }} />
            </Link>
          </div>
          <p style={{ opacity: 0.85, lineHeight: 1.7, margin: 0 }}>
            Votre partenaire de confiance pour des voyages sans frontières depuis Cotonou, Bénin.
            Billetterie, hôtels, navettes, visas — nous nous occupons de tout.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="#" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
        </div>

        <div>
          <h4>Liens rapides</h4>
          <Link to="/services">Services</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/a-propos">À propos</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/temoignages">Témoignages</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p style={{ opacity: 0.85, margin: "0 0 0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <i className="fa-solid fa-map-marker-alt" /> Cotonou, Bénin
          </p>
          <p style={{ opacity: 0.85, margin: "0 0 0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <i className="fa-solid fa-phone" /> +229 01 00 00 00 00
          </p>
          <p style={{ opacity: 0.85, margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <i className="fa-solid fa-envelope" /> contact@senavoyages.bj
          </p>
        </div>
      </div>
      <div className="sena-footer-bottom">
        © {new Date().getFullYear()} Sena Voyages — Tous droits réservés.
      </div>
    </footer>
  );
}