import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-06-11',
  devtools: { enabled: false },
  sourcemap: {
    client: false,
    server: false,
  },
  srcDir: 'app/',
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      titleTemplate: '%s | PhysioBaur',
      meta: [
        { charset: 'utf-8' },
        { name: 'HandheldFriendly', content: 'True' },
        { name: 'MobileOptimized', content: '320' },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: light)',
          content: '#f4f6f2',
        },
        {
          name: 'theme-color',
          media: '(prefers-color-scheme: dark)',
          content: '#0e1717',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://physiobaur.ch',
      siteName: 'PhysioBaur',
      siteRegion: 'Valais',
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {
    config: {
      standalone: true,
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'fr',
        name: 'Francais',
      },
    ],
    vueI18n: './i18n.config.ts',
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
  },
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'robots.txt'],
    manifest: {
      name: 'PhysioBaur',
      short_name: 'PhysioBaur',
      description: 'Cabinet de physiotherapie moderne et humaine en Valais.',
      theme_color: '#0f766e',
      background_color: '#f4f6f2',
      display: 'standalone',
      lang: 'fr',
      start_url: '/',
      icons: [
        {
          src: '/icons/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/icons/maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
      navigateFallbackDenylist: [/^\/api\//],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: false,
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/mentions-legales'],
    },
  },
})
