<script setup lang="ts">
const siteStore = useSiteStore()

const infos = [
  {
    title: 'Adresse',
    value: siteStore.address
  },
  {
    title: 'Telephone',
    value: siteStore.phone
  },
  {
    title: 'E-mail',
    value: siteStore.email
  },
  {
    title: 'Horaires',
    value: 'Sur rendez-vous'
  }
]
</script>

<template>
  <section id="infos" class="section-space relative overflow-hidden">
    <AppContainer>
      <div class="section-ambient-right right-[-5rem] top-[18%] h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]" />
      <div class="grid gap-8 sm:gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <AppReveal>
          <AppSectionHeading
            eyebrow="Infos pratiques"
            title="Cabinet de physiotherapie a Sion: informations pratiques et contact."
            description="PhysioBaur vous accueille a Sion pour des prises en charge en physiotherapie generale et physiotherapie du sport, avec possibilite de traitement a domicile sur prescription dans la region de Sion et Grimisuat."
          />
        </AppReveal>
        <div class="grid gap-3 sm:gap-4 sm:grid-cols-2">
          <AppReveal v-for="info in infos" :key="info.title">
            <AppCard variant="soft">
              <p class="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                {{ info.title }}
              </p>
              <p class="mt-4 text-lg font-semibold text-[var(--color-heading)]">
                {{ info.value }}
              </p>
            </AppCard>
          </AppReveal>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
