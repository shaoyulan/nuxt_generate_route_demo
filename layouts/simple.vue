<template>
  <v-app dark class="layout-fluid overflow-hidden">
    <AppFloatMenu 
      :menuOpen="menuOpen"
      @linkClick="closeMenu()"
      :invertedScroll="false"
    />
    <AppBar2 
      :menuOpened="menuOpen"
      @toggleMenu="toggleMenu()"
    />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
    <Gotop />
  </v-app>
</template>

<script>
export default {
  name: 'fluid',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      menuOpen: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted(){
    console.log('$vuetify.breakpoint.xsOnly', this.$vuetify.breakpoint.scrollBarWidth)
    document.documentElement.style.setProperty('--scrollbar-width', `${this.$vuetify.breakpoint.scrollBarWidth}px`);
  },
  computed:{
    appBar2Height(){
      if ( process.browser ) {
        if ( window.innerWidth > 960 ) {
          return 108
        } else {
          return 80
        }
      } else {
        return 108
      }
    }
  },
  methods:{
    toggleMenu(){
      if ( this.menuOpen ) {
        this.menuOpen = false
      } else {
        this.menuOpen = true
      }
    },
    closeMenu(){
      console.log('close', this.menuOpen)
      this.menuOpen = false;
    }
  },
}
</script>
<style lang="scss">
@import '~assets/css/design';

</style>