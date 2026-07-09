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
            <div
              class="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
            >
              <img
                src="/images/PhotoBaur.jpeg"
                alt="Christophe Baur, physiothérapeute, sur un terrain avec l'équipe nationale Suisse"
                class="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4"
              >
                <p class="text-sm font-semibold text-white">
                  Christophe Baur
                </p>
                <p class="text-xs text-white/80">Physiothérapeute MSc</p>
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
                  Bachelor of Science (BSc) en Physiothérapie — HES-SO Valais/Wallis (2010)
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  CAS en Réhabilitation du Sportif
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  CAS en Thérapie Manuelle
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Diplôme en Thérapie Manuelle Ostéopathique
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Master of Science (MSc) en Sciences de la Santé — HES-SO / UNIL
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Head Physiothérapeute — Équipe nationale Suisse de Football U19
                </p>
              </div>
              <div
                class="flex items-start gap-3 border-t border-[var(--color-border)] pt-4"
              >
                <div
                  class="mt-[0.38rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                />
                <p class="text-sm leading-6 text-[var(--color-text-muted)]">
                  Maître d'enseignement — HES-SO Valais/Wallis
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
            eyebrow="Votre thérapeute"
            title="Un expert reconnu à votre service"
            description="Fondateur de PhysioBaur, Christophe Baur s'appuie sur plus de 15 ans d'expérience pour proposer une prise en charge exigeante. Son approche est nourrie par la clinique, l'enseignement et un parcours ancré dans le sport de haut niveau professionnel."
          />
          <div class="mt-7 flex flex-wrap gap-3 sm:mt-8">
            <AppBadge label="MSc Santé HES-SO - UNIL" />
            <AppBadge label="Head physio Suisse Football U19" />
            <AppBadge label="Maître d'enseignement HES-SO" />
          </div>
          <div
            class="mt-5 flex items-start gap-3 rounded-[1.2rem] border border-[var(--color-border-strong)] bg-[color:color-mix(in_oklab,var(--color-surface-elevated)_72%,transparent)] px-4 py-3.5 sm:mt-6"
          >
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb,#4f46e5)] text-xs font-bold text-white"
            >
              HES
            </div>
            <p class="text-sm leading-6 text-[var(--color-text-muted)]">
              <span class="font-semibold text-[var(--color-heading)]"
                >Maître d'enseignement à la HES-SO Valais/Wallis</span
              >
              — Implication directe dans la formation et l'accompagnement des
              futurs physiothérapeutes valaisans.
            </p>
          </div>
          <p
            class="mt-7 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:mt-8"
          >
            Spécialiste de la physiothérapie générale et du sport, Christophe
            accompagne aussi bien les athlètes que les patients désireux de
            retrouver leur mobilité, leur confort et leur pleine capacité
            fonctionnelle au quotidien.
          </p>
          <p
            class="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]"
          >
            Soucieux de transmettre des pratiques rigoureuses et de rester à la
            pointe des avancées scientifiques, il s'investit également comme
            Maître d'enseignement au sein de la filière Physiothérapie de la
            HES-SO Valais/Wallis.
          </p>
        </AppReveal>
      </div>
    </AppContainer>
  </section>
</template>
