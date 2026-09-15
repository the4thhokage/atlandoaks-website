import { usePageMeta } from "../hooks/usePageMeta"
import { Section } from "../components/Section"
import "./Insights.css"

const articles = [
  {
    title: "How to Identify High-Value AI Opportunities",
    category: "AI Strategy",
  },
  {
    title: "When Should a Business Build an AI Agent?",
    category: "AI Agents",
  },
  {
    title: "AI Strategy Should Start With the Workflow",
    category: "Product Strategy",
  },
]

const categories = ["AI Strategy", "AI Agents", "Product Strategy", "Automation", "Technology Leadership"]

export function Insights() {
  usePageMeta({
    title: "Insights | Atland Oaks",
    description:
      "Perspectives on AI strategy, AI agents, product strategy, automation, and technology leadership from Atland Oaks.",
  })

  return (
    <>
      <Section className="page-hero">
        <h1>Insights</h1>
        <p className="page-hero-lead">
          Perspectives on AI strategy, product development, automation, and technology
          leadership. More articles are on the way.
        </p>
      </Section>

      <Section>
        <ul className="category-tags">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>

        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <span className="article-status">Coming Soon</span>
              <p className="article-category">{article.category}</p>
              <h3>{article.title}</h3>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
