import "./PhotoCredit.css"

interface PhotoCreditProps {
  photographer: string
  photographerUrl: string
  sourceLabel: string
  sourceUrl: string
  licenseLabel: string
  licenseUrl: string
}

/**
 * Required attribution for CC BY-SA licensed photography used on this site.
 * See /CREDITS.md at the repository root for the full list.
 */
export function PhotoCredit({
  photographer,
  photographerUrl,
  sourceLabel,
  sourceUrl,
  licenseLabel,
  licenseUrl,
}: PhotoCreditProps) {
  return (
    <p className="photo-credit">
      Photo by{" "}
      <a href={photographerUrl} target="_blank" rel="noopener noreferrer">
        {photographer}
      </a>
      , via{" "}
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        {sourceLabel}
      </a>{" "}
      (
      <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
        {licenseLabel}
      </a>
      )
    </p>
  )
}
