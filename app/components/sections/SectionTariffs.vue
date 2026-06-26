<script setup lang="ts">
type TariffLine = {
  label: string
  duration: string
  price: string
}

type TariffCard = {
  eyebrow: string
  title: string
  description: string
  lines: TariffLine[]
}

const tariffCards: TariffCard[] = [
  {
    eyebrow: 'Physiotherapie',
    title: 'Physiotherapie',
    description:
      "Le format central du cabinet pour le suivi general, la reeducation fonctionnelle et le retour progressif a l'activite.",
    lines: [
      {
        label: 'Seance de physiotherapie',
        duration: '30 min',
        price: '60.-'
      },
      {
        label: 'Seance de physiotherapie',
        duration: '60 min',
        price: '120.-'
      }
    ]
  },
  {
    eyebrow: 'Technique complementaire',
    title: 'Dry needling',
    description:
      'Integre selon la situation clinique dans une prise en charge ciblee et adaptee au bilan.',
    lines: [
      {
        label: 'Seance de dry needling',
        duration: '30 min',
        price: '60.-'
      }
    ]
  },
  {
    eyebrow: 'Recuperation',
    title: 'Massage',
    description:
      'Approche complementaire pour relacher, recuperer et accompagner certaines phases de traitement.',
    lines: [
      {
        label: 'Massage',
        duration: '30 min',
        price: '60.-'
      },
      {
        label: 'Massage',
        duration: '60 min',
        price: '120.-'
      }
    ]
  }
]

const supportBadges = ['LAMal', 'LAA', "Jusqu'a 9 seances", 'Prescription medicale']
</script>

<template>
  <section id="tarifs" class="section-space relative overflow-hidden">
    <AppContainer>
      <div class="pointer-events-none absolute inset-x-0 top-8 -z-10 h-72">
        <div class="tariff-aurora tariff-aurora-one" />
        <div class="tariff-aurora tariff-aurora-two" />
      </div>

      <AppSectionHeading
        eyebrow="Tarifs"
        title="Des tarifs clairs et une prise en charge transparente."
        description="En Suisse, la physiotherapie est prise en charge par l'assurance maladie de base (LAMal) et l'assurance accident (LAA), sous certaines conditions. Une prescription medicale est necessaire et couvre generalement jusqu'a 9 seances par prescription."
        align="center"
      />

      <AppReveal :delay="60">
        <div class="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3">
          <AppBadge
            v-for="badge in supportBadges"
            :key="badge"
            :label="badge"
          />
        </div>
      </AppReveal>

      <div class="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
        <AppReveal
          v-for="(card, index) in tariffCards"
          :key="card.title"
          :delay="index * 90"
        >
          <article
            class="relative h-full rounded-[1.45rem] p-4 sm:rounded-[1.75rem] sm:p-6"
            :class="index === 0 ? 'surface-card-accent' : 'surface-card-soft'"
          >
            <div
              v-if="index === 0"
              class="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.7),transparent)]"
            />

            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {{ card.eyebrow }}
            </p>
            <h3 class="mt-3 text-[1.35rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[1.65rem]">
              {{ card.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-[var(--color-text-muted)] sm:leading-7">
              {{ card.description }}
            </p>

            <div class="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              <div
                v-for="line in card.lines"
                :key="`${line.label}-${line.duration}`"
                class="border-t border-[var(--color-border-strong)] pt-4 first:border-t-0 first:pt-0"
              >
                <div class="flex items-end justify-between gap-4">
                  <div>
                    <p class="text-base font-medium text-[var(--color-heading)]">
                      {{ line.label }}
                    </p>
                    <p class="mt-1 text-sm text-[var(--color-text-muted)]">
                      {{ line.duration }}
                    </p>
                  </div>

                  <p class="text-[1.45rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[1.8rem]">
                    {{ line.price }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </AppReveal>
      </div>

      <AppReveal :delay="180">
        <div class="mx-auto mt-7 max-w-3xl border-t border-[var(--color-border-strong)] pt-5 text-center sm:mt-10 sm:pt-6">
          <p class="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
            Un renouvellement de prescription peut etre accorde si necessaire. Les therapies peuvent etre dispensees en cabinet ou a domicile selon l'ordonnance medicale et les traitements requis.
          </p>
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>

<style scoped>
.tariff-aurora {
  position: absolute;
  border-radius: 9999px;
  filter: blur(96px);
  opacity: 0.1;
}

.tariff-aurora-one {
  top: 0;
  left: 12%;
  height: 14rem;
  width: 14rem;
  background: rgba(37, 99, 235, 0.24);
  animation: tariff-aurora-one 20s infinite alternate ease-in-out;
}

.tariff-aurora-two {
  top: 1rem;
  right: 12%;
  height: 13rem;
  width: 13rem;
  background: rgba(99, 102, 241, 0.18);
  animation: tariff-aurora-two 24s infinite alternate ease-in-out;
}

@keyframes tariff-aurora-one {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(4rem, 1.5rem, 0);
  }
}

@keyframes tariff-aurora-two {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-3rem, 2rem, 0);
  }
}
</style>
