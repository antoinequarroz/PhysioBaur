<script setup lang="ts">
type DomainPoint = {
  title: string
  text: string
}

type DomainItem = {
  key: string
  step: string
  title: string
  description: string
  intro?: string
  image: string
  points: DomainPoint[]
  note?: string
}

const domains: DomainItem[] = [
  {
    key: 'musculo',
    step: 'Domaine 1',
    title: 'Rééducation musculo-squelettique',
    description:
      "Votre corps, votre meilleur outil. Que vous cherchiez à retrouver une mobilité complète ou à vous remettre d'aplomb après un accident ou une opération, nous appliquons une rigueur clinique identique à celle du haut niveau pour optimiser votre qualité de mouvement au quotidien.",
    image: '/images/services/musculosqueletique.jpg',
    points: [
      {
        title: 'Prise en charge avant et après une intervention chirurgicale',
        text: 'Prothèse, coiffe des rotateurs, LCA, méniscectomie, vertébroplastie, …',
      },
      {
        title: 'Traitement des douleurs aiguës, chroniques et rhumatismales',
        text: 'Lombalgies, cervicalgies, hernies discales, tendinopathies, arthrose, arthrite, …',
      },
      {
        title: 'Prise en charge des déficiences articulaires',
        text: 'Arthrose, lésions ligamentaires, entorses, luxations, fractures, …',
      },
      {
        title: 'Rééducation des lésions musculaires et tendineuses',
        text: 'Déchirures musculaires, tendinopathies, …',
      },
    ],
  },
  {
    key: 'sport',
    step: 'Domaine 2',
    title: 'Physiothérapie du sport',
    description:
      "L'excellence pour les athlètes exigeants. Nous accompagnons les sportifs de tous niveaux, de l'amateur au professionnel, dans une démarche d'optimisation constante. Notre priorité est de repousser vos limites tout en garantissant l'intégrité de votre intégrité physique.",
    image: '/images/services/physiosport2.jpg',
    points: [
      {
        title: 'Prévention des blessures',
        text: 'Un bilan complet du mouvement et des antécédents pour identifier les facteurs de risque et anticiper la blessure.',
      },
      {
        title: 'Réentraînement',
        text: "Développement des capacités sportives avec un travail adapté à l'entraînement et à la préparation physique.",
      },
      {
        title: 'Réathlétisation',
        text: 'Transition entre rééducation fonctionnelle et retour à la compétition, en tenant compte des exigences de la discipline.',
      },
      {
        title: 'Conseils & accompagnement personnalisé de sportifs',
        text: 'Conseils, stratégie de reprise et accompagnement personnalisé pour réduire les risques et optimiser le retour au niveau attendu.',
      },
    ],
    note: "Membre de Sportfisio\nMembre du staff médical de l'Association Suisse de Football",
  },
  {
    key: 'home',
    step: 'Domaine 3',
    title: 'Traitement à domicile',
    description:
      "Des traitements adaptés aux personnes âgées, à mobilité réduite, accidentées ou en situation de handicap, avec un objectif d'autonomie et de continuité des soins.",
    intro:
      'Sur prescription médicale, déplacements à domicile dans la région de Sion et Grimisuat.',
    image: '/images/services/domicilephysio.jpg',
    points: [
      {
        title: 'Évaluation globale',
        text: '',
      },
      {
        title: 'Prévention des chutes',
        text: '',
      },
      {
        title: 'Rééducation à la marche',
        text: '',
      },
      {
        title: 'Rééducation musculo-squelettique',
        text: '',
      },
      {
        title: 'Réentraînement cardiovasculaire',
        text: '',
      },
    ],
  },
]

const activeIndex = ref(0)
const activeDomain = computed(() => domains[activeIndex.value]!)
const autoplayDelay = 5200

const isHovered = ref(false)
const isManuallyPaused = ref(false)
const isPlaying = computed(() => !isHovered.value && !isManuallyPaused.value)

const setActive = (index: number) => {
  activeIndex.value = index
}

let timerId: ReturnType<typeof setInterval> | null = null

const stopAutoplay = () => {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}

const startAutoplay = () => {
  stopAutoplay()

  if (!isPlaying.value) {
    return
  }

  timerId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % domains.length
  }, autoplayDelay)
}

const togglePlay = () => {
  isManuallyPaused.value = !isManuallyPaused.value
}

const handlePointerEnter = () => {
  isHovered.value = true
}

const handlePointerLeave = () => {
  isHovered.value = false
}

