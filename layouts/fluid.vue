<template>
  <v-app dark class="layout-fluid overflow-hidden">
    <LoadingView ></LoadingView>
    <AppFloatMenu 
      :menuOpen="menuOpen"
      @linkClick="menuOpen = false"
    />
    <v-app-bar
      class="app-bar-1"
      :class="{
        'app-bar-1_on-app-float-menu-open': menuOpen
      }"
      :clipped-left="clipped"
      fixed
    >
      <AppBar1Content
        :menuOpen="menuOpen"
        :darkLogo="store.scrollTop > 0"
        @update:menuOpen="menuStauts"
      />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  
    <Footer />
    
    <AppRoundFloatBtn @click.native="$router.push('/contact')"/>
    <AppAcceptCookieBar />
  </v-app>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
  name: 'fluid',
  data () {
    return {
      store: useGlobalStore(),
      clipped: false,
      drawer: false,
      fixed: false,
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
      title: 'Vuetify.js',

      menuOpen: false,
      appFloatMenu: {},
      scrollTop: 0,
    }
  },
  provide(){

  },
  created(){
    if ( process.client ) {
      window.addEventListener('load', ()=>{
        this.store.isAppLoaded = true;
      })
    }
  },
  mounted(){
    console.log('$vuetify.breakpoint.xsOnly', this.$vuetify.breakpoint.scrollBarWidth)
    document.documentElement.style.setProperty('--scrollbar-width', `${this.$vuetify.breakpoint.scrollBarWidth}px`);

    $(window).on('scroll', this.onScroll)
    // $(window).on('resize', this.onResize)
    
    this.store.windowInnerWidth = window.innerWidth; 
    this.store.isAppMounted = true;

  },
  computed:{
  },
  methods:{
    menuStauts(event){
      this.menuOpen = event
    }, 
    onResize(){
      this.store.windowInnerWidth = window.innerWidth;
    },
    onScroll(){
      this.scrollTop = window.pageYOffset;
      this.store.scrollTop = window.pageYOffset;
    },
    toggleMenu(){
      if ( this.menuOpen ) {
        this.menuOpen = false
      } else {
        this.menuOpen = true
      }
    },
    closeMenu(){
      this.menuOpen = false;
    }
  },
  unmounted() {
    $(window).off('scroll', this.onScroll)
    $(window).off('resize', this.onResize)
  },
}
</script>
<style lang="scss">
@import '~assets/css/design';

:root{
  --app-bar-1-height-val: 120px;
  --app-bar-1-height-initial-val: 120px;
}


@include media(1920){
  :root{
    --app-bar-1-height-val: #{rwd-val(768px, 80px, 1920px, 117px)};
    --app-bar-1-height-initial-val: #{rwd-val(768px, 80px, 1920px, 117px)};
  }
}
@include media(768){
  :root{
    --app-bar-1-height-val: 80px;
    --app-bar-1-height-initial-val: 80px;
  }
}

.layout-fluid{
}

html.overflow-y-hidden{
  .app-bar-1{
    margin-right: var(--scrollbar-width);
  }
}

.app-bar-1{
  background: none!important;
  box-shadow: none!important;
  padding: 0 30px;
  height: var(--app-bar-1-height-val)!important;
  z-index: 5!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: height .3s , background .3s;

  .is-ready & {
    .app-bar-logo{
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.v-app-bar--is-scrolled{
    background: #FFFFFF!important;
    --app-bar-1-height-val: 84px;
    ~ *, ~ * * {
      --app-bar-1-height-val: 84px;
    }

    .app-bar-1-menu a{
      color: #252525;
    }
  }

  &.app-bar-1_on-app-float-menu-open{
    background: none!important;
    border-bottom: none!important;
  }

  .v-toolbar__content{
    margin: 0 auto;
    // margin-top: 76px;
    padding: 0;
    width: 100%;
    max-width: 1320px;
  }

  @include media($breakpoints-tablet){
    padding: 0 24px;
    .nav{
      display: none;
    }
  }
}


</style>