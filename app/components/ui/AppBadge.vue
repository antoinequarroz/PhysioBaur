<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="surface-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-text-muted)]"
  >
    {{ label }}
  </span>
</template>
