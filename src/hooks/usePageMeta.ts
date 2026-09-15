import { useEffect } from "react"

interface PageMetaOptions {
  title: string
  description: string
}

function setMetaTag(name: string, content: string, attr: "name" | "property" = "name") {
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title
    setMetaTag("description", description)
    setMetaTag("og:title", title, "property")
    setMetaTag("og:description", description, "property")
    setMetaTag("og:type", "website", "property")
  }, [title, description])
}
