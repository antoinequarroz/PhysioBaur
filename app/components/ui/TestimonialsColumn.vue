<script setup lang="ts">
type TestimonialItem = {
  name: string
  role: string
  quote: string
}

const props = withDefaults(defineProps<{
  testimonials: TestimonialItem[]
  duration?: number
  className?: string
  paused?: boolean
}>(), {
  duration: 18,
  className: '',
  paused: false
})

const repeatedTestimonials = computed(() => [...props.testimonials, ...props.testimonials])

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('')
}
</script>

<template>
  <div
    :class="props.className"
    class="relative overflow-hidden"
  >
    <div
      class="testimonials-column flex flex-col gap-6 pb-6"
      :class="{ 'testimonials-column-paused': props.paused }"
      :style="{ '--column-duration': `${props.duration}s` }"
    >
      <article
        v-for="(testimonial, index) in repeatedTestimonials"
        :key="`${testimonial.name}-${index}`"
        class="surface-card-soft max-w-sm rounded-[2rem] p-7"
      >
        <div class="flex items-center gap-1 text-[var(--color-accent)]">
          <span v-for="star in 5" :key="star">&#9733;</span>
        </div>

        <p class="mt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
          "{{ testimonial.quote }}"
        </p>

        <div class="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
          <div class="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(99,102,241,0.08))] text-sm font-semibold text-[var(--color-heading)]">
            {{ getInitials(testimonial.name) }}
          </div>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold text-[var(--color-heading)] sm:text-base">
              {{ testimonial.name }}
            </p>
            <p class="truncate text-sm text-[var(--color-text-muted)]">
              {{ testimonial.role }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.testimonials-column {
  animation: testimonials-marquee var(--column-duration) linear infinite;
  will-change: transform;
}

.testimonials-column:hover,
.testimonials-column-paused {
  animation-play-state: paused;
}

@keyframes testimonials-marquee {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-50%);
  }
}
</style>
