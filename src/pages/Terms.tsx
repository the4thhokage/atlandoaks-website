import { usePageMeta } from "../hooks/usePageMeta"
import { Section } from "../components/Section"
import { siteConfig } from "../config/site"

// Placeholder content only. Replace with formal legal language reviewed by
// counsel before this site goes into production use.
export function Terms() {
  usePageMeta({
    title: "Terms of Use | Atland Oaks",
    description: "Terms of use for the Atland Oaks website.",
  })

  return (
    <Section className="page-hero">
      <h1>Terms of Use</h1>
      <p className="page-hero-lead">
        This is placeholder terms of use content for {siteConfig.legalName}. It should be
        replaced with formal legal language reviewed by counsel before this site is used in
        production.
      </p>
      <p>
        By accessing this website, you agree to these placeholder terms, which will be
        finalized prior to production use.
      </p>
      <p>For questions about these terms, contact {siteConfig.email || "[email to be added]"}.</p>
    </Section>
  )
}
