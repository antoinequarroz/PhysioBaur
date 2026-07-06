<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)
let application: import('@splinetool/runtime').Application | null = null

onMounted(async () => {
  if (!canvasRef.value) {
    return
  }

  const { Application } = await import('@splinetool/runtime')
  application = new Application(canvasRef.value)
  await application.load('/spline/scene.splinecode')
  application.setBackgroundColor('transparent')
})

onBeforeUnmount(() => {
  application?.dispose()
  application = null
})
</script>

<template>
  <canvas ref="canvasRef" class="h-full w-full" />
</template>
