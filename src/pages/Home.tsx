import { usePageMeta } from "../hooks/usePageMeta"
import { Section, SectionHeader } from "../components/Section"
import { ServiceCard } from "../components/ServiceCard"
import { CTA } from "../components/CTA"
import { BookConsultationButton } from "../components/BookConsultationButton"
import { Button } from "../components/Button"
import { PhotoCredit } from "../components/PhotoCredit"
import oakTreeImage from "../assets/images/oak-tree.jpg"
import "./Home.css"

const services = [
  {
    title: "AI Strategy & Roadmapping",
    description:
      "Help organizations evaluate where AI can create measurable value, prioritize opportunities, and develop an actionable implementation roadmap.",
  },
  {
    title: "AI Product Development",
    description:
      "Support the design and development of AI-enabled products, internal tools, and customer experiences from concept through implementation.",
  },
  {
    title: "Workflow Automation",
    description:
      "Identify repetitive or inefficient processes and design intelligent automation that reduces manual work and improves operational efficiency.",
  },
  {
    title: "AI Agents & Intelligent Systems",
    description:
      "Design and implement AI agents and intelligent systems that can assist employees, interact with business systems, and automate multi-step workflows.",
  },
]

const problems = [
  "We know we should be using AI, but we don't know where to start.",
  "Our teams spend too much time on repetitive manual work.",
  "We have AI ideas but need help determining which ones are worth building.",
  "We want to integrate AI into an existing product.",
  "We need to modernize internal workflows and systems.",
  "We need a practical AI strategy rather than another presentation.",
]

const methodology = [
  {
    stage: "Discover",
    description: "Understand the organization, workflows, constraints, and objectives.",
  },
  {
    stage: "Prioritize",
    description:
      "Identify opportunities with the strongest combination of business value and implementation feasibility.",
  },
  {
    stage: "Design",
    description:
      "Define the solution, user experience, architecture, requirements, and implementation approach.",
  },
  {
    stage: "Build",
    description: "Develop or support implementation of the solution.",
  },
  {
    stage: "Measure",
    description: "Evaluate adoption, performance, business impact, and opportunities for iteration.",
  },
]

const audiences = [
  "Government & Public Sector",
  "Healthcare",
  "Technology & SaaS",
  "Operations-Heavy Organizations",
  "Growing Organizations Adopting AI",
]

const whyAtlandOaks = [
  {
    title: "Product-minded approach",
    description: "Solutions designed around actual user and business needs.",
  },
  {
    title: "Practical AI",
    description:
      "Focus on implementations that solve real problems rather than using AI for its own sake.",
  },
  {
    title: "Strategy through execution",
    description:
      "Ability to move from identifying opportunities to designing and implementing solutions.",
  },
  {
    title: "Cross-functional perspective",
    description:
      "Experience working across product, technology, operations, compliance, and business teams.",
  },
]

export function Home() {
  usePageMeta({
    title: "Atland Oaks | AI Strategy, Product & Automation Consulting",
    description:
      "Atland Oaks helps organizations identify, design, and implement practical AI, automation, and technology solutions.",
  })

  return (
    <>
      <Section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>AI Strategy, Product, and Automation Consulting</h1>
            <p className="hero-lead">
              Atland Oaks helps organizations identify high-value opportunities for artificial
              intelligence, design practical solutions, and implement technology that improves
              operations, decision-making, and customer experiences.
            </p>
            <div className="hero-actions">
              <BookConsultationButton />
              <Button to="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
          <figure className="hero-figure">
            <img
              src={oakTreeImage}
              alt="A solitary oak tree standing on a grassy hillside, backlit by afternoon sun"
              loading="eager"
              fetchPriority="high"
              width={1400}
              height={1050}
            />
            <PhotoCredit
              photographer="Daniel Lu"
              photographerUrl="https://commons.wikimedia.org/wiki/User:Dllu"
              sourceLabel="Wikimedia Commons"
              sourceUrl="https://commons.wikimedia.org/wiki/File:Oak_tree_Sunol_Regional_Wilderness_California_2023_dllu.jpg"
              licenseLabel="CC BY-SA 4.0"
              licenseUrl="https://creativecommons.org/licenses/by-sa/4.0"
            />
          </figure>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader eyebrow="What We Do" title="Core consulting areas" />
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common challenges organizations bring to us"
        />
        <ul className="problem-list">
          {problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </Section>

      <Section variant="alt">
        <SectionHeader eyebrow="How We Work" title="A straightforward consulting methodology" />
        <ol className="methodology-list">
          {methodology.map((item, index) => (
            <li key={item.stage}>
              <span className="methodology-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.stage}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeader eyebrow="Who We Help" title="Organizations we work with" />
        <ul className="audience-list">
          {audiences.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </Section>

      <Section variant="alt">
        <SectionHeader eyebrow="Why Atland Oaks" title="A practical approach to AI consulting" />
        <div className="card-grid">
          {whyAtlandOaks.map((item) => (
            <div className="why-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTA
          headline="Let's Talk About Where AI Can Create Value"
          description="Schedule an introductory conversation to discuss your organization, current challenges, and potential opportunities."
        />
      </Section>
    </>
  )
}
