import { Button } from "./Button"
import { siteConfig } from "../config/site"

interface BookConsultationButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  className?: string
  label?: string
}

/**
 * Single source of truth for the "Book a Consultation" call to action.
 * Reads siteConfig.bookingUrl so the destination only needs to be set once.
 * Until a booking URL is configured, it falls back to the Contact page
 * rather than rendering a dead link.
 */
export function BookConsultationButton({
  variant = "primary",
  className,
  label = "Book a Consultation",
}: BookConsultationButtonProps) {
  if (siteConfig.bookingUrl) {
    return (
      <Button
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        className={className}
      >
        {label}
      </Button>
    )
  }

  return (
    <Button to="/contact" variant={variant} className={className}>
      {label}
    </Button>
  )
}
