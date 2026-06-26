<script setup lang="ts">
const specialties = [
  { key: 'musculo', label: 'Musculo-squelettique' },
  { key: 'sport', label: 'Physio du sport' },
  { key: 'home', label: 'A domicile sur prescription' }
]
</script>

<template>
  <div class="relative flex h-full w-full items-center justify-center py-4 sm:py-8 lg:py-0">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute right-4 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_68%)] blur-3xl" />
      <div class="absolute -left-4 bottom-8 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1),transparent_68%)] blur-3xl" />
    </div>

    <div class="w-full max-w-[420px] space-y-4 sm:max-w-[460px] sm:space-y-5">
      <div class="surface-card rounded-[1.5rem] p-4 sm:rounded-[1.9rem] sm:p-5">
        <div class="flex items-center gap-3 sm:gap-4">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.95rem] bg-[linear-gradient(135deg,#2563eb,#4f46e5)] text-base font-bold tracking-tight text-white shadow-[0_8px_24px_rgba(37,99,235,0.32)] sm:h-12 sm:w-12 sm:text-lg">
            CB
          </div>
          <div class="min-w-0">
            <p class="text-base font-semibold text-[var(--color-heading)] sm:text-lg">Christophe Baur</p>
            <p class="mt-0.5 text-sm text-[var(--color-text-muted)]">Physiotherapeute MSc</p>
          </div>
        </div>

        <div class="mt-4 grid grid-cols-3 gap-2.5 sm:mt-5 sm:gap-3">
          <div class="surface-card-soft rounded-[1rem] px-2.5 py-3 text-center sm:rounded-[1.2rem] sm:px-3">
            <p class="text-lg font-semibold tracking-tight text-[var(--color-heading)] sm:text-xl">15+</p>
            <p class="mt-1 text-[0.62rem] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">ans</p>
          </div>
          <div class="surface-card-soft rounded-[1rem] px-2.5 py-3 text-center sm:rounded-[1.2rem] sm:px-3">
            <p class="text-lg font-semibold tracking-tight text-[var(--color-heading)] sm:text-xl">3</p>
            <p class="mt-1 text-[0.62rem] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">axes</p>
          </div>
          <div class="surface-card-soft rounded-[1rem] px-2.5 py-3 text-center sm:rounded-[1.2rem] sm:px-3">
            <p class="text-lg font-semibold tracking-tight text-[var(--color-heading)] sm:text-xl">Sion</p>
            <p class="mt-1 text-[0.62rem] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Valais</p>
          </div>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-3">
        <div
          v-for="spec in specialties"
          :key="spec.key"
          class="border-t border-[var(--color-border-strong)] px-1 pt-3 sm:pt-4"
        >
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(37,99,235,0.12)] text-sm font-bold text-[var(--color-accent)]">
            +
          </div>
          <p class="mt-2.5 text-xs font-semibold leading-[1.5] text-[var(--color-heading)] sm:mt-3">{{ spec.label }}</p>
        </div>
      </div>

      <div class="border-t border-[var(--color-border-strong)] pt-3 sm:pt-4">
        <p class="text-sm leading-6 text-[var(--color-text-muted)]">
          Rembourse par <span class="font-semibold text-[var(--color-heading)]">LAMal et LAA</span> sur prescription
        </p>
      </div>
    </div>
  </div>
</template>
