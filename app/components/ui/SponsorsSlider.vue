<script setup lang="ts">
type SponsorItem = {
  id: string
  label: string
  subtitle?: string
  image?: string
  imageClassName?: string
}

const props = defineProps<{
  sponsors: SponsorItem[]
}>()

const repeatedSponsors = computed(() => {
  return Array.from({ length: 3 }, () => props.sponsors).flat()
})
</script>

<template>
  <div class="relative h-24 overflow-hidden rounded-[1.5rem] sm:h-28 sm:rounded-[2rem]">
    <InfiniteSlider class-name="flex h-full items-center px-4 sm:px-6" :duration="22" :gap="18">
      <div
        v-for="(sponsor, index) in repeatedSponsors"
        :key="`${sponsor.id}-${index}`"
        class="surface-card-soft flex h-14 min-w-34 items-center justify-center rounded-[1rem] px-4 text-center sm:h-16 sm:min-w-44 sm:rounded-[1.25rem] sm:px-6"
      >
        <img
          v-if="sponsor.image"
          :src="sponsor.image"
          :alt="sponsor.label"
          :class="sponsor.imageClassName || 'h-9 w-auto max-w-[8rem] object-contain sm:h-10 sm:max-w-[9rem]'"
        >
        <div v-else>
          <p class="text-sm font-semibold tracking-tight text-[var(--color-heading)]">
            {{ sponsor.label }}
          </p>
          <p v-if="sponsor.subtitle" class="mt-1 text-xs text-[var(--color-text-muted)]">
            {{ sponsor.subtitle }}
          </p>
        </div>
      </div>
    </InfiniteSlider>

    <ProgressiveBlur
      class-name="absolute top-0 left-0 h-full w-14 sm:w-28"
      direction="left"
      :blur-intensity="1.2"
    />
    <ProgressiveBlur
      class-name="absolute top-0 right-0 h-full w-14 sm:w-28"
      direction="right"
      :blur-intensity="1.2"
    />
  </div>
</template>
