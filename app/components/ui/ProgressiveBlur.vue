<script setup lang="ts">
const props = withDefaults(defineProps<{
  direction?: 'left' | 'right' | 'top' | 'bottom'
  blurLayers?: number
  blurIntensity?: number
  className?: string
}>(), {
  direction: 'right',
  blurLayers: 6,
  blurIntensity: 1,
  className: ''
})

const angleMap = {
  top: '0deg',
  right: '90deg',
  bottom: '180deg',
  left: '270deg'
} as const

const layers = computed(() => {
  const total = Math.max(props.blurLayers, 2)
  const segmentSize = 1 / (total + 1)

  return Array.from({ length: total }, (_, index) => {
    const gradientStops = [
      index * segmentSize,
      (index + 1) * segmentSize,
      (index + 2) * segmentSize,
      (index + 3) * segmentSize
    ].map((position, stopIndex) => {
      const alpha = stopIndex === 1 || stopIndex === 2 ? 1 : 0
      return `rgba(255, 255, 255, ${alpha}) ${position * 100}%`
    })

    return {
      maskImage: `linear-gradient(${angleMap[props.direction]}, ${gradientStops.join(', ')})`,
      blur: `${index * props.blurIntensity}px`
    }
  })
})
</script>

<template>
  <div :class="['relative', props.className]">
    <div
      v-for="(layer, index) in layers"
      :key="index"
      class="pointer-events-none absolute inset-0 rounded-[inherit]"
      :style="{
        maskImage: layer.maskImage,
        WebkitMaskImage: layer.maskImage,
        backdropFilter: `blur(${layer.blur})`
      }"
    />
  </div>
</template>
