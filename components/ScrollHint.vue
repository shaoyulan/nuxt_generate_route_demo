<template>
  <div class="scroll-hint">
    <div class="scroll-hint__scrollbar"></div>
    <div class="scroll-hint__scrolltext">SCROLL</div>
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

.scroll-hint{
  display: inline-block;
  &__scrollbar{
    width: 1px;
    margin: 0 auto;
    background: #fff;
    position: relative;
    margin-bottom: 8px;
    height: 40px;
    margin-top: 6px;

    &:before{
      content:'';
      display: block;
      background: #fff;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateX(-0.5px);
      bottom: 100%;
    }
  }

  &__scrolltext{
    font-weight: 600;
    font-size: 12px;
    line-height: calc(15.88 / 12 * 1em);
    letter-spacing: 0.12em;
    font-family: $ff-redHatDisplay;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }
}

</style>



