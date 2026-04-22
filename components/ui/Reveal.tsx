import type { ElementType, ReactNode } from 'react'

type RevealDelay = 0 | 1 | 2 | 3 | 4

type RevealProps = {
  children: ReactNode
  delay?: RevealDelay
  as?: ElementType
  className?: string
  style?: React.CSSProperties
  id?: string
}

/**
 * Server component. Renders elements with the `reveal` class so a single
 * shared IntersectionObserver (mounted once via <RevealRunner />) can add
 * the `.in` class when they enter view. Avoids per-component hydration.
 */
export default function Reveal({
  children,
  delay = 0,
  as,
  className = '',
  style,
  id,
}: RevealProps) {
  const Component: ElementType = as ?? 'div'
  const delayClass = delay > 0 ? ` d${delay}` : ''
  const cls = `reveal${delayClass}${className ? ' ' + className : ''}`

  return (
    <Component id={id} className={cls} style={style}>
      {children}
    </Component>
  )
}
