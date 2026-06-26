<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'"
  >
    <p
      class="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 text-[1.95rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[2.25rem] lg:text-[2.6rem]"
    >
      {{ title }}
    </h2>
    <p
      class="mt-4 mx-auto max-w-2xl text-[0.97rem] leading-7 text-[var(--color-text-muted)] sm:text-[1.02rem] sm:leading-8"
    >
      {{ description }}
    </p>
  </div>
</template>
