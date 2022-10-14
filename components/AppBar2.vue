<template>
  <v-app-bar
    app
    ref="app-bar-2"
    :id="$nuxt.$route.path"
    class="app-bar-2"
    :class="[
      (isReady || !invertedScroll) ? 'is-ready': 'is-not',
    ]"
    :data-inverted-scroll="invertedScroll? true : null"
    :height="appBar2Height"
    :inverted-scroll="invertedScroll? true : false"
    :scroll-threshold="100"
    :data-ivt="invertedScroll"
    :style="invertedScroll ? `transform:translateY(-100%)`:'' "
  >
    <v-container class="app-bar-2-container">
      <NuxtLink to="/">
        <Logo class="menu-logo" :class="menuOpened ? 'is-hide' : ''" />
      </NuxtLink>
      <div class="menu-wrap">
        <ul>
          <li class="menu-spacer"></li>
          <li>
            <NuxtLink to="/about" :class="$nuxt.$route.path.indexOf('/about') > -1 ? 'is-active':''" >關於索爾斯</NuxtLink>
          </li>
          <li class="menu-spacer" ></li>
          <li>
            <NuxtLink to="/feature" :class="$nuxt.$route.path.indexOf('/feature') > -1 ? 'is-active':''">特色</NuxtLink>
          </li>
          <li class="menu-spacer"></li>
          <li>
            <NuxtLink 
              to="/service/design" 
              :class="$nuxt.$route.path.indexOf('/service') > -1 && $nuxt.$route.path.indexOf('/service/example') === -1 ? 'is-active':''"
            >
              服務項目
            </NuxtLink>
          </li>
          <li class="menu-spacer"></li>
          <li>
            <NuxtLink to="/fast-build-website" :class="$nuxt.$route.path.indexOf('/fast-build-website') > -1 ? 'is-active':''">全自動化架站</NuxtLink>
          </li>
          <li class="menu-spacer"></li>
          <li>
            <NuxtLink to="/service/example" :class="$nuxt.$route.path.indexOf('/service/example') > -1 ? 'is-active':''">客戶體驗案例</NuxtLink>
          </li>
          <li class="menu-spacer"></li>
          <li>
            <NuxtLink to="/news" :class="$nuxt.$route.path.indexOf('/news') > -1 ? 'is-active':''">分享新知識</NuxtLink>
          </li>
          <li class="menu-spacer"></li>
          <li>
            <NuxtLink to="/query" :class="$nuxt.$route.path.indexOf('/query') > -1 ? 'is-active':''">報價洽詢</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="hamburger hamburger-11"  @click="toggleMenu()" :class="menuOpened ? 'is-active' : ''">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
    props:{
      menuOpened: Boolean,
      invertedScroll: Boolean
    },
    data: () => ({ 
      isReady: false,
    }),
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
        this.$emit('toggleMenu')
      }
    },
    mounted(){
      const that = this;
      this.isReady = true;
      console.log('isReady', this.isReady)

      $(this.$refs['app-bar-2']).on('click', 'a', ()=>{
        that.$emit('closeMenu')
      })
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.is-app-flat-menu-open {
  .app-bar-2{
    background: none!important;
    box-shadow: none!important;
    pointer-events: none;
    .hamburger{
      pointer-events: all;
    }
  }
}

.app-bar-2{
  background: rgba(#000000, 0.8)!important;
  box-shadow: none;
  visibility: hidden;
  transition: 0!important;
  opacity: 0;

  &[data-inverted-scroll]{
    transform: translateY(-100%)!important;
    &.v-app-bar--is-scrolled{
      transform: translateY(0)!important;
    }
  }

  &.is-ready{
    visibility: visible;
    transition: .3s!important;
    opacity: 1;
  }

  .v-toolbar__content{
    height:  100%!important;
  }
  .container{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }
  .menu-logo{
    max-width: 48px;
    transition: .3s;
    opacity: 1;
    &.is-hide{
      opacity: 0;
    }
  }
  .menu-wrap{
    margin-left: auto;
    flex-grow: 1;
    color: #fff;
    margin-left: 38px;
    font-size: 20px;
    @include letter-spacing-center(0.085em);
    font-weight: 500;
    ul{
      padding:0;
      margin:0;
      display: flex;
      list-style-type: none;
    }
    .menu-spacer{
      flex-grow: 1;
      max-width: 68px;
      min-width: 0;
    }
    a{
      color: inherit;
      text-decoration: none;
      transition: .3s;
      &.is-active{
        color: #FFC806;
      }
      &:hover{
        color: #FFC806;
      }
    }
  }

  .hamburger{
    margin-left: auto;
    display: none;
  }

  @include media(1203.98){
    .hamburger{
      display: block;
    }
    .menu-wrap{
      display: none;
    }
  }

  @include media(1920){
    .menu{
      width: rwd-val(768px, 44px, 1920px, 48px);
    }
  }
  @include media(768){
    .menu{
      width: 44px;
    }
  }
  @include media(630){
    .menu-logo{
      max-width: 40px;
    }
  }
}


</style>



