<script setup lang="ts">
export type CardStackItem = {
  id: string | number
  title: string
  description?: string
  imageSrc?: string
  tag?: string
}

const props = withDefaults(defineProps<{
  items: CardStackItem[]
  initialIndex?: number
  autoAdvance?: boolean
  intervalMs?: number
}>(), {
  initialIndex: 0,
  autoAdvance: true,
  intervalMs: 3200
})

const emit = defineEmits<{
  change: [index: number, item: CardStackItem]
}>()

const activeIndex = ref(Math.min(Math.max(props.initialIndex, 0), Math.max(props.items.length - 1, 0)))
const viewportWidth = ref(1280)

const wrapIndex = (index: number) => {
  if (!props.items.length) {
    return 0
  }

  return (index % props.items.length + props.items.length) % props.items.length
}

const signedOffset = (index: number) => {
  if (!props.items.length) {
    return 0
  }

  const raw = index - activeIndex.value
  const alt = raw > 0 ? raw - props.items.length : raw + props.items.length

  return Math.abs(alt) < Math.abs(raw) ? alt : raw
}

watch(() => props.items.length, (length) => {
  activeIndex.value = Math.min(activeIndex.value, Math.max(length - 1, 0))
})

watch(activeIndex, (index) => {
  const item = props.items[index]
  if (item) {
    emit('change', index, item)
  }
}, { immediate: true })

const visibleItems = computed(() => {
  const maxVisibleOffset = viewportWidth.value < 640 ? 1 : 2

  return props.items
    .map((item, index) => {
      const offset = signedOffset(index)
      return { item, index, offset, abs: Math.abs(offset) }
    })
    .filter((entry) => entry.abs <= maxVisibleOffset)
    .sort((left, right) => left.abs - right.abs)
})

const getCardStyle = (offset: number) => {
  const abs = Math.abs(offset)
  const isMobile = viewportWidth.value < 640
  const isTablet = viewportWidth.value >= 640 && viewportWidth.value < 1024
  const x = offset * (isMobile ? 38 : isTablet ? 92 : 130)
  const rotate = offset * 12
  const y = abs * (isMobile ? 14 : 26) + (offset === 0 ? (isMobile ? -10 : -34) : 0)
  const scale = offset === 0 ? 1 : isMobile ? 0.94 - abs * 0.02 : 0.9 - abs * 0.04
  const opacity = offset === 0 ? 1 : isMobile ? 0.46 : 0.82 - abs * 0.12
  const blur = offset === 0 ? 0 : isMobile ? abs * 0.2 : abs * 0.5

  return {
    transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
    zIndex: String(40 - abs),
    opacity: String(Math.max(opacity, 0.34)),
    filter: `saturate(${offset === 0 ? 1 : 0.82}) blur(${blur}px)`
  }
}

const setActive = (index: number) => {
  activeIndex.value = wrapIndex(index)
}

const next = () => {
  activeIndex.value = wrapIndex(activeIndex.value + 1)
}

const previous = () => {
  activeIndex.value = wrapIndex(activeIndex.value - 1)
}

let autoplayId: ReturnType<typeof setInterval> | null = null
const updateViewport = () => {
  viewportWidth.value = window.innerWidth
}

const stopAutoplay = () => {
  if (autoplayId) {
    clearInterval(autoplayId)
    autoplayId = null
  }
}

const startAutoplay = () => {
  stopAutoplay()

  if (!props.autoAdvance || props.items.length <= 1) {
    return
  }

  autoplayId = setInterval(() => {
    next()
  }, Math.max(props.intervalMs, 1700))
}

onMounted(() => {
  viewportWidth.value = window.innerWidth
  window.addEventListener('resize', updateViewport, { passive: true })

  watch([() => props.autoAdvance, () => props.intervalMs, () => props.items.length], () => {
    startAutoplay()
  }, { immediate: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
  stopAutoplay()
})
</script>

<template>
  <div class="w-full">
    <div class="relative mx-auto h-[24rem] w-full max-w-5xl overflow-hidden sm:h-[29rem] lg:h-[33rem]">
      <div class="pointer-events-none absolute inset-x-0 top-6 mx-auto h-48 w-[74%] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_72%)] blur-3xl" />
      <div class="pointer-events-none absolute inset-x-0 bottom-4 mx-auto h-40 w-[80%] rounded-full bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.16),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.36),transparent_70%)]" />

      <div class="absolute inset-0 flex items-end justify-center pb-10 sm:pb-6">
        <button
          v-for="entry in visibleItems"
          :key="entry.item.id"
          type="button"
          class="group absolute bottom-0 w-[13.75rem] overflow-hidden rounded-[1.35rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)] text-left shadow-[0_18px_44px_rgba(15,23,42,0.14)] transition-[transform,opacity,filter,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[19rem] sm:rounded-[1.6rem] lg:w-[22rem]"
          :class="entry.offset === 0 ? 'shadow-[0_24px_60px_rgba(15,23,42,0.18)]' : ''"
          :style="getCardStyle(entry.offset)"
          @click="setActive(entry.index)"
        >
          <div class="relative aspect-[1.12] w-full">
            <img
              v-if="entry.item.imageSrc"
              :src="entry.item.imageSrc"
              :alt="entry.item.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              draggable="false"
            >
            <div
              v-else
              class="flex h-full items-center justify-center bg-[var(--color-surface)] text-sm text-[var(--color-text-muted)]"
            >
              Aucun visuel
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent" />

            <div class="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
              <p
                v-if="entry.item.tag"
                class="mb-2 inline-flex rounded-full bg-white/14 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/88 backdrop-blur"
              >
                {{ entry.item.tag }}
              </p>
              <h3 class="text-base font-semibold tracking-tight text-white sm:text-[1.15rem]">
                {{ entry.item.title }}
              </h3>
              <p
                v-if="entry.item.description"
                class="mt-1 line-clamp-2 text-[0.8rem] leading-5 text-white/78 sm:text-sm sm:leading-6"
              >
                {{ entry.item.description }}
              </p>
            </div>
          </div>
        </button>
      </div>

      <div class="absolute inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2.5 pb-1 sm:gap-3 sm:pb-2">
        <button
          type="button"
          class="surface-card-soft flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-heading)] sm:h-10 sm:w-10"
          aria-label="Precedent"
          @click="previous"
        >
          <span class="text-lg leading-none">&lsaquo;</span>
        </button>

        <div class="flex items-center justify-center gap-2">
          <button
            v-for="(item, index) in items"
            :key="item.id"
            type="button"
            class="rounded-full transition-all duration-300"
            :class="
              index === activeIndex
                ? 'h-2.5 w-7 bg-[var(--color-accent)]'
                : 'h-2.5 w-2.5 bg-[var(--color-border-strong)] hover:bg-[var(--color-text-muted)]'
            "
            :aria-label="`Afficher ${item.title}`"
            @click="setActive(index)"
          />
        </div>

        <button
          type="button"
          class="surface-card-soft flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-heading)] sm:h-10 sm:w-10"
          aria-label="Suivant"
          @click="next"
        >
          <span class="text-lg leading-none">&rsaquo;</span>
        </button>
      </div>
    </div>
  </div>
</template>
