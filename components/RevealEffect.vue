<template>
  <div 
    ref="refRoot" 
    v-intersect="onIntersect"
    class="reveal-effect"
    :class="{
      'reveal-effect_ready':isReady,
      'reveal-effect_show':isShow,
    }"
  >
    <div class="reveal-effect__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
  props:{
    delay:{
      type: Number
    },
  },
  data: () => ({ 
    store: useGlobalStore(),

    isVisible: false,
    isMounted: false,
    
    isReady: false,
    isShow: false,
  }),
  watch:{
    'store.isAppLoaded': function(){
      this.checkAnimation()
    },
    isMounted(){
      this.checkAnimation()
    },
    isVisible(){
      this.checkAnimation()
    },
  },
  mounted(){
    this.isMounted = true;

    if ( window.innerWidth <= this.$const.REDUCE_ANI_BREAKPOINTS ) {
      this.isReady = true;
      return;
    }

    var refRoot = $(this.$refs['refRoot']);
    var child = $(this.$refs['refRoot'].firstChild);
    var childW = child.outerWidth();
    var childH = child.outerHeight();

    child.css({
      height: childH,
      'min-width': childW
    });

    refRoot.css({
    });

    this.isReady = true;

  },
  methods:{
    onIntersect(entries, observer){
      this.isVisible = entries[0].isIntersecting
    },
    checkAnimation(){

      if ( window.innerWidth <= this.$const.REDUCE_ANI_BREAKPOINTS ) {
        return;
      }

      if ( this.store.isAppLoaded && this.isVisible && this.isMounted ) {
        setTimeout(()=>{
          this.isShow = true;
        }, this.delay)
      }
    },
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.reveal-effect{
  background: #fff;
  transition: width 1s cubic-bezier(0.86, 0, 0.07, 1);
  overflow: hidden;
  opacity: 0;

  &_ready{
    width: 0;
    opacity: 1;
  }

  &_show{
    width: 100%;
  }
}

</style>



