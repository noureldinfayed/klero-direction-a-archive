'use client'

import { useEffect, useRef, useState } from 'react'
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

export default function Reveal({
  children,
  delay = 0,
  as,
  className = '',
  style,
  id,
}: RevealProps) {
  const Component: ElementType = as ?? 'div'
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` d${delay}` : ''
  const stateClass = visible ? ' in' : ''
  const cls = `reveal${delayClass}${stateClass}${className ? ' ' + className : ''}`

  return (
    <Component ref={ref} id={id} className={cls} style={style}>
      {children}
    </Component>
  )
}
