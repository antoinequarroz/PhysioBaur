export const useReveal = <T extends HTMLElement>() => {
  const element = useTemplateRef<T>('revealTarget')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!element.value) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -12% 0px'
      }
    )

    observer.observe(element.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    element
  }
}
