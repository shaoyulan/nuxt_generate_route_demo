<template>
  <div 
    class="scroll-down-hint2"
    :class="{
      'scroll-down-hint2_ani-start': isAniStart,
      'scroll-down-hint2_no-dot': noDot,
    }" 
    :style="{
      '--scroll-down-hint2-h': h
    }"
    v-intersect="onIntersect"
  >
    <div class="scroll-down-hint2__bar">
      <div class="scroll-down-hint2__barline"></div>
    </div>
    <div class="scroll-down-hint2__text">
      Scroll
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      noDot: Boolean,
      h: String,
      aniDelay:{
        type: Number,
        default: 0
      }
    },
    data: () => ({ 
      store: useGlobalStore(),
      isVisible: false,
      isMounted: false,
      isAniStart: false,
    }),
    watch:{
      isMounted(){
        this.checkAnimation()
      },
      isVisible(){
        this.checkAnimation()
      },
      'store.isAppLoaded': function(){
        this.checkAnimation()
      }
    },
    mounted(){
      this.isMounted = true;
    },
    methods:{
      onIntersect(entries, observer){
        this.isVisible = entries[0].isIntersecting
      },
      checkAnimation(){
        if ( this.store.isAppLoaded && this.isVisible && this.isMounted ) {
          setTimeout(()=>{
            this.isAniStart = true
          }, this.aniDelay)
        }
      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.scroll-down-hint2{
  --scroll-down-hint2-h: 67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: .3s;
  padding-top: 6px;

  &__bar{
    height: var(--scroll-down-hint2-h);
    margin-bottom: 16px;
    width: 2px;
    position: relative;
    &:after{
      content:'';
      display: block;
      background: #fff;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 100%;
    }
  }

  &__barline{
    position: relative;
    overflow: hidden;
    background: #fff;
    height: 0%;
    transition: 1s ease;
    transition-delay: .3s;
    &:before{
      content:'';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background:#E7142D;
      animation: scroll-down-hint-ani 2s cubic-bezier(.16,.5,.43,1) 0s infinite;
    }
  }

  &_no-dot{
    .scroll-down-hint2__bar{
      &:after{
        display: none;
      }
    }
  }

  @keyframes scroll-down-hint-ani{
    0%{
      transform:translate3d(0,-110%,0)
    }
    to{
      transform:translate3d(0,110%,0)
    }
  }

  &__text{
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    font-family: $ff-raleway;
    line-height: calc(14 / 12 * 1em);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0;
    transition: .6s;
    transition-delay: 1s;
  }

  &_ani-start{
    opacity: 1;
    .scroll-down-hint2__barline{
      height:100%; 
    }
    .scroll-down-hint2__text{
      opacity: 1;
    }
  }

}

</style>



