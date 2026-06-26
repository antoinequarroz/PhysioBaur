<script setup lang="ts">
const sponsors = [
  {
    id: 'physioswiss',
    label: 'Physioswiss',
    subtitle: 'Affiliation',
    image: '/sponsors/physioswiss.png',
    imageClassName: 'h-11 w-auto max-w-[11rem] object-contain'
  },
  {
    id: 'sportfisio',
    label: 'Sportfisio',
    subtitle: 'Reseau sport',
    image: '/sponsors/sportfisio.png',
    imageClassName: 'h-10 w-auto max-w-[10rem] object-contain'
  },
  {
    id: 'asf-sfv',
    label: 'ASF / SFV',
    subtitle: 'Football suisse',
    image: '/sponsors/asf-sfv.png',
    imageClassName: 'h-12 w-auto max-w-[11rem] object-contain'
  }
]
</script>

<template>
  <section id="partenaires" class="section-space relative overflow-hidden">
    <AppContainer>
      <div class="section-ambient top-10 left-[-4rem] h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]" />
      <div class="section-ambient-right bottom-8 right-[-4rem] h-[13rem] w-[13rem] sm:h-[17rem] sm:w-[17rem]" />

      <AppSectionHeading
        eyebrow="Affiliations et partenaires"
        title="Les affiliations visibles du cabinet."
        description="Christophe Baur est membre affilie a PhysioSwiss, au reseau SportFisio et partenaire de l Association Suisse de Football."
        align="center"
      />

      <AppReveal :delay="80">
        <div class="mt-8 sm:mt-10">
          <SponsorsSlider :sponsors="sponsors" />
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>