watch(isPlaying, (playing) => {
  if (playing) {
    startAutoplay()
  } else {
    stopAutoplay()
  }
})

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <section id="domaines" class="section-space relative overflow-hidden">
    <AppContainer>
      <div
        class="section-ambient top-10 left-[-3rem] h-[17rem] w-[17rem] sm:h-[22rem] sm:w-[22rem]"
      />
      <div
        class="section-ambient-right bottom-10 right-[-3rem] h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem]"
      />

      <AppSectionHeading
        eyebrow="Nos domaines d'expertise"
        title="Trois grands domaines structurent la prise en charge du cabinet"
        description="Votre objectif devient le nôtre : chaque traitement est conçu, du terrain au quotidien, avec la même exigence clinique."
        align="center"
      />

      <AppReveal :delay="70">
        <div
          class="mx-auto mt-8 max-w-6xl sm:mt-9"
          @mouseenter="handlePointerEnter"
          @mouseleave="handlePointerLeave"
          @focusin="handlePointerEnter"
          @focusout="handlePointerLeave"
        >
          <div
            class="grid gap-6 lg:min-h-[44rem] lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.98fr)] lg:items-stretch lg:gap-12"
          >
            <div class="space-y-5 lg:flex lg:min-h-[44rem] lg:flex-col lg:pr-2">
              <Transition name="domain-copy" mode="out-in">
                <div
                  :key="activeDomain.key"
                  class="flex min-w-0 flex-col space-y-4 sm:space-y-5 lg:min-h-[44rem]"
                >
                  <p
                    class="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
                  >
                    {{ activeDomain.step }}
                  </p>

                  <h3
                    class="max-w-xl text-[1.7rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[2.1rem] lg:text-[2.45rem]"
                  >
                    {{ activeDomain.title }}
                  </h3>

                  <p
                    class="max-w-xl text-[0.98rem] leading-7 text-[var(--color-text-muted)] sm:text-[1rem] sm:leading-8"
                  >
                    {{ activeDomain.description }}
                  </p>

                  <p
                    v-if="activeDomain.intro"
                    class="max-w-xl text-sm leading-7 text-[var(--color-heading)]"
                  >
                    {{ activeDomain.intro }}
                  </p>

                  <div class="grid gap-x-6 gap-y-3 pt-1 lg:grid-cols-2">
                    <div
                      v-for="point in activeDomain.points"
                      :key="point.title"
                      class="domain-point pl-3 sm:pl-4"
                    >
                      <p
                        class="text-sm font-semibold leading-6 text-[var(--color-heading)]"
                      >
                        {{ point.title }}
                      </p>
                      <p
                        v-if="point.text"
                        class="mt-1 text-sm leading-6 text-[var(--color-text-muted)]"
                      >
                        {{ point.text }}
                      </p>
                    </div>
                  </div>

                  <p
                    v-if="activeDomain.note"
                    class="mt-auto whitespace-pre-line pt-2 text-sm italic leading-6 text-[var(--color-text-muted)]"
                  >
                    {{ activeDomain.note }}
                  </p>
                </div>
              </Transition>
            </div>

            <Transition name="domain-image" mode="out-in">
              <div
                :key="`${activeDomain.key}-image`"
                class="relative order-first lg:order-none"
              >
                <div
                  class="domain-visual relative h-full min-h-[18rem] overflow-hidden rounded-[1.6rem] sm:min-h-[24rem] sm:rounded-[2rem] lg:h-[44rem] lg:min-h-[44rem]"
                >
                  <img
                    :src="activeDomain.image"
                    :alt="activeDomain.title"
                    class="absolute inset-0 h-full w-full object-cover"
                    draggable="false"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/6 to-transparent"
                  />
                  <div
                    class="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6"
                  >
                    <div
                      class="inline-flex rounded-full bg-slate-950/70 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/88 backdrop-blur sm:text-[0.72rem]"
                    >
                      {{ activeDomain.title }}
                    </div>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_68%)] blur-2xl"
                />
              </div>
            </Transition>
          </div>

          <div class="mt-6 flex items-center justify-center gap-2.5 sm:mt-8">
            <ol
              class="flex w-full gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:items-center sm:justify-center sm:gap-2.5 sm:px-2"
              role="list"
            >
              <li
                v-for="(domain, index) in domains"
                :key="domain.key"
                class="shrink-0"
              >
                <button
                  type="button"
                  class="domain-step group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 sm:gap-2.5 sm:px-3.5"
                  :class="
                    index === activeIndex
                      ? 'domain-step-active'
                      : 'domain-step-idle'
                  "
                  @click="setActive(index)"
                >
                  <span
                    class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-semibold transition-colors duration-300"
                    :class="
                      index === activeIndex
                        ? 'bg-white/22 text-white'
                        : 'bg-[var(--color-border-strong)] text-[var(--color-heading)]'
                    "
                  >
                    {{ index + 1 }}
                  </span>
                  <span class="hidden sm:inline">{{ domain.title }}</span>
                </button>
              </li>
            </ol>

            <button
              type="button"
              class="surface-card-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--color-heading)]"
              :aria-label="
                isManuallyPaused
                  ? 'Reprendre le défilement automatique'
                  : 'Mettre en pause le défilement automatique'
              "
              :aria-pressed="isManuallyPaused"
              @click="togglePlay"
            >
              <span class="text-sm leading-none">{{
                isManuallyPaused ? '▶' : '❚❚'
              }}</span>
            </button>
          </div>
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>

<style scoped>
.domain-step-active {
  background: linear-gradient(
    135deg,
    var(--color-accent),
    var(--color-accent-strong)
  );
  color: white;
  box-shadow: 0 16px 36px rgba(37, 99, 235, 0.2);
}

.domain-step-idle {
  background: linear-gradient(
    145deg,
    color-mix(in oklab, var(--color-surface-elevated) 88%, transparent),
    color-mix(in oklab, var(--color-surface) 92%, transparent)
  );
  color: var(--color-heading);
  border: 1px solid var(--color-border-strong);
}

.domain-step-idle:hover {
  background: linear-gradient(
    145deg,
    color-mix(in oklab, var(--color-surface-elevated) 94%, white 6%),
    color-mix(in oklab, var(--color-surface) 94%, white 6%)
  );
}

.domain-point {
  border-left: 1px solid var(--color-border-strong);
}

.domain-copy-enter-active,
.domain-copy-leave-active,
.domain-image-enter-active,
.domain-image-leave-active {
  transition:
    opacity 0.34s ease,
    transform 0.34s ease;
}

.domain-copy-enter-from,
.domain-image-enter-from {
  opacity: 0;
  transform: translateY(14px);
}

.domain-copy-leave-to,
.domain-image-leave-to {
  opacity: 0;
  transform: translateY(-14px);
}

.domain-visual {
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.12);
}

.dark .domain-visual {
  box-shadow: 0 32px 90px rgba(2, 6, 23, 0.34);
}
</style>
