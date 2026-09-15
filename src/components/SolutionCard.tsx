import "./Cards.css"

interface SolutionCardProps {
  title: string
  problem: string
  approach: string
  howWeHelp: string
}

export function SolutionCard({ title, problem, approach, howWeHelp }: SolutionCardProps) {
  return (
    <div className="card card-solution">
      <h3>{title}</h3>
      <dl>
        <dt>The problem</dt>
        <dd>{problem}</dd>
        <dt>Potential approaches</dt>
        <dd>{approach}</dd>
        <dt>How Atland Oaks helps</dt>
        <dd>{howWeHelp}</dd>
      </dl>
    </div>
  )
}
