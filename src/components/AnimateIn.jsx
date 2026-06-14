import React from 'react'
import { useAnimateIn } from '../hooks/useAnimateIn'

export function AnimateIn({ children, delay = 0, className = '', tag: Tag = 'div', ...props }) {
  const ref = useAnimateIn()
  const delayClass = delay > 0 ? `delay-${delay}` : ''
  return (
    <Tag ref={ref} className={`animate-in ${delayClass} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
