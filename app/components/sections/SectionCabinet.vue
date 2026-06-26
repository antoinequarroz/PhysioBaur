<script setup lang="ts">
const trustPoints = [
  'Consultations au cabinet à Sion',
  'Prise en charge à domicile sur prescription dans la région',
  'Cadre de soin stable pour un suivi régulier',
  'Organisation claire et lisible à chaque étape du suivi',
]

const keyFacts = [
  {
    label: 'Zone principale',
    value: 'Sion',
  },
  {
    label: 'Domicile',
    value: 'Sur prescription',
  },
  {
    label: 'Positionnement',
    value: 'Générale & sport',
  },
]
</script>

<template>
  <section id="cabinet" class="section-space relative overflow-hidden">
    <AppContainer>
      <div
        class="section-ambient top-8 left-[-5rem] h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]"
      />
      <div
        class="section-ambient-right right-[-5rem] top-[24%] h-[14rem] w-[14rem] sm:h-[20rem] sm:w-[20rem]"
      />
      <div
        class="grid gap-8 sm:gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10"
      >
        <AppReveal :distance="24">
          <div class="max-w-2xl">
            <AppSectionHeading
              eyebrow="Cabinet"
              title="Un cabinet de physiothérapie à Sion, structuré autour de l'exigence thérapeutique."
              description="PhysioBaur propose une prise en charge rigoureuse en physiothérapie générale et du sport, avec un cadre clair, des objectifs lisibles et un suivi adapté à la réalité de chaque patient."
            />

            <div class="mt-7 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2">
              <div
                v-for="point in trustPoints"
                :key="point"
                class="flex gap-3 border-t border-[var(--color-border-strong)] pt-4"
              >
                <span
                  class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  {{ point }}
                </p>
              </div>
            </div>
          </div>
        </AppReveal>

        <div class="grid gap-5">
          <AppReveal
            v-for="(fact, index) in keyFacts"
            :key="fact.label"
            :delay="index * 90"
            :distance="24"
          >
            <div
              class="surface-card-soft rounded-[1.45rem] p-4 sm:rounded-[1.75rem] sm:p-5"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
              >
                {{ fact.label }}
              </p>
              <p
                class="mt-3 text-[1.75rem] font-semibold tracking-tight text-[var(--color-heading)] sm:mt-4 sm:text-4xl"
              >
                {{ fact.value }}
              </p>
            </div>
          </AppReveal>

          <AppReveal :delay="270" :distance="24">
            <div
              class="border-t border-[var(--color-border-strong)] pt-4 sm:pt-5"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
              >
                Christophe Baur
              </p>
              <p
                class="mt-3 text-[1.15rem] font-semibold leading-7 text-[var(--color-heading)] sm:mt-4 sm:text-xl sm:leading-8"
              >
                Une organisation simple, un cadre serieux et une prise en charge
                suivie dans le temps.
              </p>
              <p class="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                Le cabinet permet un accompagnement stable, avec possibilité de
                traitement à domicile selon la prescription médicale et la
                situation du patient.
              </p>
            </div>
          </AppReveal>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
