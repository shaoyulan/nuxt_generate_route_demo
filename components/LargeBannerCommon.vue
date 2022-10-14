<template>
  <div 
    ref="refRoot"
    class="large-banner-common"
    :class="[
      defaultStyle ? 'large-banner-common_default' : '',
      mobileFull ? 'large-banner-common_mobile-full' : '',
      mobileDefault ? 'large-banner-common_mobile-default' : '',
      vCenter ? 'sty-v-center' : '',
      $slots['after-common-sub'] ? '' : 'sty-no-after-common-sub',
      scrollSink ? 'large-banner-common_scroll-sink' : '',
      scrollSinked ? 'large-banner-common_hide' : ''
    ]"
  >
    <div class="large-banner-common__inner">
      <img 
        v-if="imgTag"
        :src="imgSrc" 
        alt="" 
        srcset=""
        :style="{
          'min-height': `${minH}px`,
        }"
      >
      <v-img 
        v-if="!imgTag"
        :src="imgSrc"
        :aspect-ratio="aspectRatio"
        :style="{
          'min-height': `${minH}px`,
        }"
      >
      </v-img>
      <!-- <div class="larg-banner-common-overlay"></div> -->
      <div 
        class="larg-banner-common__hider"
        :style="{
          'background': `rgba(0, 0, 0, ${overlayHiderOpacity})`
        }"
      ></div>
      <div class="large-banner-common-content">
        <div class="content-inner" >
          <slot name="after-common-sub" v-bind:opacity="scrollSenseValue">
            <template v-if="mobileDefault">
              <h2 class="large-banner-common__desup">
                <SplitShowupText :delay="0">
                  <span class="js">
                    {{ desUp }}
                  </span>
                </SplitShowupText>
              </h2>
              <h1 class="large-banner-common__desdown">
                <SplitShowupText :delay="600">
                  <span class="js">
                    {{ desDown }}
                  </span>
                </SplitShowupText>
              </h1>
              <ScrollDownHint2 :aniDelay="1200" h="40px"/>
            </template>
          </slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    defaultStyle: Boolean,
    mobileFull: Boolean,
    mobileDefault: Boolean,
    imgSrc: String,
    desUp: String,
    desDown: String,
    aspectRatio: Number,
    vCenter: Boolean,
    scrollSink: Boolean,
    minH: [Number, String],

    imgTag: Boolean,
  },
  data: () => ({ 
    selfHeight: 0,
    scrollTop: 0,
  }),
  computed:{
    scrollSenseValue(){
      var left = this.selfHeight - this.scrollTop
      left = left < 0 ? 0 : left;
      var result = left / this.selfHeight;

      return result;
    },
    scrollSenseValueFaster(){
      if ( this.scrollSenseValue == 1){
        return 1
      } else {
        return this.scrollSenseValue * 0.8
      }
    },
    overlayHiderOpacity(){
      var start = 0.12;
      var end = 1;
      var length = end - start;
      var result = 0;
      var scrollSenseValue = this.scrollSenseValueFaster || 1;

      result = start + ( length * (1 - scrollSenseValue) );

      if ( result > 1) result = 1;

      return result;
    },  
    scrollSinked(){
      return this.scrollTop > this.selfHeight
    }
  },
  mounted(){
    var height = this.$refs.refRoot.clientHeight;
    this.selfHeight = height;
    
    if ( window.innerWidth <= this.$const.REDUCE_ANI_BREAKPOINTS ) {
      return;
    }
    
    $(window).on('scroll', this.onScroll);
  },
  unmounted() {
    $(window).off('scroll', this.onScroll);
  },
  methods:{
    onScroll(){
      this.scrollTop = window.pageYOffset;
    }
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.large-banner-common-fixed-effect-wrap{
  .large-banner-common:not(.large-banner-common-fixed){
    pointer-events: none;
  }
  .large-banner-common-fixed{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    z-index: 1;
  }
  @include media($breakpoints-design-tablet-down){
    .large-banner-common:not(.large-banner-common-fixed){
      display: none;
    }
    .large-banner-common-fixed{
      position: relative;
    }
  }
}

.large-banner-common{
  position: relative;
  overflow: hidden;
  &__desup{
    font-weight: 900;
    font-size: 64px;
    line-height: calc(75.14 / 64 * 1em);
    letter-spacing: calc(9 / 64 * 1em);
    color: #fff;
    font-family: $ff-raleway;
    text-transform: uppercase;
  }

  &__desdown{
    font-size: 36px;
    line-height: calc(54 / 36 * 1em);
    letter-spacing: calc(4 / 36 * 1em);
    color: #fff;
    margin-bottom: 40px;
  }

  &.sty-v-center{
    .large-banner-common-content{
      .content-inner{
        margin-bottom: 0;
      }
    }
  }

  &.sty-no-after-common-sub{
    .large-banner-common-sub{
      margin-bottom: 0;
    }
  }

  .banner-content-container{
    width: 1190px;
    max-width: calc( 588 / 768 * 100%);
    margin: 0 auto;
    position: relative;
    margin-bottom: 3vw;
  }

  .v-image{
    // height: 100vh;
    max-height: 100vh;
  }

  .large-banner-common-content{
    @include absolute(0,0,0,0);
    padding: 15px 0;
    padding-top: calc(var(--app-bar-1-height-initial-val));
    padding-bottom: calc(var(--app-bar-1-height-initial-val));
    @include flex(center, center);
    flex-direction: column;
    z-index: 2;
    .content-inner{
      text-align: center;
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .larg-banner-common-overlay{
    @include absolute(0,0,0,0);
    background: rgba(0, 0, 0, 0.12);
    z-index: 1;
  }

  .larg-banner-common__hider{
    @include absolute(0,0,0,0);
    background: rgba(0, 0, 0, 0.12);
    z-index: 1;
    transition: 0.1s ease;
  }

  .large-banner-common-sub{
    font-size: 25px;
    line-height: calc(29 / 25 * 1em);
    @include letter-spacing-center(100px);
    font-weight: 500;
    color: #fff;
  }
  .large-banner-common-sup{
    margin-bottom: 40px;
    max-width: 35.572vw;
  }
  .large-banner-common-sub{
    margin-bottom: 60px;
  }
  .large-banner-common-btn{
    font-size: calc(20 / 16 * 1rem);
    background: rgba(0, 0, 0, 0.51);
    border-radius: calc(32 / 20 * 1em);
    line-height: calc(24 / 20 * 1em);
    min-width: 214px;
    height: 64px;
    @include flex(center, center);
    color: #fff;
    @include btn--growing-bg;
    display: inline-flex;
  }

  // style
  &_hide{
    opacity: 0;
  }

  &_mobile-default{

  }

  &_scroll-sink{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  &_mobile-default{
    .content-inner{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .large-banner-common-content{
      padding-bottom: 48px;
    }
    .v-image{
      height: auto;
      transform: scale(1.3);
    }
    @include media(1920){
      .large-banner-common-content{
        padding-bottom: rwd-val(768px, 28px, 1920px, 48px);
      }
      .large-banner-common__desdown{
        font-size: rwd-val(768px, 24px, 1920px, 36px);
      }
    }
    @include media($breakpoints-design-tablet){
      .large-banner-common-content{
        padding-bottom: rwd-val(375px, 16px, 768px, 28px);
      }
      .large-banner-common__desdown{
        font-size: rwd-val(768px, 18px, 1920px, 24px);
        margin-bottom: rwd-val(375px, 24px, 768px, 40px);
      }
    }
    @include media($breakpoints-design-mobile){
      .large-banner-common-content{
        padding-bottom: 16px;
      }
      .large-banner-common__desdown{
        font-size: 18px;
        margin-bottom: 24px;
      }
    }
  }
  
  &_mobile-full{
    @include media(1920){
      // .large-banner-common-content{
      //   .content-inner{
      //     margin-top: rwd-val(768px, -60px, 1920px, 0px);
      //   }
      // }
    }

    @include media(768){
      .large-banner-common__inner{
        > .v-image{
          min-height: 100vh!important;
        }
      }
      
      .large-banner-common-content{
        padding-bottom: 0;
      }
    }
  }
  // style /

  @include media(1920){
    .large-banner-common-sup{
      margin-bottom: rwd-val(768px, 0, 1920px, 40px);
    }
    .large-banner-common-sub{
      font-size: rwd-val(768px, 22px, 1920px, 25px);
      @include letter-spacing-center(rwd-val(768px, 20px, 1920px, 100px));
    }

    .large-banner-common__desdown{
      font-size: rwd-val(768px, 24px, 1920px, 36px);;
    }

    .large-banner-common-btn{
      height:  rwd-val(768px, 54px, 1920px, 64px);
    }
  }
  
  @include media(768){
    .banner-content{
      margin-bottom: rwd-val(375px, 32px, 768px, 60px);
    }
    
    .large-banner-common-sup{
      max-width: 80%;
      width: 400px;
      margin-bottom: 0;
    }
    .large-banner-common-sub{
      font-size: 20px;
      @include letter-spacing-center(20px);
    }

    .large-banner-common__desup{
      font-size: rwd-val(375px, 36px, 768px, 64px);
    }
    .large-banner-common__desdown{
      font-size: rwd-val(375px, 18px, 768px, 24px);
    }

    .large-banner-common-btn{
      height:  54px;
    }
  }

  @include media(375){
    .banner-content{
      margin-bottom: 32px;
    }

    .large-banner-common__desup{
      font-size: 36px;
    }
    .large-banner-common__desdown{
      font-size: 18px;
    }
  }

}

</style>



