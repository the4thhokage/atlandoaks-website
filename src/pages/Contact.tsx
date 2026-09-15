import { usePageMeta } from "../hooks/usePageMeta"
import { Section, SectionHeader } from "../components/Section"
import { ContactForm } from "../components/ContactForm"
import { BookConsultationButton } from "../components/BookConsultationButton"
import { siteConfig } from "../config/site"
import "./Contact.css"

export function Contact() {
  usePageMeta({
    title: "Contact | Atland Oaks",
    description:
      "Get in touch with Atland Oaks to discuss your organization's AI strategy, product, or automation goals.",
  })

  return (
    <>
      <Section className="page-hero">
        <h1>Let's Discuss Your Goals</h1>
        <p className="page-hero-lead">
          Whether you're exploring AI for the first time or already have an initiative
          underway, Atland Oaks can help evaluate the opportunity and determine the right path
          forward.
        </p>
      </Section>

      <Section>
        <div className="contact-grid">
          <div>
            <SectionHeader title="Send a message" />
            <ContactForm />
          </div>

          <div className="contact-sidebar">
            <div className="contact-panel">
              <h3>Book a Consultation</h3>
              <p>Prefer to talk directly? Schedule an introductory consultation.</p>
              <BookConsultationButton />
            </div>

            <div className="contact-panel">
              <h3>{siteConfig.legalName}</h3>
              <p>Email: {siteConfig.email || "[email to be added]"}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
