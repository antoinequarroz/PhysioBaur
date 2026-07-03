<script setup lang="ts">
const siteStore = useSiteStore()
</script>

<template>
  <section id="accueil" class="relative overflow-hidden">
    <div
      class="relative flex min-h-[calc(100svh-4.5rem)] items-center py-3 sm:min-h-[calc(100svh-5rem)] sm:py-8"
    >
      <AppContainer
        class="relative flex min-h-[calc(100svh-4.5rem)] items-center sm:min-h-[calc(100svh-5rem)]"
      >
        <div
          class="section-ambient top-[-1rem] left-[-4rem] h-[22rem] w-[22rem] sm:h-[28rem] sm:w-[28rem] lg:left-[-2rem] lg:top-4 lg:h-[38rem] lg:w-[38rem]"
        />
        <div
          class="section-ambient-right right-[-5rem] top-[12%] h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] lg:right-[-3rem] lg:h-[34rem] lg:w-[34rem]"
        />
        <div
          class="absolute inset-x-0 top-[-1rem] -z-10 mx-auto h-[20rem] max-w-5xl rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.34),transparent_72%)] blur-3xl sm:h-[28rem] lg:h-[34rem]"
        />
        <div
          class="grid w-full items-center gap-5 sm:gap-7 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12"
        >
          <AppReveal :distance="20">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <AppBadge
                label="Christophe Baur - cabinet de physiotherapie a Sion"
              />
              <h1
                class="mt-4 text-[2.35rem] leading-[1.02] font-semibold tracking-tight text-[var(--color-heading)] sm:mt-6 sm:text-6xl lg:text-7xl"
              >
                PhysioBaur<br />
                Votre physiothérapeute à Sion
              </h1>
              <p
                class="mt-3 max-w-xl text-[1.02rem] font-medium leading-7 text-[var(--color-accent)] sm:text-lg"
              >
                L'expertise au cœur de votre rééducation.
              </p>
              <p
                class="mt-5 max-w-xl text-[1rem] leading-7 text-[var(--color-text-muted)] sm:mt-6 sm:text-xl sm:leading-8"
              >
                Une physiothérapie moderne, rigoureuse et personnalisée, pour
                retrouver durablement mobilité, fonction et confiance dans le
                mouvement.
              </p>
              <p
                class="mt-3 max-w-xl text-[0.98rem] leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8"
              >
                Physiothérapie générale, thérapie manuelle et physiothérapie du
                sport à Sion, au cabinet et à domicile sur prescription.
              </p>
              <p
                class="mt-4 max-w-xl text-[0.98rem] leading-7 font-medium text-[var(--color-heading)] sm:text-lg sm:leading-8"
              >
                Votre objectif devient le nôtre. Qu'il s'agisse de reprendre
                votre travail, retrouver une activité physique ou revenir à la
                compétition, chaque traitement est conçu pour vous permettre
                de retrouver confiance dans vos mouvements.
              </p>
              <div class="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row">
                <AppButton label="Prendre rendez-vous" href="/#contact" />
                <AppButton
                  label="Découvrir notre approche"
                  href="/#pourquoi"
                  variant="secondary"
                />
              </div>
            </div>
          </AppReveal>
          <AppReveal :delay="120" :distance="20" :scale="0.99">
            <div
              class="relative flex w-full justify-center min-[320px]:mt-1 lg:mt-0 lg:min-h-[min(70svh,780px)] lg:items-center"
            >
              <div
                class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_58%_45%,rgba(59,130,246,0.16),transparent_46%),radial-gradient(circle_at_72%_58%,rgba(99,102,241,0.12),transparent_34%)] blur-2xl"
              />
              <ClientOnly>
                <PhysioRoomScene />
                <template #fallback>
                  <div
                    class="aspect-square w-full max-w-[620px] sm:max-w-[760px]"
                  />
                </template>
              </ClientOnly>
            </div>
          </AppReveal>
        </div>
      </AppContainer>
    </div>

    <AppContainer class="relative pb-8 sm:pb-12 lg:pb-14">
      <div
        class="section-ambient left-[-4rem] top-8 h-[14rem] w-[14rem] sm:h-[20rem] sm:w-[20rem]"
      />
      <div
        class="section-ambient-right right-[-5rem] bottom-4 h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]"
      />
      <AppReveal :delay="120">
        <div class="px-1 py-1">
          <div class="mx-auto max-w-3xl text-center">
            <p
              class="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
            >
              Une prise en charge claire et exigeante
            </p>
            <h2
              class="mt-4 text-[1.9rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[2.25rem] lg:text-[2.7rem]"
            >
              Des soins structurés, du bilan initial au retour progressif à
              l'activité.
            </h2>
            <p
              class="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-text-muted)] sm:text-[1.04rem] sm:leading-8"
            >
              Une approche humaine, appuyée sur les meilleures pratiques
              actuelles, pour proposer un cadre de soin lisible et une
              progression adaptée à chaque patient.
            </p>
          </div>

          <div
            class="mt-7 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            <div
              class="rounded-[1.35rem] bg-[color:color-mix(in_oklab,var(--color-surface-elevated)_72%,transparent)] px-5 py-5"
            >
              <p
                class="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Cabinet
              </p>
              <p
                class="mt-2 text-base font-semibold text-[var(--color-heading)]"
              >
                Bilan, traitement, progression
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Une lecture précise de votre situation et des étapes du suivi.
              </p>
            </div>

            <div
              class="rounded-[1.35rem] bg-[color:color-mix(in_oklab,var(--color-surface-elevated)_72%,transparent)] px-5 py-5"
            >
              <p
                class="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Prise en charge
              </p>
              <p
                class="mt-2 text-base font-semibold text-[var(--color-heading)]"
              >
                Douleurs du quotidien et retour à l'activité
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Une prise en charge utile au quotidien comme dans une logique de
                reprise sportive.
              </p>
            </div>

            <div
              class="rounded-[1.35rem] bg-[color:color-mix(in_oklab,var(--color-surface-elevated)_72%,transparent)] px-5 py-5"
            >
              <p
                class="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Suivi
              </p>
              <p
                class="mt-2 text-base font-semibold text-[var(--color-heading)]"
              >
                Objectifs clairs, progression lisible
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Des exercices pertinents et un suivi adapté à votre situation.
              </p>
            </div>

            <div
              class="rounded-[1.35rem] bg-[color:color-mix(in_oklab,var(--color-surface-elevated)_72%,transparent)] px-5 py-5"
            >
              <p
                class="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Christophe Baur
              </p>
              <p
                class="mt-2 text-base font-semibold text-[var(--color-heading)]"
              >
                Plus de 15 ans d'expérience clinique
              </p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Une pratique liée à la clinique, à l'enseignement et au terrain
                sportif.
              </p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <AppBadge
              v-for="badge in siteStore.heroBadges"
              :key="badge"
              :label="badge"
            />
          </div>
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>
