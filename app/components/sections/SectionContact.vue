<script setup lang="ts">
const siteStore = useSiteStore()

const contactItems = [
  {
    label: 'Telephone',
    value: siteStore.phone,
    href: `tel:${siteStore.phone.replaceAll(' ', '')}`
  },
  {
    label: 'E-mail',
    value: siteStore.email,
    href: `mailto:${siteStore.email}`
  },
  {
    label: 'Adresse',
    value: siteStore.address
  }
]
</script>

<template>
  <section id="contact" class="section-space relative overflow-hidden">
    <AppContainer>
      <div class="section-ambient top-8 left-[-4rem] h-[12rem] w-[12rem] sm:h-[16rem] sm:w-[16rem]" />
      <div class="section-ambient-right bottom-4 right-[-4rem] h-[13rem] w-[13rem] sm:h-[17rem] sm:w-[17rem]" />
      <div class="grid gap-8 sm:gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <AppReveal :distance="24">
          <div class="max-w-xl">
            <AppSectionHeading
              eyebrow="Contact"
              title="Expliquez votre situation et prenez contact avec le cabinet."
              description="Un premier echange simple avec votre cabinet de physiotherapie a Sion pour comprendre votre besoin et vous orienter."
            />

            <div class="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
              <div
                v-for="item in contactItems"
                :key="item.label"
                class="border-t border-[var(--color-border-strong)] pt-4"
              >
                <p class="text-sm text-[var(--color-text-muted)]">
                  {{ item.label }}
                </p>

                <a
                  v-if="item.href"
                  class="mt-2 block text-[0.98rem] font-semibold leading-6 text-[var(--color-heading)] transition-colors hover:text-[var(--color-accent)] sm:text-lg"
                  :href="item.href"
                >
                  {{ item.value }}
                </a>

                <p
                  v-else
                  class="mt-2 text-[0.98rem] font-semibold leading-6 text-[var(--color-heading)] sm:text-lg"
                >
                  {{ item.value }}
                </p>
              </div>
            </div>

            <div class="mt-7 border-t border-[var(--color-border-strong)] pt-4">
              <p class="max-w-lg text-sm leading-7 text-[var(--color-text-muted)]">
                Vous pouvez laisser un message ou appeler directement le cabinet a Sion.
              </p>
            </div>
          </div>
        </AppReveal>

        <AppReveal :delay="120" :distance="30">
          <div class="rounded-[1.35rem] surface-card-soft p-4 sm:rounded-[1.65rem] sm:p-7">
            <ContactForm />
          </div>
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
