import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from "@/assets/logo.png";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sena-navbar">
      <div className="sena-navbar-inner">
        <Link to="/" className="sena-logo" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center" }}>
          <img src={logoImg} alt="Sena Voyages" style={{ height: "54px", width: "auto" }} />
        </Link>

        <nav>
          <ul className={`sena-nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={pathname === l.to ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn-cta mobile-show">
          <i className="fa-solid fa-ticket" /> Réserver
        </Link>

        <button
          className="sena-burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>
    </header>
  );
}