import colors from 'vuetify/es5/util/colors'
// Translation provided by Vuetify (javascript)
import zhHant from 'vuetify/lib/locale/zh-Hans'
import hooks from './hooks'
import middleware from './middleware/router.js'

export default {
  server: {
    port: 3010, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  hooks,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Source Solution',
    htmlAttrs: {
      lang: 'zh-Hant'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '結合卓越設計與技術，專注及應用程式開發，一手包辦RWD、SEO、應用程式、網頁設計、客製化系統等服務，成為您商業上的好夥伴，從公司網站設計到系統所有建置，累積客戶超過千位，是全球系統設計公司首選。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'X0NWle27KyGaxHGkbp22zmoaJale8Elr0kWBmL7PWCE' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css' }
    ],
    script: [
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/vConsole/3.14.6/vconsole.min.js',
      // },
      {
        src:'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'
      },
      {
        src: '/js/main.js',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/icomoon/style.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
    // '~/assets/css/newmain.scss'
  ],

  serverMiddleware: [
    '~/server-middleware/header',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/assets/js/veevalidate.js',
    '~/plugins/const',
    '~/plugins/mix',
    '~/plugins/axios',
    '~/plugins/sweetalert',
    '~/plugins/baseService',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',

    // Nuxt 2 only:
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  router: {
    extendRoutes: (routesIn) => {
      // routesIn.forEach((r) => {
      //   if (r.path.includes('articlepreview')) {
      //     r.path = r.path.replace('/landing', '');
      //   }
      // });
      // return routesIn;
    },
    middleware: ['router']
  },

  axios: {
    // proxy: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    lang:{
      locales: { zhHant },
      current: 'zhHant',
    },
    // customVariables: ['~/assets/variables.scss'],
    // treeShake is required for custom SASS variables to work.
    // treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          // anchor: '#8c9eff',

          // project custom
          red: '#D11329',
          // project custom /
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        }
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: 'http://localhost:3010/_nuxt/',
    devtools: true,
    // analyze: true,
    transpile: ["vee-validate/dist/rules"],
    extractCSS: true,
    optimizeCSS: true,
    optimization:{
      minimize: false,
    }
  },
  render: {
    static: {
    }
  },
  compilerOptions:{
    "resolveJsonModule": true,
    "esModuleInterop": true
  },
}
