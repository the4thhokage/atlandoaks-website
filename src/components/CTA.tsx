import { BookConsultationButton } from "./BookConsultationButton"
import "./CTA.css"

interface CTAProps {
  headline: string
  description?: string
}

export function CTA({ headline, description }: CTAProps) {
  return (
    <div className="cta">
      <h2>{headline}</h2>
      {description ? <p>{description}</p> : null}
      <BookConsultationButton />
    </div>
  )
}
