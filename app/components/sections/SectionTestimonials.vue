<script setup lang="ts">
type TestimonialItem = {
  name: string
  role: string
  quote: string
}

const featuredTestimonials: TestimonialItem[] = [
  {
    name: 'Quentin Maceiras',
    role: 'Footballeur professionnel',
    quote: "L'accueil, le professionnalisme et la qualite des soins sont au top. Je recommande fortement."
  },
  {
    name: 'Kevin Fickentscher',
    role: 'Ex-footballeur professionnel',
    quote: "Excellent cabinet, en plus d'une prise en charge optimale grace a un physiotherapeute de renom."
  },
  {
    name: 'Anton Mitryushkin',
    role: 'Footballeur professionnel',
    quote: 'Le meilleur. Recommande.'
  },
  {
    name: 'Arnaud Boisset',
    role: 'Skieur professionnel',
    quote: "Therapeute professionnel et toujours souriant. J'ai particulierement aime son empathie. Je recommande."
  },
  {
    name: 'Leo Lacroix',
    role: 'Footballeur professionnel',
    quote: "Avant d'etre un physio, c'est un homme toujours a l'ecoute, disponible et engage."
  },
  {
    name: 'Theo Magnin',
    role: 'Footballeur professionnel',
    quote: 'Excellent physio, tres competent et bon vivant.'
  },
  {
    name: 'Tom Richard',
    role: 'Freerider',
    quote: 'Super physio, accueillant et sympa. Son travail est efficace.'
  }
]

const firstColumn = featuredTestimonials.slice(0, 3)
const secondColumn = featuredTestimonials.slice(2, 5)
const thirdColumn = featuredTestimonials.slice(4, 7)

const trustNames = [
  'Jeremie Heitz',
  'Yvon Mvogo',
  'Sybille Blanjean',
  'Aurele Amenda',
  'Dereck Kutesa'
]

</script>

<template>
  <section id="avis" class="section-space relative overflow-hidden">
    <AppContainer>
      <div class="section-ambient top-12 left-[-3rem] h-[13rem] w-[13rem] sm:h-[17rem] sm:w-[17rem]" />
      <div class="section-ambient-right bottom-10 right-[-3rem] h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]" />
      <AppSectionHeading
        eyebrow="Avis"
        title="Ils nous ont fait confiance."
        description="Sportifs professionnels, patients en reeducation ou personnes en quete d'un suivi de qualite - ils ont tous fait confiance au cabinet PhysioBaur."
        align="center"
      />

      <AppReveal :delay="40">
        <div class="relative mt-10">
          <div class="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-[linear-gradient(to_bottom,var(--color-bg),transparent)] sm:h-20" />
          <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-[linear-gradient(to_top,var(--color-bg),transparent)] sm:h-20" />
          <div class="grid max-h-[34rem] gap-4 overflow-hidden sm:max-h-[40rem] sm:gap-5 md:max-h-[46rem] md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            <TestimonialsColumn :testimonials="firstColumn" :duration="16" />
            <TestimonialsColumn :testimonials="secondColumn" class="hidden md:block" :duration="18" />
            <TestimonialsColumn :testimonials="thirdColumn" class="hidden lg:block" :duration="20" />
          </div>
        </div>
      </AppReveal>

      <AppReveal :delay="120">
        <div class="mt-6 flex justify-center">
          <AppButton
            href="https://g.co/kgs/AWA9Dpu"
            label="Voir les avis Google"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </AppReveal>

      <AppReveal :delay="180">
        <div class="mt-8 border-t border-[var(--color-border-strong)] pt-5 sm:mt-10 sm:pt-6">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Profils cites
            </p>
            <h3 class="mt-3 text-[1.55rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-2xl">
              D'autres sportifs et patients ont egalement fait confiance au cabinet.
            </h3>
            <p class="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              Quelques profils supplementaires ayant beneficie des soins de Christophe Baur, dans des disciplines variees.
            </p>
          </div>

          <div class="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
            <span
              v-for="name in trustNames"
              :key="name"
              class="surface-chip rounded-full px-3.5 py-2 text-sm text-[var(--color-text)] sm:px-4"
            >
              {{ name }}
            </span>
          </div>
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>
