<template>
  <h3 class="section-underline-title">
    <slot>
      {{title}}
    </slot>
  </h3>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      title: String,
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

.section-underline-title{
  font-size: 36px;
  font-weight: 500;
  color:#252525;
  line-height: calc(52 / 36);
  letter-spacing: calc(2.5 / 36 * 1em);
  position: relative;
  display: inline-block;
  padding-bottom: 20px;
  &:before{
    content:'';
    display: block;
    position: absolute;
    bottom: 0;
    height: calc(8 / 36 * 1em);
    background: #E7142D;
    left: 0;
    right: 0;
  }
}

</style>



