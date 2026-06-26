<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales',
  description: 'Informations légales du site PhysioBaur.'
})
</script>

<template>
  <section class="py-24">
    <AppContainer>
      <div class="max-w-3xl">
        <h1 class="text-4xl font-semibold tracking-tight text-[var(--color-heading)]">
          Mentions légales
        </h1>
        <div class="mt-8 space-y-5 text-base leading-7 text-[var(--color-text-muted)]">
          <p>Editeur du site: PhysioBaur, Christophe Baur, Rue du Stade 4, 1950 Sion, Suisse.</p>
          <p>Telephone: 078 760 33 68. E-mail de contact affiche sur ce MVP: contact@physiobaur.ch.</p>
          <p>Les informations legales definitives, y compris les donnees d'hebergement, l'IDE, la politique de confidentialite et les obligations specifiques au secteur sante, doivent etre validees avant publication.</p>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
