<template>
  <div class="main-title2">
    <slot />
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

.main-title2{
  font-size: 36px;
  line-height: calc(52 / 36);
  letter-spacing: 2.5px;
  text-indent: 2.5px;
  font-weight: 500;
  font-family: $ff-noto;
}

</style>



