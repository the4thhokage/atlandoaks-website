import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import {
  defaultContactSubmitHandler,
  type ContactFormValues,
  type ContactSubmitHandler,
} from "../lib/contactSubmission"
import "./ContactForm.css"

interface ContactFormProps {
  onSubmit?: ContactSubmitHandler
}

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = "Please enter your name."
  }
  if (!values.company.trim()) {
    errors.company = "Please enter your company."
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!values.message.trim()) {
    errors.message = "Please let us know what you'd like to discuss."
  }

  return errors
}

export function ContactForm({ onSubmit = defaultContactSubmitHandler }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  function handleChange(field: keyof ContactFormValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus("submitting")
    try {
      await onSubmit(values)
      setStatus("success")
      setValues(initialValues)
    } catch (error) {
      console.error("Contact form submission failed:", error)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form-success" role="status">
        <h3>Thank you for reaching out</h3>
        <p>We've received your message and will follow up shortly.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <p className="form-error" id="contact-name-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          value={values.company}
          onChange={handleChange("company")}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "contact-company-error" : undefined}
        />
        {errors.company ? (
          <p className="form-error" id="contact-company-error">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <p className="form-error" id="contact-email-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="contact-phone">Phone (optional)</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">What would you like to discuss?</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <p className="form-error" id="contact-message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="form-error" role="alert">
          Something went wrong submitting the form. Please try again.
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  )
}
