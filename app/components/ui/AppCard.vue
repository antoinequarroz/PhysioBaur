<script setup lang="ts">
type CardVariant = 'default' | 'soft' | 'accent'

withDefaults(
  defineProps<{
    variant?: CardVariant
  }>(),
  {
    variant: 'default'
  }
)

const variantClasses: Record<CardVariant, string> = {
  default: 'app-card',
  soft: 'surface-card-soft',
  accent: 'surface-card-accent'
}
</script>

<template>
  <div
    class="group rounded-[1.35rem] p-4 sm:rounded-3xl sm:p-6"
    :class="variantClasses[variant]"
  >
    <slot />
  </div>
</template>
