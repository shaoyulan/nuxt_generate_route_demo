<template>
  <div 
    class="intro-block"
    :style="{
      '--intro-block-width': width || ''
    }"
  >
    <div class="intro-block__num">
      <slot name="num">{{num}}</slot>
    </div>
    <h3 class="intro-block__title">
      <slot name="title">{{title}}</slot>
    </h3>
    <div class="intro-block__des">
      <slot name="des">{{des}}</slot>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      width: String,

      num: String,
      title: String,
      des: String,
    },
    data: () => ({ 
      store: useGlobalStore(),
    }),
    mounted(){
      var that = this;
    },
    methods:{
     
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.intro-block{
  width: var(--intro-block-width);
  max-width: 100%;

  &__num{
    font-size: 24px;
    font-weight: 900;
    font-family: $ff-redHatDisplay;
    line-height: calc(30 / 24 * 1em);
    letter-spacing: 0.035em;
    color: #E7142D;
    margin-bottom: calc(16 / 24 * 1em);
  }
  &__title{
    font-size: 32px;
    line-height: calc(52 / 32 * 1em);
    letter-spacing: calc(2.5 / 32 * 1em);
    color: #252525;
    margin-bottom: 1em;
    font-family: $ff-noto;
    font-weight: normal;
  }
  &__des{
    line-height: calc(28 / 16 * 1em);
    letter-spacing: calc(1.2 / 16 * 1em);
    font-family: $ff-noto;
    color: #7C7C7C;
  }
}

</style>



