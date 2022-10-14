<template>
  <div 
    ref="refRoot" 
    class="app-round-float-btn app-overflow-m-monit"
    :class="{
      'app-round-float-btn_show':store.scrollTop > 200 && !store.isFooterInersecting
    }"
  >
    <div class="app-round-float-btn__text">
      聯絡我們
    </div>
    <i class="icon-vector app-round-float-btn__icon"></i>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
    },
    data: () => ({ 
      store: useGlobalStore(),
    }),
    mounted(){
      var that = this;
    },
    methods:{
      onScroll(){

      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.app-round-float-btn{
  position: fixed;
  right: 40px;
  bottom: 40px;
  background: #fff;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  border:1px solid #E7142D;
  padding: 5px 16px;
  color: #E7142D;
  z-index: 5;
  line-height: calc(21 / 16 * 1em);
  transition: height .5s ease, opacity .1s linear;
  cursor: pointer;
  opacity: 0;

  &_show{
    opacity: 1;
  }

  &:hover{
    height: 176px;
    .app-round-float-btn__icon{
      bottom: 30px;
    }
    .app-round-float-btn__text{
      opacity: 1;
      height: 84px; 
      transition: height .5s linear, opacity .3s linear .2s;
    }
  }

  &__icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    bottom: 13px;
    transition: .3s ease;
  }

  &__text{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 28px;
    transition: height .3s linear, opacity .1s linear;
    opacity: 0;
    height: 0; 
    text-align: center;
  }
}

</style>



