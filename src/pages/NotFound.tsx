import { usePageMeta } from "../hooks/usePageMeta"
import { Section } from "../components/Section"
import { Button } from "../components/Button"

export function NotFound() {
  usePageMeta({
    title: "Page Not Found | Atland Oaks",
    description: "The page you're looking for could not be found.",
  })

  return (
    <Section className="page-hero">
      <h1>Page Not Found</h1>
      <p className="page-hero-lead">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/">Return Home</Button>
    </Section>
  )
}
