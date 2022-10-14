<template>
  <div 
  v-intersect="onIntersect"
  ref="refRoot" 
    class="split-showup-text"
    :class="{
      'split-showup-text_ready': ready
    }"
  >
    <slot />
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
  props:{
    h: String,
  },
  data: () => ({ 
    store: useGlobalStore(),
    ready: false,
    isVisible: false,
    isMounted: false,
    isAniFinished: false,
  }),
  props:{
    delay: {
      type: Number,
      default: 0,
    },
    // 自行控制顯示
    customShowControl:Boolean,
    customShow: Boolean
  },
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
    customShow(){
      if ( this.customShow ) {
        this.showText()
      } else {
        this.hideText()
      }
    }
  },
  mounted(){
    this.isMounted = true;

    if ( window.innerWidth <= this.$const.REDUCE_ANI_BREAKPOINTS ) {
      this.ready = true;
      return;
    }

    $(this.$refs.refRoot).find('.js').each((idx, el)=>{
      var text = $(el).text();
      var newTextHtml = text.trim().split('').map((str)=>{
        return `<span class="split-showup-text__text">
          <span class="split-showup-text__hider">
          ${str}
          </span>
          <span class="split-showup-text__shower">
          ${str}
          </span>
        </span>`
      }).join('')

      $(el).replaceWith(newTextHtml)
    });

    this.ready = true;
  },
  methods:{
    onIntersect(entries, observer){
      this.isVisible = entries[0].isIntersecting
    },
    checkAnimation(){
      if ( this.customShowControl ) return;
      if ( this.store.isAppLoaded && this.isVisible && this.isMounted ) {
        this.showText();
      }
    },
    showText(){
      var that = this;

      if ( this.isAniFinished && !this.customShowControl ) return;

      this.isAniFinished = true;

      setTimeout(()=>{
        anime({
          targets: $(this.$refs.refRoot).find('.split-showup-text__shower').toArray(),
          translateY: ['100%', '0%'],
          opacity: 1,
          delay: anime.stagger(20),
        })
      }, that.delay)
    },
    hideText(){
      var that = this;
      setTimeout(()=>{
        anime({
          targets: $(this.$refs.refRoot).find('.split-showup-text__shower').toArray(),
          translateY: ['0%', '100%'],
          opacity: 1,
          delay: anime.stagger(20),
        })
      }, that.delay)
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.split-showup-text{
  opacity: 0;

  &_ready{
    opacity: 1;
  }

  &__text{
    display: inline-flex;
    position: relative;
    overflow: hidden;
  }
  &__hider{
    opacity: 0;
  }
  &__shower{
    position: absolute;
    left: 0%;
    top: 0%;
    transform: translateY(100%);
  }
}

</style>



