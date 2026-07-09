<script setup lang="ts">
const reasons = [
  {
    title: 'Rigueur & Expertise',
    text: "Une physiothérapie moderne, fondée sur les dernières données scientifiques et enrichie par l'expérience clinique.",
  },
  {
    title: 'Efficacité thérapeutique',
    text: 'Une prise en charge structurée, orientée vers des objectifs clairs et des résultats concrets.',
  },
  {
    title: 'Expertise de terrain',
    text: "Physiothérapie générale, thérapie manuelle et réathlétisation. De vos activités quotidiennes jusqu'aux exigences du sport de haut niveau.",
  },
  {
    title: 'Suivi sur mesure',
    text: 'Une prise en charge adaptée à chaque patient, définie par des objectifs clairs et une progression lisible à chaque étape de votre prise en charge.',
  },
]
</script>

<template>
  <section id="pourquoi" class="section-space relative overflow-hidden">
    <AppContainer>
      <div
        class="section-ambient top-10 left-[-4rem] h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]"
      />
      <div
        class="section-ambient-right bottom-6 right-[-4rem] h-[14rem] w-[14rem] sm:h-[18rem] sm:w-[18rem]"
      />

      <AppSectionHeading
        align="center"
        eyebrow="Notre philosophie"
        title="Une pratique fondée sur les preuves, au service de votre performance"
        description="Chez PhysioBaur, nous lions la rigueur scientifique à la réalité du terrain. En combinant une approche evidence-based, notre expérience clinique et notre pratique de terrain, nous concevons des soins sur mesure et actuels pour optimiser votre récupération et booster vos performances."
      />

      <AppReveal :delay="70">
        <div class="mx-auto mt-8 max-w-6xl sm:mt-9">
          <div
            class="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
          >
            <AppReveal
              v-for="(reason, index) in reasons"
              :key="reason.title"
              :delay="120 + index * 70"
            >
              <div
                class="why-card why-card-animated h-full rounded-[1.2rem] px-4 py-4 sm:rounded-[1.35rem] sm:px-5 sm:py-5"
              >
                <div class="flex items-start justify-between gap-3">
                  <p
                    class="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
                  >
                    {{ reason.title }}
                  </p>
                  <span class="why-index text-[0.82rem] font-semibold">
                    0{{ index + 1 }}
                  </span>
                </div>
                <p
                  class="mt-2.5 text-sm leading-6 text-[var(--color-text-muted)]"
                >
                  {{ reason.text }}
                </p>
              </div>
            </AppReveal>
          </div>
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>

<style scoped>
.why-card {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.why-card {
  background: linear-gradient(
    145deg,
    color-mix(in oklab, var(--color-surface-elevated) 82%, transparent),
    color-mix(in oklab, var(--color-surface) 90%, transparent)
  );
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
}

.why-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(
    in oklab,
    var(--color-accent) 26%,
    var(--color-border-strong)
  );
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.09);
}

.why-card::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at top right,
    rgba(59, 130, 246, 0.1),
    transparent 28%
  );
}

.why-card-animated::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.14) 38%,
    transparent 62%
  );
  transform: translateX(-140%);
  transition: transform 0.7s ease;
}

.why-card-animated:hover::after {
  transform: translateX(140%);
}

.why-index {
  color: color-mix(in oklab, var(--color-accent) 76%, white 24%);
  letter-spacing: 0.08em;
}

.dark .why-card {
  box-shadow: 0 16px 38px rgba(2, 6, 23, 0.24);
}

.dark .why-card:hover {
  box-shadow: 0 20px 46px rgba(2, 6, 23, 0.3);
}

@media (max-width: 1023px) {
  .why-card:hover {
    transform: translateY(-2px);
  }
}
</style>
