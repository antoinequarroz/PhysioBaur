<script setup lang="ts">
const reasons = [
  {
    title: 'Approche rigoureuse',
    text: "Une physiothérapie moderne appuyée sur les données scientifiques les plus récentes et l'expérience clinique.",
  },
  {
    title: 'Efficacité thérapeutique',
    text: 'Une prise en charge structurée, orientée vers des objectifs clairs et des résultats concrets.',
  },
  {
    title: 'Expertise terrain',
    text: 'Physiothérapie générale, thérapie manuelle et rééducation du sportif, du quotidien au sport exigeant.',
  },
  {
    title: 'Suivi sur mesure',
    text: 'Une prise en charge adaptée à chaque patient, avec une progression lisible et un cadre de soin clair.',
  },
]

const pointerX = ref(0)
const pointerY = ref(0)

const heroStyle = computed(() => {
  return {
    transform: `perspective(1200px) rotateX(${pointerY.value}deg) rotateY(${pointerX.value}deg)`,
  }
})

const updateTilt = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement | null

  if (!target) {
    return
  }

  const rect = target.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height

  pointerX.value = (x - 0.5) * 6
  pointerY.value = (0.5 - y) * 6
}

const resetTilt = () => {
  pointerX.value = 0
  pointerY.value = 0
}
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
        title="Une pratique fondée sur les preuves, au service de votre performance."
        description="PhysioBaur s'appuie sur une approche evidence-based, l'experience clinique et le terrain pour proposer des soins serieux, actuels et adaptes a chaque situation."
      />

      <AppReveal :delay="70">
        <div class="mx-auto mt-8 max-w-6xl sm:mt-9">
          <div class="mx-auto max-w-4xl">
            <div
              class="why-main relative mx-auto w-full rounded-[1.55rem] px-5 py-7 text-center sm:px-8 sm:py-9 lg:px-12 lg:py-10"
              :style="heroStyle"
              @mousemove="updateTilt"
              @mouseleave="resetTilt"
            >
              <div
                class="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_42%)]"
              />
              <p
                class="relative text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]"
              >
                Notre philosophie
              </p>
              <h3
                class="relative mx-auto mt-4 max-w-2xl text-[1.68rem] font-semibold tracking-tight text-[var(--color-heading)] sm:text-[2.1rem] lg:text-[2.55rem]"
              >
                L'exigence therapeutique, du bilan initial au retour durable a
                l'activite.
              </h3>
              <p
                class="relative mx-auto mt-4 max-w-2xl text-[0.97rem] leading-7 text-[var(--color-text-muted)] sm:text-[1rem] sm:leading-8"
              >
                Le cabinet associe physiotherapie generale et physiotherapie du
                sport avec une meme exigence: proposer des soins fiables,
                personnalises et appuyes par les meilleures pratiques actuelles.
              </p>
            </div>

            <div
              class="mt-4 grid gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
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
        </div>
      </AppReveal>
    </AppContainer>
  </section>
</template>

<style scoped>
.why-main,
.why-card {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.why-main {
  background: linear-gradient(
    145deg,
    color-mix(in oklab, var(--color-surface-elevated) 88%, transparent),
    color-mix(in oklab, var(--color-surface) 94%, transparent)
  );
  border: 1px solid var(--color-border-strong);
  box-shadow: 0 20px 54px rgba(15, 23, 42, 0.09);
  transform-style: preserve-3d;
}

.why-main:hover {
  box-shadow: 0 24px 62px rgba(15, 23, 42, 0.11);
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

.why-main::before,
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

.dark .why-main {
  box-shadow: 0 22px 58px rgba(2, 6, 23, 0.32);
}

.dark .why-card {
  box-shadow: 0 16px 38px rgba(2, 6, 23, 0.24);
}

.dark .why-main:hover {
  box-shadow: 0 26px 66px rgba(2, 6, 23, 0.38);
}

.dark .why-card:hover {
  box-shadow: 0 20px 46px rgba(2, 6, 23, 0.3);
}

@media (max-width: 1023px) {
  .why-main {
    transform: none !important;
  }

  .why-card:hover {
    transform: translateY(-2px);
  }
}
</style>
