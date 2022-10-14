<template>
    <div 
      class="base-spacer" 
      :style="{
        '--base-spacer-height': thisRwdVal
      }"
    >
    </div>
</template>

<script>
export default {
  props:{
    h: String,
    rwdVal: [Array],
  },
  data: () => ({ 
    windowInnerWidth: 0,
  }),
  watch:{
  },
  computed:{
    thisRwdVal(){
      var innerWidth = this.windowInnerWidth;
      if ( process.client ) {
        if ( Array.isArray(this.rwdVal) && this.rwdVal.length === 4 ) {
          return `${this.$mix.appRwdVal(this.rwdVal[0], this.rwdVal[1], this.rwdVal[2], this.rwdVal[3])}px`;
        } else {
          return this.h
        }
      }
    }
  },
  methods:{
    onWindowResize(){
      this.windowInnerWidth = window.innerWidth;
    }
  },
  mounted(){
    window.addEventListener('resize', this.onWindowResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onWindowResize)
  },
}
</script>

<style lang="scss">
@import "~assets/css/design";

.base-spacer{
  height: var(--base-spacer-height);
}

</style>



