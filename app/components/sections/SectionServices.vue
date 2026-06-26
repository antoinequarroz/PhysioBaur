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
    title: 'Systeme musculosquelettique',
    description: 'Une prise en charge structuree des douleurs, limitations fonctionnelles et troubles musculosquelettiques, avec des outils adaptes aux objectifs du traitement.',
    imageSrc: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&auto=format&fit=crop&q=80',
    items: [
      'Differents concepts de therapie manuelle',
      'Renforcement musculaire',
      'Proprioception',
      'Drainage lymphatique manuel',
      'Electrostimulation, Compex',
      'Crochetage myo-fasciaux',
      'Taping & Kinesio-Taping',
      'Dry needling',
      'Trigger point',
      'Scraping'
    ]
  },
  {
    id: 'sport',
    tag: 'Sport',
    title: 'Physiotherapie du sport',
    description: "Une prise en charge du sportif amateur ou professionnel, orientee vers la recuperation, la reprise et le retour progressif au terrain.",
    imageSrc: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop&q=80',
    items: [
      'Prise en charge de sportifs amateurs et professionnels',
      'Evaluation sportive',
      'Reeducation',
      'Massage',
      'Trigger point',
      'Dry needling',
      'Proprioception',
      'Renforcement musculaire',
      'Flossing therapy (Blood Flow Restriction)',
      'Electrostimulation, Compex'
    ]
  },
  {
    id: 'manuelle',
    tag: 'Technique',
    title: 'Therapie manuelle',
    description: 'Des techniques ciblees pour restaurer le mouvement, reduire certaines douleurs et soutenir le traitement fonctionnel.',
    imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
    items: [
      'Mobilisations articulaires',
      'Travail tissulaire',
      'Approche manuelle integree au bilan',
      'Traitement des restrictions de mouvement'
    ]
  },
  {
    id: 'dry-needling',
    tag: 'Complementaire',
    title: 'Dry needling',
    description: 'Une technique complementaire integree selon le bilan clinique, la situation du patient et les objectifs therapeutiques.',
    imageSrc: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&auto=format&fit=crop&q=80',
    items: [
      'Trigger points',
      'Douleurs musculaires',
      'Integration au bilan',
      'Complement du traitement actif'
    ]
  },
  {
    id: 'massage',
    tag: 'Recuperation',
    title: 'Massage therapeutique',
    description: "Un travail de recuperation et de relachement qui peut accompagner certaines phases du traitement ou de reprise de l'activite.",
    imageSrc: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&auto=format&fit=crop&q=80',
    items: [
      'Recuperation',
      'Relachement',
      'Accompagnement du soin',
      'Soutien au retour a l activite'
    ]
  },
  {
    id: 'suivi',
    tag: 'Suivi',
    title: 'Accompagnement personnalise',
    description: 'Des objectifs clairs, des conseils utiles et un suivi adapte a votre situation, du quotidien au sport.',
    imageSrc: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&auto=format&fit=crop&q=80',
    items: [
      'Conseils pratiques',
      'Progression lisible',
      'Suivi adapte',
      'Retour au quotidien ou au sport'
    ]
  },
  {
    id: 'electrostimulation',
    tag: 'Outils',
    title: 'Electrostimulation & Compex',
    description: 'Des outils complementaires integres selon les objectifs de reeducation, de renforcement ou de recuperation.',
    imageSrc: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=900&auto=format&fit=crop&q=80',
    items: [
      'Activation musculaire',
      'Recuperation',
      'Complement au renforcement',
      'Integration au plan de traitement'
    ]
  },
  {
    id: 'taping',
    tag: 'Support',
    title: 'Taping & kinesio-taping',
    description: "Un appui complementaire utile dans certaines phases de traitement, de stabilisation ou de reprise de l'activite.",
    imageSrc: 'https://images.unsplash.com/photo-1544216717-3bbf52512659?w=900&auto=format&fit=crop&q=80',
    items: [
      'Soutien articulaire',
      'Accompagnement fonctionnel',
      'Retour progressif a l activite',
      'Integration a la prise en charge globale'
    ]
  }
]

const activeIndex = ref(0)
const activeService = computed(() => serviceCards[activeIndex.value]!)
</script>

<template>
  <section id="prestations" class="section-space relative overflow-hidden">
    <AppContainer>
      <div class="section-ambient top-8 left-[-4rem] h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]" />
      <div class="section-ambient-right bottom-6 right-[-4rem] h-[12rem] w-[12rem] sm:h-[16rem] sm:w-[16rem]" />

      <div class="grid gap-8 sm:gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-10">
        <AppReveal>
          <div class="max-w-2xl">
            <AppSectionHeading
              eyebrow="Prestations"
              title="Des prestations choisies en fonction du bilan et des objectifs de traitement."
              description="Le cabinet propose une physiotherapie generale et du sport appuyee sur des techniques selectionnees selon la situation clinique, les besoins du patient et la progression attendue."
            />

            <div class="mt-7 rounded-[1.55rem] surface-card-soft p-5 sm:mt-8 sm:p-6">
              <p class="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {{ activeService.tag }}
              </p>
              <h3 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-heading)]">
                {{ activeService.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {{ activeService.description }}
              </p>

              <ul class="mt-5 space-y-2 border-t border-[var(--color-border-strong)] pt-4 text-sm text-[var(--color-text-muted)]">
                <li
                  v-for="item in activeService.items"
                  :key="item"
                  class="flex items-start gap-2.5"
                >
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
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
            @change="(index) => activeIndex = index"
          />
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
