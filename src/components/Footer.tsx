import { Link } from "react-router-dom"
import { siteConfig } from "../config/site"
import "./Footer.css"

const footerNavLinks = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-company">{siteConfig.companyName}</p>
          <p className="footer-tagline">{siteConfig.tagline}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            {footerNavLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-legal" aria-label="Legal">
          <ul>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <p className="footer-copyright">
          &copy; {year} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
