export interface ContactFormValues {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

export type ContactSubmitHandler = (values: ContactFormValues) => Promise<void>

/**
 * Placeholder submit handler for v1. No backend is wired up yet.
 * Replace this with a real integration (Formspree, a DigitalOcean function,
 * a custom API, etc.) once one has been chosen.
 */
export const defaultContactSubmitHandler: ContactSubmitHandler = async (values) => {
  console.info("Contact form submitted (no backend configured yet):", values)
  await new Promise((resolve) => setTimeout(resolve, 400))
}
