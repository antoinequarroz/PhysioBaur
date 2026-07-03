<script setup lang="ts">
const siteStore = useSiteStore()

const cabinetLinks = [
  { label: 'Thérapeute', to: '/#a-propos' },
  { label: 'Domaines', to: '/#domaines' },
  { label: 'Prestations', to: '/#prestations' },
  { label: 'Tarifs', to: '/#tarifs' },
]

const infoLinks = [
  { label: 'Pourquoi PhysioBaur', to: '/#pourquoi' },
  { label: 'Avis', to: '/#avis' },
  { label: 'Infos pratiques', to: '/#infos' },
  { label: 'Contact', to: '/#contact' },
]

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteStore.address)}`
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
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-[1.15fr_0.7fr_0.7fr_0.95fr] lg:gap-8"
        >
          <div class="max-w-md sm:col-span-2 lg:col-span-1">
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
            <AppButton
              label="Prendre rendez-vous"
              href="/#contact"
              class="mt-5"
            />
          </div>

          <div>
            <p
              class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
            >
              Le cabinet
            </p>
            <div class="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
              <NuxtLink
                v-for="item in cabinetLinks"
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
              Informations
            </p>
            <div class="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
              <NuxtLink
                v-for="item in infoLinks"
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
              <a
                :href="mapsHref"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition-colors hover:text-[var(--color-heading)]"
              >
                {{ siteStore.address }}
              </a>
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
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/mentions-legales"
              class="transition-colors hover:text-[var(--color-heading)]"
            >
              Mentions légales
            </NuxtLink>
            <p>Sion, Valais</p>
          </div>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>
