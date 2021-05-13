export default {
  target: 'static',

  head: {
    title: 'cintatic',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    'nuxt-purgecss',

    '@nuxtjs/google-analytics',

    '@nuxtjs/eslint-module',

    '@nuxtjs/tailwindcss',

    '@nuxt/image',

    'nuxt-vite',

    '@aceforth/nuxt-optimized-images',
  ],

  googleAnalytics: {
    id: 'UA-196872393-1', // Use as fallback if no runtime config is provided
  },

  optimizedImages: {
    optimizeImages: true,
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],

  'google-gtag': {
    id: 'UA-196872393-1',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['https://isaacddr.github.io/cintatic-site'],
      },
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  server: {
    host: '0',
  },

  content: {},

  build: {},
}
