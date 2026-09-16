import { usePageMeta } from "../hooks/usePageMeta"
import { Section, SectionHeader } from "../components/Section"
import { PhotoCredit } from "../components/PhotoCredit"
import skylineImage from "../assets/images/skyline.jpg"
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

      <Section className="about-photo-section">
        <figure className="about-figure">
          <img
            src={skylineImage}
            alt="Daytime skyline of a mid-size city, viewed across a river with several bridges"
            loading="lazy"
            width={1800}
            height={438}
          />
          <PhotoCredit
            photographer="Daniel Lu"
            photographerUrl="https://commons.wikimedia.org/wiki/User:Dllu"
            sourceLabel="Wikimedia Commons"
            sourceUrl="https://commons.wikimedia.org/wiki/File:Pittsburgh_skyline_panorama_daytime.jpg"
            licenseLabel="CC BY-SA 4.0"
            licenseUrl="https://creativecommons.org/licenses/by-sa/4.0"
          />
        </figure>
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
          <h3>Eric Robinson</h3>
          <p className="founder-title">Founder &amp; Principal Consultant</p>
          <p>
            Eric brings close to a decade of product management experience across Amazon,
            LinkedIn, HubSpot, and healthcare technology, with a focus on AI-enabled products,
            platform modernization, and cross-functional execution.
          </p>
          <p>
            He served as Director of Product Management at Interra Health, where he led product
            strategy for the company's core platform, and has also served as Principal Product
            Manager at DoseSpot. Earlier in his career, he led product for an AI-powered sales
            assistant at LinkedIn, modernized communication infrastructure at HubSpot, and led
            the modernization of Amazon's global seller appeals process, used by more than five
            million sellers.
          </p>
          <p>
            Alongside his product work, Eric teaches AI product management through Product
            School, mentors early-stage founders through Techstars, and serves as an
            Entrepreneur in Residence with The Idea Village. Atland Oaks reflects that same
            practical, execution-oriented approach: helping organizations move from AI ideas to
            implemented, measurable outcomes.
          </p>
        </div>
      </Section>
    </>
  )
}
