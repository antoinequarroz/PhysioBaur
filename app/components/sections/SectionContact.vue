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
  navigator.clipboard.writeText('contact@physiobaur.ch')
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
              title="Expliquez-nous votre situation et prenez contact."
              description="Décrivez votre besoin en quelques mots — douleur, blessure, reprise sportive ou suivi général — et nous revenons vers vous rapidement pour organiser un premier rendez-vous adapté à votre situation."
            />

            <div class="mt-6 space-y-4 sm:mt-7">
              <div
                v-for="item in contactItems"
                :key="item.label"
                class="border-t border-[var(--color-border-strong)] pt-4"
              >
                <div class="flex items-start justify-between gap-4">
                  <div>
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
                Vous pouvez laisser un message ou appeler directement le cabinet
                à Sion.
              </p>
            </div>
          </div>
        </AppReveal>

        <AppReveal :delay="120" :distance="30">
          <div
            class="rounded-[1.35rem] surface-card-soft p-4 sm:rounded-[1.65rem] sm:p-7"
          >
            <!-- OpenStreetMap Embed -->
            <div class="mb-6 h-64 w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.3675,46.2305,7.3775,46.2365&layer=mapnik&marker=46.2334943,7.3725336"
                width="100%"
                height="100%"
                frameborder="0"
                style="border: 0"
                allowfullscreen
                loading="lazy"
              />
            </div>
            <ContactForm />
          </div>
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
