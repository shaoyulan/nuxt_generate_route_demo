<template>
  <div 
    class="loading-view"
    v-show="!this.noLoading"
    :class="{
      'loading-view_loaded':loaded,
      'loading-view_get-set':getSet,
      'loading-view_logo-animation':logoAnimation,
    }"
  >
    <div class="loading-view__logo-wrap" >
      <img class="loading-view__logo" src="~/assets/img/logo/logo4.svg" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
    },
    data: () => ({ 
      store: useGlobalStore(),
      noLoading: false,
      getSet: false,
      loaded: false,
      logoAnimation: false,
    }),
    watch:{
      'store.isAppMounted': function(){
        var that = this;

        if ( !that.getSet ) {
          that.getSet = true;
        }

        if ( !that.logoAnimation ) {
          that.logoAnimation = true;
        }

        that.loaded = true
        setTimeout(()=>{
          // if ( that.store.isAppLoaded ) {
          // }
        }, 2000);

      },
      'store.isAppLoaded': function(){
        var that = this;
      }
    },
    mounted(){
      if ( this.store.isAppMounted ) {
        this.noLoading = true
      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.loading-view{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(68.54deg, #0F0E10 39.73%, #2E1010 100%);
  z-index: 9999;
  transition: all .6s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  clip-path: inset(0% 0% 0% 0%);
  
  @keyframes loadingAnimation {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  #loading-view-mask{
    // content: '';
    // @include absolute(0,0,0,0);
    // background: url('~assets/img/general/float-menu-mask.svg');
    // background-size: cover;
    // z-index: 0;
    // opacity: 0;
  }

  &_loaded{
    transition-delay: 2s;
    clip-path: inset(0% 0% 100% 0%);
  }

  &__logo-wrap{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    max-width: 44.2vw;
    img{
      max-width: 100%;
    }
  }

  &__logo{
    opacity: 0;
  }

  &_get-set{
    // transition: all .6s cubic-bezier(0.86, 0, 0.07, 1);
    #loading-view-mask{
      // transition: .3s ease;
      // opacity: 1!important;
    }
  }

  &_logo-animation{
    .loading-view__logo{
      animation: loadingAnimation 2s ease-in-out both;
    }
  }
}

</style>



