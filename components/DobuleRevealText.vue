<template>
  <div 
    ref="refRoot" 
    v-intersect="onIntersect"
    class="dobule-reveal-text"
    :style="{
      '--dobule-reveal-text-color': dobuleRevealColor || ''
    }"
    :class="{
      'dobule-reveal-text_ready': ready
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

    dobuleRevealColor: ''
  }),
  props:{
    delay: {
      type: Number,
      default: 0,
    },
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
        return `<span class="dobule-reveal-text__text">
          <span class="dobule-reveal-text__hider">
          ${str}
          </span>
          <span class="dobule-reveal-text__shower">
            <span class="dobule-reveal-text__text">
              <span class="dobule-reveal-text__hider">
              ${str}
              </span>
              <span class="dobule-reveal-text__shower">
              ${str}
              </span>
            </span>
          </span>
        </span>`
      }).join('')

      $(el).replaceWith(newTextHtml)
    });

    this.dobuleRevealColor = getComputedStyle(this.$refs.refRoot).color;

    this.ready = true;
  },
  methods:{
    onIntersect(entries, observer){
      if ( window.innerWidth <= this.$const.REDUCE_ANI_BREAKPOINTS ) {
        return;
      }
      this.isVisible = entries[0].isIntersecting
    },
    checkAnimation(){
      if ( window.innerWidth <= this.$const.REDUCE_ANI_BREAKPOINTS ) {
        return;
      }

      if ( this.store.isAppLoaded && this.isVisible && this.isMounted ) {
        this.showText();
      }
    },
    showText(){
      var that = this;

      if ( this.isAniFinished ) return;

      this.isAniFinished = true;

      setTimeout(()=>{
        anime({
          targets: $(this.$refs.refRoot).find('> .dobule-reveal-text__text > .dobule-reveal-text__shower').toArray(),
          translateX: ['100%', '0%'],
          opacity: 1,
          // easing: 'easeOutExpo',
          // duration: 300,
          delay: anime.stagger(10),
          complete(){
            anime({
              targets: $(that.$refs.refRoot).find('> .dobule-reveal-text__text > .dobule-reveal-text__shower .dobule-reveal-text__hider').toArray(),
              translateX: ['0%', '-110%'],
              opacity: 1,
              delay: anime.stagger(10),
            })
            anime({
              targets: $(that.$refs.refRoot).find('> .dobule-reveal-text__text > .dobule-reveal-text__shower .dobule-reveal-text__shower').toArray(),
              translateX: ['100%', '0%'],
              opacity: 1,
              delay: anime.stagger(10),
            })
          }
        })
      }, that.delay);
    },
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.dobule-reveal-text{
  opacity: 0;

  &_ready{
    opacity: 1;
    .dobule-reveal-text__text{
      opacity: 1;
    }
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
    transform: translateX(100%);
    .dobule-reveal-text__hider{
      opacity: 1;
      color: transparent;
      -webkit-text-stroke: 1px var(--dobule-reveal-text-color);
    }
    // .dobule-reveal-text__shower{
    //   transform: translateX(-100%);
    // }
  }
}

</style>



