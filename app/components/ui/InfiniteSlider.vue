<script setup lang="ts">
const props = withDefaults(defineProps<{
  duration?: number
  gap?: number
  reverse?: boolean
  className?: string
}>(), {
  duration: 30,
  gap: 48,
  reverse: false,
  className: ''
})
</script>

<template>
  <div :class="['overflow-hidden', props.className]">
    <div
      class="infinite-slider flex w-max items-center"
      :style="{
        '--slider-duration': `${props.duration}s`,
        '--slider-gap': `${props.gap}px`,
        '--slider-direction': props.reverse ? 'reverse' : 'normal'
      }"
    >
      <div class="flex w-max items-center" :style="{ gap: `var(--slider-gap)` }">
        <slot />
      </div>
      <div class="flex w-max items-center" :style="{ gap: `var(--slider-gap)` }" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.infinite-slider {
  gap: var(--slider-gap);
  animation: infinite-slider-scroll var(--slider-duration) linear infinite;
  animation-direction: var(--slider-direction);
  will-change: transform;
}

.infinite-slider:hover {
  animation-play-state: paused;
}

@keyframes infinite-slider-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - (var(--slider-gap) / 2)));
  }
}
</style>
