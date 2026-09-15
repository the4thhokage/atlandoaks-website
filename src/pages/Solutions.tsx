import { usePageMeta } from "../hooks/usePageMeta"
import { Section } from "../components/Section"
import { SolutionCard } from "../components/SolutionCard"
import { CTA } from "../components/CTA"

const solutions = [
  {
    title: "AI Adoption",
    problem: "Organizations trying to determine where AI should fit into their business.",
    approach:
      "Structured opportunity assessment, use case prioritization, and readiness evaluation.",
    howWeHelp:
      "We help leadership teams cut through the noise and identify where AI can realistically create value for their organization.",
  },
  {
    title: "Operational Automation",
    problem: "Organizations looking to reduce repetitive manual processes.",
    approach: "Workflow analysis, process mapping, and intelligent automation design.",
    howWeHelp:
      "We identify high-friction processes and design automation that reduces manual work without disrupting operations.",
  },
  {
    title: "AI-Enabled Products",
    problem: "Companies wanting to add AI capabilities to existing or new products.",
    approach: "Product discovery, AI product strategy, prototyping, and technical coordination.",
    howWeHelp:
      "We help product teams define, validate, and ship AI capabilities that are genuinely useful to their customers.",
  },
  {
    title: "Internal AI Tools",
    problem: "Organizations that want AI to help employees work more efficiently.",
    approach: "Internal tool design, knowledge agents, and workflow assistants.",
    howWeHelp:
      "We design and help implement internal tools that reduce busywork and support day-to-day decision-making.",
  },
  {
    title: "Decision Support",
    problem:
      "Organizations using large amounts of information and needing better tools to analyze, summarize, prioritize, or act on it.",
    approach: "Data and workflow assessment, decision-support tooling, and AI-assisted analysis.",
    howWeHelp:
      "We help design systems that turn large volumes of information into clearer, faster decisions.",
  },
  {
    title: "Digital Modernization",
    problem: "Organizations with legacy workflows, fragmented systems, or outdated internal processes.",
    approach: "System and workflow audits, modernization roadmaps, and phased implementation planning.",
    howWeHelp:
      "We help organizations modernize systems and processes in a practical, sequenced way rather than a disruptive overhaul.",
  },
]

export function Solutions() {
  usePageMeta({
    title: "Solutions | Atland Oaks",
    description:
      "Atland Oaks solutions organized around business problems: AI adoption, operational automation, AI-enabled products, internal tools, decision support, and digital modernization.",
  })

  return (
    <>
      <Section className="page-hero">
        <h1>Solutions</h1>
        <p className="page-hero-lead">
          Organized around the business problems organizations bring to us, not around
          consulting disciplines.
        </p>
      </Section>

      <Section>
        <div className="card-grid card-grid-3">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              problem={solution.problem}
              approach={solution.approach}
              howWeHelp={solution.howWeHelp}
            />
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <CTA
          headline="Let's Talk About Where AI Can Create Value"
          description="Schedule an introductory conversation to discuss your organization, current challenges, and potential opportunities."
        />
      </Section>
    </>
  )
}
