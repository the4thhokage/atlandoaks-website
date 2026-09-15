import { usePageMeta } from "../hooks/usePageMeta"
import { Section } from "../components/Section"
import { CTA } from "../components/CTA"
import "./Services.css"

interface ServiceDetail {
  title: string
  problem: string
  whatWeDo: string[]
  outcomes: string
}

const serviceDetails: ServiceDetail[] = [
  {
    title: "AI Strategy & Roadmapping",
    problem:
      "Leadership teams often sense AI is important but lack a structured way to evaluate where it applies to their business.",
    whatWeDo: [
      "AI opportunity assessment",
      "Use case prioritization",
      "AI readiness",
      "Implementation roadmap",
      "Build versus buy analysis",
      "Technology evaluation",
      "Governance considerations",
      "Executive advisory",
    ],
    outcomes:
      "A prioritized, actionable roadmap that connects AI investment to measurable business outcomes.",
  },
  {
    title: "AI Product Strategy & Development",
    problem:
      "Organizations building AI-enabled products need both product judgment and technical coordination to move from idea to launch.",
    whatWeDo: [
      "Product discovery",
      "AI product strategy",
      "Requirements definition",
      "User experience",
      "Prototype development",
      "Technical coordination",
      "MVP planning",
      "Product roadmaps",
      "Launch strategy",
    ],
    outcomes: "A clearly scoped product, validated with users, ready for build and launch.",
  },
  {
    title: "Workflow Automation",
    problem:
      "Manual, repetitive processes consume team capacity that could be spent on higher-value work.",
    whatWeDo: [
      "Workflow analysis",
      "Process mapping",
      "Automation opportunity identification",
      "AI-assisted workflows",
      "Internal tools",
      "System integrations",
      "Operational efficiency",
    ],
    outcomes: "Reduced manual effort and more consistent, efficient operations.",
  },
  {
    title: "AI Agents & Intelligent Systems",
    problem:
      "Teams want AI that can take action across systems and workflows, not just answer questions.",
    whatWeDo: [
      "AI assistants",
      "Internal knowledge agents",
      "Research agents",
      "Workflow agents",
      "Customer support agents",
      "Multi-step automation",
      "Human-in-the-loop systems",
    ],
    outcomes: "Working agents and intelligent systems designed with appropriate oversight and controls.",
  },
  {
    title: "Technology & Product Advisory",
    problem:
      "Organizations need an outside, cross-functional perspective on technology and product decisions.",
    whatWeDo: [
      "Product strategy",
      "Technical architecture evaluation",
      "Vendor selection",
      "Platform evaluation",
      "Technology modernization",
      "Product operating models",
      "Executive product advisory",
    ],
    outcomes: "Clearer technology and product decisions grounded in business priorities.",
  },
]

export function Services() {
  usePageMeta({
    title: "Services | Atland Oaks",
    description:
      "AI and technology consulting services from Atland Oaks, including strategy, product development, workflow automation, and AI agents.",
  })

  return (
    <>
      <Section className="page-hero">
        <h1>AI and Technology Consulting Services</h1>
        <p className="page-hero-lead">
          Atland Oaks helps organizations move from AI curiosity to practical implementation.
          Engagements can range from strategic advisory work to hands-on product and automation
          initiatives.
        </p>
      </Section>

      {serviceDetails.map((service, index) => (
        <Section key={service.title} variant={index % 2 === 0 ? "default" : "alt"}>
          <div className="service-detail">
            <h2>{service.title}</h2>
            <div className="service-detail-grid">
              <div>
                <p className="service-label">Problem</p>
                <p>{service.problem}</p>
              </div>
              <div>
                <p className="service-label">What Atland Oaks does</p>
                <ul className="service-list">
                  {service.whatWeDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="service-label">Typical outcomes</p>
                <p>{service.outcomes}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <CTA
          headline="Let's Talk About Where AI Can Create Value"
          description="Schedule an introductory conversation to discuss your organization, current challenges, and potential opportunities."
        />
      </Section>
    </>
  )
}
