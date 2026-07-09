<script setup lang="ts">
const siteStore = useSiteStore()

const contactItems = [
  {
    label: 'Téléphone',
    value: siteStore.phone,
    href: `tel:${siteStore.phone.replaceAll(' ', '')}`,
    action: 'call',
  },
  {
    label: 'E-mail',
    value: siteStore.email,
    href: `mailto:${siteStore.email}`,
    action: 'copy',
  },
  {
    label: 'Adresse',
    value: siteStore.address,
    action: 'map',
  },
]

const copyEmail = () => {
  navigator.clipboard.writeText(siteStore.email)
}

const callNow = () => {
  window.location.href = 'tel:0787603368'
}

const openMaps = () => {
  window.open(
    'https://www.google.com/maps/dir/?api=1&destination=Rue+du+Stade+4,+1950+Sion,+Valais',
    '_blank',
  )
}

// Pre-computed OpenStreetMap raster tiles (zoom 16) covering Rue du Stade 4,
// 1950 Sion, so the marker can be styled in the site's accent color instead
// of relying on the embed's non-customizable default pin.
const mapTiles = [
  { x: 34108, y: 23253, left: -35.1513, top: -20.7077 },
  { x: 34109, y: 23253, left: 4.8487, top: -20.7077 },
  { x: 34110, y: 23253, left: 44.8487, top: -20.7077 },
  { x: 34111, y: 23253, left: 84.8487, top: -20.7077 },
  { x: 34108, y: 23254, left: -35.1513, top: 59.2923 },
  { x: 34109, y: 23254, left: 4.8487, top: 59.2923 },
  { x: 34110, y: 23254, left: 44.8487, top: 59.2923 },
  { x: 34111, y: 23254, left: 84.8487, top: 59.2923 },
]
const mapZoom = 16
</script>

<template>
  <section id="contact" class="section-space relative overflow-hidden">
    <AppContainer>
      <div
        class="section-ambient top-8 left-[-4rem] h-[12rem] w-[12rem] sm:h-[16rem] sm:w-[16rem]"
      />
      <div
        class="section-ambient-right bottom-4 right-[-4rem] h-[13rem] w-[13rem] sm:h-[17rem] sm:w-[17rem]"
      />
      <div class="grid gap-8 sm:gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <AppReveal :distance="24">
          <div class="max-w-xl">
            <AppSectionHeading
              eyebrow="Contact"
              title="Expliquez-nous votre situation Prenons contact"
              description="Un échange simple et rapide afin de cibler vos besoins et organiser vos futures séances."
            />

            <div class="mt-6 space-y-4 sm:mt-7">
              <div
                v-for="item in contactItems"
                :key="item.label"
                class="border-t border-[var(--color-border-strong)] pt-4"
              >
                <div
                  class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div class="min-w-0">
                    <p class="text-sm text-[var(--color-text-muted)]">
                      {{ item.label }}
                    </p>
                    <a
                      v-if="item.href"
                      class="mt-1 block text-[0.98rem] font-semibold leading-6 text-[var(--color-heading)] transition-colors hover:text-[var(--color-accent)] sm:text-lg"
                      :href="item.href"
                    >
                      {{ item.value }}
                    </a>
                    <p
                      v-else
                      class="mt-1 text-[0.98rem] font-semibold leading-6 text-[var(--color-heading)] sm:text-lg"
                    >
                      {{ item.value }}
                    </p>
                  </div>
                  <AppButton
                    v-if="item.action === 'copy'"
                    @click="copyEmail"
                    label="Copier"
                    variant="secondary"
                    size="sm"
                    class="flex-shrink-0"
                  />
                  <AppButton
                    v-if="item.action === 'call'"
                    @click="callNow"
                    label="Appeler"
                    variant="secondary"
                    size="sm"
                    class="flex-shrink-0"
                  />
                  <AppButton
                    v-if="item.action === 'map'"
                    @click="openMaps"
                    label="Voir la carte"
                    variant="secondary"
                    size="sm"
                    class="flex-shrink-0"
                  />
                </div>
              </div>
            </div>

            <div class="mt-7 border-t border-[var(--color-border-strong)] pt-4">
              <p
                class="max-w-lg text-sm leading-7 text-[var(--color-text-muted)]"
              >
                Envoyez-nous un message via le formulaire ou appelez
                directement le cabinet selon votre préférence.
              </p>
            </div>
          </div>
        </AppReveal>

        <AppReveal :delay="120" :distance="30">
          <div
            class="rounded-[1.35rem] surface-card-soft p-4 sm:rounded-[1.65rem] sm:p-7"
          >
            <!-- OpenStreetMap tiles with a custom accent-colored marker -->
            <a
              :href="`https://www.openstreetmap.org/?mlat=46.2334943&mlon=7.3725336#map=17/46.2334943/7.3725336`"
              target="_blank"
              rel="noopener noreferrer"
              class="relative mb-6 block h-64 w-full overflow-hidden rounded-lg bg-[var(--color-surface)]"
              aria-label="Ouvrir la carte du cabinet sur OpenStreetMap"
            >
              <img
                v-for="tile in mapTiles"
                :key="`${tile.x}-${tile.y}`"
                :src="`https://tile.openstreetmap.org/${mapZoom}/${tile.x}/${tile.y}.png`"
                alt=""
                class="absolute h-[80%] w-[40%]"
                :style="{ left: `${tile.left}%`, top: `${tile.top}%` }"
                loading="lazy"
                draggable="false"
              />
              <svg
                class="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-full text-[var(--color-accent)] drop-shadow-[0_4px_6px_rgba(15,23,42,0.35)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 15 9 15s9-8.25 9-15c0-4.97-4.03-9-9-9Zm0 12.5A3.5 3.5 0 1 1 12 5.5a3.5 3.5 0 0 1 0 7Z"
                />
              </svg>
            </a>
            <ContactForm />
          </div>
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
