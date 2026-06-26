<script setup lang="ts">
const navigation = [
  { label: 'Accueil', href: '/#accueil' },
  { label: 'Pourquoi', href: '/#pourquoi' },
  { label: 'Therapeute', href: '/#a-propos' },
  { label: 'Domaines', href: '/#domaines' },
  { label: 'Prestations', href: '/#prestations' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'Avis', href: '/#avis' },
  { label: 'Infos', href: '/#infos' },
  { label: 'Contact', href: '/#contact' }
]

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg)_86%,transparent)] backdrop-blur-xl">
    <AppContainer>
      <div class="flex h-16 items-center justify-between gap-3 sm:h-18">
        <NuxtLink to="/#accueil" class="text-[1.02rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-lg">
          PhysioBaur
        </NuxtLink>

        <nav class="hidden items-center gap-6 lg:flex">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            class="text-[0.92rem] text-[var(--color-text-muted)] transition hover:text-[var(--color-heading)]"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center gap-2.5 lg:flex">
          <ThemeToggle />
          <AppButton label="Prendre rendez-vous" href="/#contact" />
        </div>

        <button
          type="button"
          class="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[color:color-mix(in_oklab,var(--color-surface)_92%,transparent)] px-3 text-[var(--color-heading)] shadow-[0_8px_20px_rgba(15,23,42,0.06)] ring-1 ring-white/40 lg:hidden dark:ring-white/7"
          aria-label="Ouvrir le menu"
          @click="isOpen = !isOpen"
        >
          <span class="text-xs font-semibold uppercase tracking-[0.18em]">{{ isOpen ? 'Fermer' : 'Menu' }}</span>
        </button>
      </div>

      <div v-if="isOpen" class="pb-3 lg:hidden">
        <nav class="surface-card-soft flex flex-col gap-2 rounded-[1.4rem] p-3">
          <NuxtLink
            v-for="item in navigation"
            :key="item.href"
            :to="item.href"
            class="rounded-xl px-3 py-2.5 text-sm text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-heading)]"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="grid gap-2 pt-2">
            <ThemeToggle />
            <AppButton label="Prendre rendez-vous" href="/#contact" />
          </div>
        </nav>
      </div>
    </AppContainer>
  </header>
</template>
