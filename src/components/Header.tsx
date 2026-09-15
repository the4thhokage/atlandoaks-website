import { useState } from "react"
import { NavLink } from "react-router-dom"
import { siteConfig } from "../config/site"
import { BookConsultationButton } from "./BookConsultationButton"
import "./Header.css"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <NavLink to="/" className="brand" aria-label={`${siteConfig.companyName} home`}>
          {siteConfig.companyName}
        </NavLink>

        <nav
          id="mobile-nav-panel"
          className={`primary-nav ${menuOpen ? "primary-nav-open" : ""}`}
          aria-label="Primary"
          onClick={() => setMenuOpen(false)}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="primary-nav-cta">
            <BookConsultationButton />
          </div>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
      </div>
    </header>
  )
}
