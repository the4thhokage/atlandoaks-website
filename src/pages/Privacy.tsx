import { usePageMeta } from "../hooks/usePageMeta"
import { Section } from "../components/Section"
import { siteConfig } from "../config/site"

// Placeholder content only. Replace with formal legal language reviewed by
// counsel before this site goes into production use.
export function Privacy() {
  usePageMeta({
    title: "Privacy Policy | Atland Oaks",
    description: "Privacy policy for the Atland Oaks website.",
  })

  return (
    <Section className="page-hero">
      <h1>Privacy Policy</h1>
      <p className="page-hero-lead">
        This is placeholder privacy policy content for {siteConfig.legalName}. It should be
        replaced with formal legal language reviewed by counsel before this site is used in
        production.
      </p>
      <p>
        {siteConfig.legalName} ("Atland Oaks," "we," "us," or "our") respects your privacy. This
        placeholder page will describe what information is collected through this website, how
        it is used, and the choices available to visitors.
      </p>
      <p>For questions about this policy, contact {siteConfig.email || "[email to be added]"}.</p>
    </Section>
  )
}
