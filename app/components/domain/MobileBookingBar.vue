<script setup lang="ts">
const isVisible = ref(false)
const isNearFooter = ref(false)
let footerObserver: IntersectionObserver | null = null

const updateScrollState = () => {
  const hasPassedHero = window.scrollY > window.innerHeight * 0.6
  isVisible.value = hasPassedHero && !isNearFooter.value
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()

  const footer = document.querySelector('footer')
  if (footer) {
    footerObserver = new IntersectionObserver(
      ([entry]) => {
        isNearFooter.value = Boolean(entry?.isIntersecting)
        updateScrollState()
      },
      { rootMargin: '0px 0px -20% 0px' }
    )
    footerObserver.observe(footer)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
  footerObserver?.disconnect()
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg)_92%,transparent)] px-4 py-3 backdrop-blur-xl lg:hidden"
      style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom))"
    >
      <NuxtLink
        to="/#contact"
        class="flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition hover:bg-[var(--color-accent-strong)]"
      >
        Prendre rendez-vous
      </NuxtLink>
    </div>
  </Transition>
</template>
