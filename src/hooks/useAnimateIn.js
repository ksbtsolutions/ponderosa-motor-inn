import { useEffect, useRef } from 'react'

export function useAnimateIn(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { el.classList.add('is-visible'); return }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useAnimateStagger(count, options = {}) {
  const refs = Array.from({ length: count }, () => useRef(null))

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    refs.forEach((ref, i) => {
      const el = ref.current
      if (!el) return
      if (prefersReduced) { el.classList.add('is-visible'); return }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('is-visible'), i * 80)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
      )
      observer.observe(el)
    })
  }, [])

  return refs
}
