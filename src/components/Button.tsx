import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"
import "./Button.css"

type Variant = "primary" | "secondary" | "ghost"

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

interface LinkButtonProps extends CommonProps {
  to: string
  href?: undefined
  type?: undefined
}

interface AnchorButtonProps extends CommonProps {
  href: string
  to?: undefined
  type?: undefined
  target?: string
  rel?: string
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  to?: undefined
  href?: undefined
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props
  const classes = `btn btn-${variant} ${className}`.trim()

  if (props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if (props.href) {
    return (
      <a href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </a>
    )
  }

  const {
    variant: _variant,
    children: _children,
    className: _className,
    to: _to,
    href: _href,
    ...rest
  } = props as NativeButtonProps

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
