<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const props = defineProps<{
  latitude: number
  longitude: number
  zoom?: number
  popupText?: string
}>()

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<any>(null)

onMounted(async () => {
  if (!mapContainer.value || typeof window === 'undefined') return

  // Import dynamique côté client uniquement
  const L = await import('leaflet')
  const leaflet = L.default || L

  // Fix pour les icônes Leaflet (problème avec Vite/Webpack)
  delete (leaflet.Icon.Default.prototype as any)._getIconUrl
  leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })

  // Initialiser la carte
  map.value = leaflet.map(mapContainer.value, {
    center: [props.latitude, props.longitude],
    zoom: props.zoom || 16,
    zoomControl: false,
    attributionControl: false,
  })

  // Ajouter le layer OpenStreetMap
  leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map.value)

  // Ajouter le marqueur
  leaflet.marker([props.latitude, props.longitude], {
    title: props.popupText || 'PhysioBaur',
  })
    .addTo(map.value)
    .bindPopup(props.popupText || 'PhysioBaur - Rue du Stade 4, 1950 Sion')
    .openPopup()

  // Nettoyer au démontage
  onUnmounted(() => {
    if (map.value) {
      map.value.remove()
    }
  })
})
</script>

<template>
  <ClientOnly>
    <div
      ref="mapContainer"
      class="h-[300px] w-full rounded-[1.35rem] sm:rounded-[1.65rem]"
    />
  </ClientOnly>
</template>

<style scoped>
/* Assurer que la carte prend toute la place */
:deep(.leaflet-container) {
  height: 100%;
  width: 100%;
  border-radius: inherit;
}

/* Cacher les contrôles par défaut */
:deep(.leaflet-control-attribution) {
  display: none !important;
}
</style>
