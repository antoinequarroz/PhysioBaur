<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'ghost'

withDefaults(
  defineProps<{
    label: string
    href?: string
    variant?: ButtonVariant
    target?: string
  }>(),
  {
    href: undefined,
    variant: 'primary',
    target: undefined
  }
)

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]',
  secondary:
    'bg-[color:color-mix(in_oklab,var(--color-surface)_92%,transparent)] text-[var(--color-text)] shadow-[0_8px_20px_rgba(15,23,42,0.05)] ring-1 ring-white/40 hover:-translate-y-0.5 hover:text-[var(--color-accent)] dark:ring-white/7',
  ghost:
    'text-[var(--color-text-muted)] hover:text-[var(--color-accent)]'
}
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="href"
    :target="target"
    class="inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-[0.92rem] font-semibold transition duration-300 sm:w-auto sm:px-5 sm:py-3 sm:text-sm"
    :class="variantClasses[variant]"
  >
    {{ label }}
  </NuxtLink>
  <button
    v-else
    type="submit"
    class="inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-[0.92rem] font-semibold transition duration-300 sm:w-auto sm:px-5 sm:py-3 sm:text-sm"
    :class="variantClasses[variant]"
  >
    {{ label }}
  </button>
</template>
