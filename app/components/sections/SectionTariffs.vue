<script setup lang="ts">
type TariffLine = {
  label: string
  duration: string
  price: string
}

type TariffCard = {
  eyebrow: string
  title: string
  lines: TariffLine[]
  isPopular?: boolean
}

const tariffCards: TariffCard[] = [
  {
    eyebrow: 'Technique complémentaire',
    title: 'Dry needling',
    lines: [
      {
        label: 'Séance de dry needling',
        duration: '30 min',
        price: '60.-',
      },
    ],
  },
  {
    eyebrow: 'Physiothérapie',
    title: 'Physiothérapie',
    isPopular: true,
    lines: [
      {
        label: 'Séance de physiothérapie',
        duration: '30 min',
        price: '60.-',
      },
      {
        label: 'Séance de physiothérapie',
        duration: '60 min',
        price: '120.-',
      },
    ],
  },
  {
    eyebrow: 'Récupération',
    title: 'Massage',
    lines: [
      {
        label: 'Massage',
        duration: '30 min',
        price: '60.-',
      },
      {
        label: 'Massage',
        duration: '60 min',
        price: '120.-',
      },
    ],
  },
]

const supportBadges = [
  'Prescription médicale',
  'Prise en charge remboursée',
  'LAMal',
  'LAA',
]
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
        title="Des tarifs clairs et une prise en charge transparente"
        description="En Suisse, les séances de physiothérapie sont remboursées par l'assurance de base (LAMal) ou l'assurance accident (LAA). Pour en bénéficier, une prescription médicale est nécessaire ; celle-ci couvre généralement un cycle allant jusqu'à 9 séances par prescription."
        align="center"
      />

      <AppReveal :delay="60">
        <div
          class="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3"
        >
          <AppBadge
            v-for="badge in supportBadges"
            :key="badge"
            :label="badge"
          />
        </div>
      </AppReveal>

      <div
        class="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3"
      >
        <AppReveal
          v-for="(card, index) in tariffCards"
          :key="card.title"
          :delay="index * 90"
        >
          <article
            class="relative h-full rounded-[1.45rem] p-4 sm:rounded-[1.75rem] sm:p-6 flex flex-col"
            :class="card.isPopular ? 'surface-card-accent' : 'surface-card-soft'"
          >
            <div class="flex items-start justify-between gap-3">
              <p
                class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
              >
                {{ card.eyebrow }}
              </p>
              <span
                v-if="card.isPopular"
                class="flex-shrink-0 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-[0_6px_18px_rgba(37,99,235,0.45)]"
              >
                Populaire
              </span>
            </div>
            <h3
              class="mt-3 text-[1.35rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[1.65rem]"
            >
              {{ card.title }}
            </h3>

            <div class="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              <div
                v-for="line in card.lines"
                :key="`${line.label}-${line.duration}`"
                class="border-t border-[var(--color-border-strong)] pt-4 first:border-t-0 first:pt-0"
              >
                <div class="flex items-end justify-between gap-4">
                  <div>
                    <p
                      class="text-base font-medium text-[var(--color-heading)]"
                    >
                      {{ line.label }}
                    </p>
                    <p class="mt-1 text-sm text-[var(--color-text-muted)]">
                      {{ line.duration }}
                    </p>
                  </div>

                  <p
                    class="text-[1.45rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[1.8rem]"
                  >
                    {{ line.price }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 hidden flex-grow items-end lg:flex">
              <AppButton
                label="Prendre rendez-vous"
                href="/#contact"
                class="w-full"
              />
            </div>
          </article>
        </AppReveal>
      </div>

      <AppReveal :delay="150">
        <div class="mx-auto mt-6 max-w-xs sm:max-w-sm lg:hidden">
          <AppButton
            label="Prendre rendez-vous"
            href="/#contact"
            class="w-full"
          />
        </div>
      </AppReveal>

      <AppReveal :delay="180">
        <div
          class="mx-auto mt-7 max-w-3xl border-t border-[var(--color-border-strong)] pt-5 text-center sm:mt-10 sm:pt-6"
        >
          <p
            class="text-sm leading-7 text-[var(--color-text-muted)] sm:text-base"
          >
            Un renouvellement de prescription peut être accordé si la poursuite
            des séances est nécessaire. Notre prise en charge s'adapte à vos
            besoins : elle s'effectue en cabinet ou à domicile, conformément à
            votre prescription médicale.
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
