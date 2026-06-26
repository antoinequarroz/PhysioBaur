export const useSiteStore = defineStore('site', () => {
  const phone = '078 760 33 68'
  const email = 'contact@physiobaur.ch'
  const address = 'Rue du Stade 4, 1950 Sion, Valais'
  const heroBadges = [
    'Troubles musculosquelettiques',
    'Therapie manuelle',
    'Physiotherapie du sport',
    'Suivi structure'
  ]

  return {
    phone,
    email,
    address,
    heroBadges
  }
})
