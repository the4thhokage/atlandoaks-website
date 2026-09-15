import { usePageMeta } from "../hooks/usePageMeta"
import { Section, SectionHeader } from "../components/Section"
import "./About.css"

const beliefs = [
  "AI should solve a real problem.",
  "Technology should simplify work rather than create unnecessary complexity.",
  "Successful AI adoption requires both technical capability and organizational readiness.",
  "Products should be designed around the people who actually use them.",
  "Implementation matters as much as strategy.",
]

export function About() {
  usePageMeta({
    title: "About | Atland Oaks",
    description:
      "Atland Oaks LLC is an AI and technology consultancy focused on helping organizations apply emerging technology to real business problems.",
  })

  return (
    <>
      <Section className="page-hero">
        <h1>About Atland Oaks</h1>
        <p className="page-hero-lead">
          Atland Oaks LLC is an AI and technology consultancy focused on helping organizations
          apply emerging technology to real business problems.
        </p>
        <p className="page-hero-lead">
          We work at the intersection of artificial intelligence, product strategy, automation,
          and technology implementation. Our approach emphasizes practical solutions, measurable
          outcomes, and thoughtful implementation rather than technology for technology's sake.
        </p>
      </Section>

      <Section variant="alt">
        <SectionHeader eyebrow="Our Approach" title="We start with the business problem, not the technology" />
        <p className="about-copy">
          We work to understand users, workflows, constraints, systems, and organizational goals
          before recommending solutions.
        </p>
      </Section>

      <Section>
        <SectionHeader eyebrow="What We Believe" title="Principles that guide our work" />
        <ul className="belief-list">
          {beliefs.map((belief) => (
            <li key={belief}>{belief}</li>
          ))}
        </ul>
      </Section>

      <Section variant="alt">
        <SectionHeader eyebrow="Leadership" title="Founder" />
        <div className="founder-card">
          <p>[Founder biography to be added]</p>
        </div>
      </Section>
    </>
  )
}
