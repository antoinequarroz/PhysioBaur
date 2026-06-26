<template>
  <section id="a-propos" class="section-space relative overflow-hidden">
    <AppContainer>
      <div
        class="section-ambient top-10 left-[-4rem] h-[15rem] w-[15rem] sm:h-[21rem] sm:w-[21rem]"
      />
      <div
        class="section-ambient-right right-[-4rem] bottom-6 h-[13rem] w-[13rem] sm:h-[18rem] sm:w-[18rem]"
      />
      <div
        class="grid gap-8 sm:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-10"
      >
        <AppReveal :distance="24">
          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] bg-[linear-gradient(135deg,#2563eb,#4f46e5)] text-base font-bold text-white shadow-[0_6px_16px_rgba(37,99,235,0.28)]"
              >
                CB
              </div>
              <div>
                <p class="font-semibold text-[var(--color-heading)]">
                  Christophe Baur
                </p>
                <p class="text-sm text-[var(--color-text-muted)]">
                  Physiothérapeute MSc
                </p>
              </div>
            </div>

            <div class="space-y-3">
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Diplômé HES-SO Valais/Wallis - 2010
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  MSc Sante - HES-SO / UNIL
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Head physio - Equipe nationale Suisse U19
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Formateur à la HES-SO Valais/Wallis
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 pt-2">
              <span
                class="surface-chip rounded-full px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >PhysioSwiss</span
              >
              <span
                class="surface-chip rounded-full px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >SportFisio</span
              >
              <span
                class="surface-chip rounded-full px-3 py-1 text-xs text-[var(--color-text-muted)]"
                >ASF / SFV</span
              >
            </div>
          </div>
        </AppReveal>

        <AppReveal :delay="120">
          <AppSectionHeading
            eyebrow="Le thérapeute"
            title="Un expert reconnu entre pratique clinique, enseignement et terrain sportif."
            description="Fondateur de PhysioBaur, Christophe Baur s'appuie sur plus de 15 ans d'expérience pour proposer une prise en charge exigeante, nourrie par la clinique, l'enseignement et le sport."
          />
          <div class="mt-7 flex flex-wrap gap-3 sm:mt-8">
            <AppBadge label="MSc Santé HES-SO - UNIL" />
            <AppBadge label="Head physio Suisse U19" />
            <AppBadge label="Enseignement HES-SO" />
          </div>
          <p
            class="mt-7 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:mt-8"
          >
            Spécialiste de la physiothérapie générale et du sport, il accompagne
            aussi bien les sportifs que les personnes souhaitant retrouver leur
            mobilité, leur confort et leur capacité fonctionnelle au quotidien.
          </p>
          <p
            class="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]"
          >
            Soucieux de transmettre des pratiques solides et de rester au
            contact des preuves scientifiques, il intervient également comme
            formateur au sein de la filière physiothérapie de la HES-SO
            Valais/Wallis.
          </p>
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
