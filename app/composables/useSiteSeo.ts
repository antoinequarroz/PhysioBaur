export const useSiteSeo = () => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const siteName = config.public.siteName
  const region = config.public.siteRegion
  const title = 'Physiotherapie a Sion et physiotherapie du sport'
  const description =
    'PhysioBaur, cabinet de physiotherapie a Sion, accompagne patients et sportifs en physiotherapie generale, therapie manuelle et physiotherapie du sport a Sion et Grimisuat.'
  const image = `${siteUrl}/og-image.svg`

  useSeoMeta({
    title,
    description,
    ogTitle: `${siteName} | ${title}`,
    ogDescription: description,
    ogType: 'website',
    ogUrl: siteUrl,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: `${siteName} | ${title}`,
    twitterDescription: description,
    twitterImage: image,
    robots: 'index, follow',
    keywords: `physiotherapie a sion, physiotherapie du sport sion, physio sion, physio grimisuat, therapie manuelle sion, physiotherapie valais, physio du sport ${region}`
  })

  useHead({
    link: [{ rel: 'canonical', href: siteUrl }],
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `${siteName} - Christophe Baur`,
          description,
          image,
          areaServed: ['Sion', 'Grimisuat', region],
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rue du Stade 4',
            addressLocality: 'Sion',
            addressRegion: region,
            postalCode: '1950',
            addressCountry: 'CH'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 46.2333,
            longitude: 7.3667
          },
          telephone: '+41 78 760 33 68',
          email: 'contact@physiobaur.ch',
          url: siteUrl,
          priceRange: '$$'
        })
      }
    ]
  })
}
