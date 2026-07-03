<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CardStackItem } from '../ui/CardStack.vue'

type ServiceCard = CardStackItem & {
  items: string[]
}

const serviceCards: ServiceCard[] = [
  {
    id: 'musculo-systeme',
    tag: 'Musculosquelettique',
    title: 'Système musculo-squelettique',
    description:
      'Une prise en charge structurée des douleurs, limitations fonctionnelles et troubles musculo-squelettiques, avec des outils adaptés aux objectifs du traitement',
    imageSrc:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&auto=format&fit=crop&q=80',
    items: [
      'Évaluation sportive',
      'Rééducation',
      'Différents concepts de thérapie manuelle (SAMT, Maitland, Cyriax, Sohier, …)',
      'Renforcement musculaire',
      'Proprioception',
      'Drainage lymphatique manuel',
      'Massage',
      'Électrothérapie (Compex, Teecar, …)',
      'Crochetage myo-fasciaux',
      'Flossing therapy (Blood Flow Restriction)',
      'Taping & Kinesio-Taping',
      'Dry needling',
      'Trigger point',
      'Scraping',
    ],
  },
  {
    id: 'sport',
    tag: 'Sport',
    title: 'Physiothérapie du sport',
    description:
      'Une prise en charge du sportif amateur ou professionnel, orientée vers la récupération, la reprise et le retour progressif au terrain',
    imageSrc:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop&q=80',
    items: [
      'Prise en charge de sportifs amateurs et professionnels',
      'Évaluation sportive',
      'Rééducation',
      'Massage',
      'Trigger point',
      'Dry needling',
      'Proprioception',
      'Renforcement musculaire',
      'Flossing therapy (Blood Flow Restriction)',
      'Électrostimulation, Compex',
    ],
  },
  {
    id: 'manuelle',
    tag: 'Technique',
    title: 'Thérapie manuelle',
    description:
      'Des techniques ciblées pour restaurer le mouvement, réduire certaines douleurs et soutenir le traitement fonctionnel',
    imageSrc: '/images/services/therapieManuelle.jpg',
    items: [
      'Mobilisations articulaires',
      'Travail tissulaire',
      'Approche manuelle intégrée au bilan',
      'Traitement des restrictions de mouvement',
    ],
  },
  {
    id: 'dry-needling',
    tag: 'Complémentaire',
    title: 'Dry needling',
    description:
      'Une technique complémentaire intégrée selon le bilan clinique, la situation du patient et les objectifs thérapeutiques',
    imageSrc: '/images/services/dryNeedling.jpg',
    items: [
      'Trigger points',
      'Douleurs musculaires',
      'Intégration au bilan',
      'Complément du traitement actif',
    ],
  },
  {
    id: 'massage',
    tag: 'Récupération',
    title: 'Massage thérapeutique',
    description:
      "Un travail de récupération et de relâchement qui peut accompagner certaines phases du traitement ou de reprise de l'activité",
    imageSrc: '/images/services/massage.jpg',
    items: [
      'Récupération',
      'Relâchement',
      'Accompagnement du soin',
      "Soutien au retour à l'activité",
    ],
  },
  {
    id: 'suivi',
    tag: 'Suivi',
    title: 'Accompagnement personnalisé',
    description:
      'Des objectifs clairs, des conseils utiles et un suivi adapté à votre situation, du quotidien au sport',
    imageSrc: '/images/services/fitness.jpg',
    items: [
      'Conseils pratiques',
      'Progression lisible',
      'Suivi adapté',
      'Retour au quotidien ou au sport',
    ],
  },
  {
    id: 'electrostimulation',
    tag: 'Outils',
    title: 'Électrostimulation & Compex',
    description:
      'Des outils complémentaires intégrés selon les objectifs de rééducation, de renforcement ou de récupération.',
    imageSrc: '/images/services/compex.jpg',
    items: [
      'Activation musculaire',
      'Récupération',
      'Complément au renforcement',
      'Intégration au plan de traitement',
    ],
  },
  {
    id: 'taping',
    tag: 'Support',
    title: 'Taping & kinesio-taping',
    description:
      "Un appui complémentaire utile dans certaines phases de traitement, de stabilisation ou de reprise de l'activité.",
    imageSrc: '/images/services/tapping.jpg',
    items: [
      'Soutien articulaire',
      'Accompagnement fonctionnel',
      "Retour progressif à l'activité",
      'Intégration à la prise en charge globale',
    ],
  },
]

const activeIndex = ref(0)
const activeService = computed(() => serviceCards[activeIndex.value]!)
</script>

<template>
  <section id="prestations" class="section-space relative overflow-hidden">
    <AppContainer>
      <div
        class="section-ambient top-8 left-[-4rem] h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]"
      />
      <div
        class="section-ambient-right bottom-6 right-[-4rem] h-[12rem] w-[12rem] sm:h-[16rem] sm:w-[16rem]"
      />

      <div
        class="grid gap-8 sm:gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-10"
      >
        <AppReveal>
          <div class="max-w-2xl">
            <AppSectionHeading
              eyebrow="Expertise technique"
              title="Une approche validée par la recherche"
              description="Le cabinet propose une physiothérapie générale et du sport appuyée sur des techniques sélectionnées selon la situation clinique, les besoins du patient et la progression attendue."
            />

            <div
              class="mt-7 rounded-[1.55rem] surface-card-soft p-5 sm:mt-8 sm:p-6"
            >
              <p
                class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
              >
                {{ activeService.tag }}
              </p>
              <h3
                class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-heading)]"
              >
                {{ activeService.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {{ activeService.description }}
              </p>

              <ul
                class="mt-5 space-y-2 border-t border-[var(--color-border-strong)] pt-4 text-sm text-[var(--color-text-muted)]"
              >
                <li
                  v-for="item in activeService.items"
                  :key="item"
                  class="flex items-start gap-2.5"
                >
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </AppReveal>

        <AppReveal :delay="80">
          <CardStack
            :items="serviceCards"
            :initial-index="0"
            :auto-advance="true"
            :interval-ms="2800"
            @change="(index) => (activeIndex = index)"
          />
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
