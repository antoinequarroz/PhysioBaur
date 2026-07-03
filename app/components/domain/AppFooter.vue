<script setup lang="ts">
const siteStore = useSiteStore()

const navigation = [
  { label: 'Pourquoi', to: '/#pourquoi' },
  { label: 'Thérapeute', to: '/#a-propos' },
  { label: 'Domaines', to: '/#domaines' },
  { label: 'Prestations', to: '/#prestations' },
  { label: 'Tarifs', to: '/#tarifs' },
  { label: 'Avis', to: '/#avis' },
  { label: 'Infos', to: '/#infos' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Mentions légales', to: '/mentions-legales' },
]
</script>

<template>
  <footer class="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10">
    <AppContainer>
      <div
        class="section-ambient left-[-6rem] bottom-[-2rem] top-auto h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]"
      />
      <div
        class="section-ambient-right right-[-6rem] bottom-[-3rem] h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem]"
      />
      <div class="border-t border-[var(--color-border-strong)] pt-6 sm:pt-9">
        <div
          class="grid gap-7 sm:gap-8 lg:grid-cols-[1.1fr_0.75fr_0.9fr] lg:gap-12"
        >
          <div class="max-w-md">
            <p class="text-lg font-semibold text-[var(--color-heading)]">
              PhysioBaur
            </p>
            <p class="mt-1 text-sm font-medium text-[var(--color-accent)]">
              L'expertise au cœur de votre rééducation.
            </p>
            <p class="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              Cabinet de physiothérapie générale et du sport à Sion, avec prise
              en charge à domicile sur prescription selon la situation clinique.
            </p>
          </div>

          <div>
            <p
              class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
            >
              Navigation
            </p>
            <div class="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
              <NuxtLink
                v-for="item in navigation"
                :key="item.to"
                :to="item.to"
                class="block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-heading)]"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <div>
            <p
              class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
            >
              Coordonnées
            </p>
            <div
              class="mt-3 space-y-2.5 text-sm text-[var(--color-text-muted)] sm:mt-4 sm:space-y-3"
            >
              <p>{{ siteStore.address }}</p>
              <a
                :href="`tel:${siteStore.phone.replaceAll(' ', '')}`"
                class="block transition-colors hover:text-[var(--color-heading)]"
              >
                {{ siteStore.phone }}
              </a>
              <a
                :href="`mailto:${siteStore.email}`"
                class="block transition-colors hover:text-[var(--color-heading)]"
              >
                {{ siteStore.email }}
              </a>
            </div>
          </div>
        </div>

        <div
          class="mt-7 flex flex-col gap-2.5 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-text-muted)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-5"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} PhysioBaur. Tous droits
            réservés.
          </p>
          <p>Sion, Valais</p>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>
