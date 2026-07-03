<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales',
  description: 'Informations légales du site PhysioBaur.',
})
</script>

<template>
  <section class="py-24">
    <AppContainer>
      <div class="max-w-3xl">
        <h1
          class="text-4xl font-semibold tracking-tight text-[var(--color-heading)]"
        >
          Mentions légales
        </h1>
        <div
          class="mt-8 space-y-5 text-base leading-7 text-[var(--color-text-muted)]"
        >
          <p>
            Éditeur du site : PhysioBaur, Christophe Baur, Rue du Stade 4, 1950
            Sion, Suisse.
          </p>
          <p>
            Téléphone : 078 760 33 68. E-mail de contact affiché sur ce MVP :
            info@physiobaur.ch.
          </p>
          <p>
            Les informations légales définitives, y compris les données
            d'hébergement, l'IDE, la politique de confidentialité et les
            obligations spécifiques au secteur santé, doivent être validées
            avant publication.
          </p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
