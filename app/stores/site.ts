export const useSiteStore = defineStore('site', () => {
  const phone = '078 760 33 68'
  const email = 'info@physiobaur.ch'
  const address = 'Rue du Stade 4, 1950 Sion, Valais'
  const heroBadges = [
    'Physiothérapie générale',
    'Physiothérapie du sport',
    'Thérapie manuelle',
    'Rééducation active',
    'Approche fondée sur les preuves'
  ]

  return {
    phone,
    email,
    address,
    heroBadges
  }
})
