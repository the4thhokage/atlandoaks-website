import type { ReactNode } from "react"
import "./Section.css"

interface SectionProps {
  children: ReactNode
  id?: string
  variant?: "default" | "alt"
  className?: string
}

export function Section({ children, id, variant = "default", className = "" }: SectionProps) {
  const classes = `section section-${variant} ${className}`.trim()
  return (
    <section id={id} className={classes}>
      <div className="container">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
