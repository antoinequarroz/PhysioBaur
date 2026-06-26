<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    delay?: number
    distance?: number
    scale?: number
    rotate?: number
  }>(),
  {
    delay: 0,
    distance: 28,
    scale: 0.985,
    rotate: 0.75
  }
)

useReveal<HTMLDivElement>()
</script>

<template>
  <div
    ref="revealTarget"
    class="reveal"
    :style="{
      '--reveal-delay': `${props.delay}ms`,
      '--reveal-distance': `${props.distance}px`,
      '--reveal-scale': props.scale,
      '--reveal-rotate': `${props.rotate}deg`
    }"
  >
    <slot />
  </div>
</template>
