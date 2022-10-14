<template>
  <div ref="refRoot" class="scroll-active-img">
    <div 
      class="scroll-active-img__viewer"
      :style="`background-image: url('${src}')`"
    >
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      src: String,
    },
    data: () => ({ 
      store: useGlobalStore(),
      runner: {},
      viewer: '',
    }),
    watch:{
      'store.scrollTop': function(){
        console.log('scrolltop')
        this.getImgScrollTranslateValue()
      }
    },
    mounted(){
      var that = this;
      var refRoot = this.$refs.refRoot;

      console.log('refRoot', this.store)
      this.viewer = refRoot.querySelector('.scroll-active-img__viewer');
      this.runner = this.easingValue()
    },
    methods:{
      easingValue(){
        var scroller = {
            ease: 0.05, // <= scroll speed
            y: 0,
            scrollRequest: 0,
          };
        var callback = function(){}
        var requestId = null;
        var targetValue = 0;

        function updateScroller() {

          scroller.y += (targetValue - scroller.y) * scroller.ease;

          if (Math.abs(targetValue - scroller.y) < 0.05) {
            scroller.y = targetValue;
            scroller.scrollRequest = 0;
          }

          callback(scroller.y)

          requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
        }

        function callUpdate(value, func) {
          callback = func
          targetValue = value
          scroller.scrollRequest++;
          if (!requestId) {
            requestId = requestAnimationFrame(updateScroller);
          }
        }

        return {
          callUpdate
        }
      },
      getImgScrollTranslateValue(){
        var refRoot = this.$refs.refRoot;
        var viewer = this.viewer

        if (process.client) {
          var relativeViewCenter = window.innerHeight / 2;
          var element = refRoot;
          var elementRect = element.getBoundingClientRect();
          var elementCenterr = elementRect.top + elementRect.height / 2;
          var diff = elementCenterr - relativeViewCenter;

          // parallax
          diff = diff * 0.1;

          this.runner.callUpdate(diff, (newVal)=>{
            anime.set(viewer, {
              translateY: -newVal,
            })
          });

        }
      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.scroll-active-img{
  position: relative;
  overflow: hidden;
  &__viewer{
    background-size:cover;
    background-position: center;
    @include absolute(-40px,0,-40px,0);
  }
}

</style>



