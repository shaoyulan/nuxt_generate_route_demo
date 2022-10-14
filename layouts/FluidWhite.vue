<template>
  <v-app dark class="layout-fluid-white overflow-hidden">
    <!-- <AppDor /> -->
    <LoadingView />
    <AppFloatMenu 
      :menuOpen="menuOpen"
      @linkClick="menuOpen = false"
    />
    <v-app-bar
      class="app-bar-1 app-bar-white"
      :class="{
        'app-bar-1_on-app-float-menu-open': menuOpen
      }"
      :clipped-left="clipped"
      fixed
    >
      <AppBar1Content 
        :darkLogo="true"
        :menuOpen="menuOpen"
        @update:menuOpen="menuStauts"
      />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  
    <Footer />

    <AppRoundFloatBtn @click.native="$router.push('/contact')" />

    <!-- <AppAcceptCookieBar /> -->
  </v-app>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
import AppBar1Content from '../components/AppBar1Content.vue'
export default {
    name: "FluidWhite",
    data() {
        return {
            store: useGlobalStore(),
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                }
            ],
            miniVariant: true,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
            menuOpen: false,
            appFloatMenu: {},
            scrollTop: 0,
        };
    },
    provide() {
        const appData = {};
        Object.defineProperty(appData, "scrollTop", {
            enumerable: true,
            get: () => this.scrollTop,
        });
        return {
            appData,
        };
    },
    created() {
        if (process.client) {
            window.addEventListener("load", () => {
                this.store.isAppLoaded = true;
            });
        }
    },
    mounted() {
        console.log("$vuetify.breakpoint.xsOnly", this.$vuetify.breakpoint.scrollBarWidth);
        document.documentElement.style.setProperty("--scrollbar-width", `${this.$vuetify.breakpoint.scrollBarWidth}px`);
        $(window).on("scroll", this.onScroll);
        this.store.isAppMounted = true;
    },
    computed: {},
    methods: {
      menuStauts(event){
        this.menuOpen = event
      }, 
      onScroll() {
          this.scrollTop = window.pageYOffset;
          this.store.scrollTop = window.pageYOffset;
      },
      toggleMenu() {
          if (this.menuOpen) {
              this.menuOpen = false;
          }
          else {
              this.menuOpen = true;
          }
      },
      closeMenu() {
          console.log("close");
          this.menuOpen = false;
      }
    },
    unmounted() {
        $(window).off("scroll", this.onScroll);
    },
    components: { AppBar1Content }
}
</script>
<style lang="scss">
@import '~assets/css/design';

:root{
  --app-bar-1-height-val: 120px;
}

@include media(1920){
  :root{
    --app-bar-1-height-val: #{rwd-val(768px, 80px, 1920px, 117px)};
  }
}
@include media(768){
  :root{
    --app-bar-1-height-val: 80px;
  }
}

.layout-fluid-white{
}

.app-bar-1.app-bar-white{
  background: #fff!important;
  box-shadow: none!important;
  padding: 0 30px;
  height: var(--app-bar-1-height-val)!important;
  z-index: 5!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #E9E9E9;
  transition: height .3s, background .3s;

  .is-ready & {
    .app-bar-logo{
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.v-app-bar--is-scrolled{
    --app-bar-1-height-val: 84px;
  }

  &.app-bar-1_on-app-float-menu-open{
    background: none!important;
    border-bottom-width: 0!important;
  }

  .v-toolbar__content{
    margin: 0 auto;
    // margin-top: 76px;
    padding: 0;
    width: 100%;
    max-width: 1320px;
  }
}

.app-bar-white .app-bar-1-menu{
  display: flex;
  font-size: 14px;
  padding: 0;
  list-style-type: none;
  flex-grow: 1;
  margin-right: 40px;
  a{
    color: #252525;
    text-decoration: none;
    width: 100%;
    text-align: center;
    display: block;
    padding: 0 20px;
  }
  li{
    flex-grow: 1;
  }
}

</style>