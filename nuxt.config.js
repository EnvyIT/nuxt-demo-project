export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'EnvyIT' || '',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@Michael31248000' },
      { name: 'twitter:creator', content: '@Michael31248000' },
      { name: 'twitter:alt', content: 'Illustration of a man who is coding.' },
      { property: 'og:url', content: 'https://www.envy-it.com' },
      { property: 'og:title', content: 'EnvyIT - Developer Homepage' },
      { property: 'og:description', content: 'Come and visit my personal homepage and learn more about Software Development.' },
      { property: 'og:image', content: 'https://clipartstation.com/wp-content/uploads/2017/11/software-developer-clipart-5.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Logo.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', duration: 5000 },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/filters/filters.js', ssr: true },
    { src: '@/plugins/vuelidate.js', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Deutsch',
          code: 'de',
          iso: 'de-DE',
          file: 'de-DE.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en'
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  render: {
    resourceHints: false
  },
  env: {
    baseURL: process.env.BASE_URL || ''
  }
}
