<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value: boolean) => {
    colorMode.preference = value ? 'dark' : 'light'
  }
})
</script>

<template>
  <label
    class="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[color:color-mix(in_oklab,var(--color-surface)_92%,transparent)] px-3 py-1.5 text-[0.72rem] font-medium text-[var(--color-text-muted)] shadow-[0_8px_20px_rgba(15,23,23,0.05)] ring-1 ring-white/40 dark:ring-white/7"
  >
    <span>{{ isDark ? 'Dark' : 'Light' }}</span>
    <span class="relative block h-5.5 w-10 rounded-full bg-[var(--color-border-strong)] transition">
      <input v-model="isDark" type="checkbox" class="sr-only">
      <span
        class="absolute top-0.5 left-0.5 h-4.5 w-4.5 rounded-full bg-[var(--color-surface-elevated)] shadow transition"
        :class="isDark ? 'translate-x-4.5' : ''"
      />
    </span>
  </label>
</template>
