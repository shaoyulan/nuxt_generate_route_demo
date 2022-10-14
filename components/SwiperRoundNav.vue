<template>
  <div 
    ref="refRoot" 
    class="swiper-round-nav"
    @click="action"
    :class="{
      'swiper-round-nav_left': left,
      'swiper-round-nav_right': right,
      'swiper-round-nav_svg-border-hide': !svgBorderShow
    }"
    :style="{
    }"
  >
    <div class="swiper-round-nav__inner">
      <i class="icon-chevron-left" v-if="left"></i>
      <i class="icon-chevron-right" v-if="right"></i>
    </div>
    <svg viewBox="0 0 60 60">
      <circle 
        cx="30" 
        cy="30" 
        r="29" 
        fill="transparent" 
        stroke="#E7142D" 
        :style="{'opacity': circleOpacity}"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="dashoffset"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
    props:{
      left: Boolean,
      right: Boolean,
      borderAnimation: Boolean,
      borderAnimationSeconds: Number,
      borderAnimationDuration: {
        type: String,
        default: '5s'
      }
    },
    data: () => ({ 
      init: false,
      borderAnimationInterval: '',
      totalLength: 0,
      dasharray: 0,
      dashoffset: 0,
      circleOpacity: 0,
      svgBorderShow: true,
    }),
    methods: {
      action(){
        this.$emit('action');
        if ( this.borderAnimation ) {
          this.restartBorderAnimation()
        }
      },  
      initBorderAnimation(){
        var that = this;

        this.init = true;

        if ( this.borderAnimationSeconds ){

          function ani(){
            that.borderAnimationInterval = anime({
              targets: that,
              dashoffset: 0,
              easing: 'linear',
              round: 1,
              duration: 5000,
              update: function() {
              },
              complete: function(anim) {
                that.$emit('timeup')
                that.dashoffset = that.totalLength;
                that.borderAnimationInterval.restart();
              }
            });
          };
          ani()
        }
      },
      restartBorderAnimation(){
        var that = this;
        that.dashoffset = that.totalLength;
        that.borderAnimationInterval.restart();
        that.svgBorderShow = true;
      },
      stopBorderAnimation(){
        var that = this;
        if ( that.borderAnimationInterval ) {
          that.borderAnimationInterval.pause();
        }
      }
    },
    watch:{
      borderAnimation(){
        var that = this;
        if ( !this.borderAnimation ) {
          this.stopBorderAnimation();
          that.svgBorderShow = false;
        } else {
          that.svgBorderShow = true;
          if ( !this.init ) {
            this.initBorderAnimation()
          }
        }
      }
    },
    mounted(){
      var that = this;
      var refRoot = this.$refs.refRoot;
      var svg = refRoot.querySelector('svg');
      var circle = svg.querySelector('circle');
      var totalLength = circle.getTotalLength();
      this.totalLength = totalLength;
      this.dasharray = totalLength;
      this.dashoffset = totalLength;
      this.circleOpacity = 1;

    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.swiper-round-nav{
  --swiper-round-nav-size: 60px;
  --swiper-round-nav-dasharray: 181;
  --swiper-round-nav-border-animation-duration: 181;
  display: inline-block;
  width: var(--swiper-round-nav-size);
  height: var(--swiper-round-nav-size);
  position: relative;
  cursor: pointer;

  @keyframes swiper-round-nav__border-grow{
    from{
      stroke-dashoffset: var(--swiper-round-nav-dasharray);
    }
    to{
      stroke-dashoffset: 0;
    }
  }

  @keyframes swiper-round-nav__hover-icon-right{
    0%{transform:translate(0,0);opacity:1}
    60%{transform:translate(10px,0);opacity:0}
    70%{transform:translate(-10px,0);opacity:0}
    to{transform:translate(0,0);opacity:1}
  }

  @keyframes swiper-round-nav__hover-icon-left{
    0%{transform:translate(0,0);opacity:1}
    60%{transform:translate(-10px,0);opacity:0}
    70%{transform:translate(10px,0);opacity:0}
    to{transform:translate(0,0);opacity:1}
  }

  &_left{
    &:hover{
      .swiper-round-nav__inner{
        background: #fff;
      }
      i {
        animation: swiper-round-nav__hover-icon-left .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
      }
    }
  }

  &_right{
    &:hover{
      .swiper-round-nav__inner{
        background: #fff;
      }
      i {
        animation: swiper-round-nav__hover-icon-right .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
      }
    }
  }

  &_run-border-ani{
    circle{
      animation-name: swiper-round-nav__border-grow;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  &_svg-border-hide{
    svg{
      opacity: 0;
    }
  }

  &__inner{
    width: 100%;
    height: 100%;
    @include flex(center,center);
    border: 1px solid #D3D3D3;
    border-radius: 50%;
    transition: .3s;
  }

  i {
    font-size: 28px;
    color: #505050;
  }

  svg{
    @include absolute(0,0,0,0);
    stroke-width: 2px;
    transition: .3s;
  }

  @include media($breakpoints-design-tablet){
    --swiper-round-nav-size: #{rwd-val(375px, 40px, 768px, 60px)};
  }
  @include media($breakpoints-design-mobile){
    --swiper-round-nav-size: 40px;
  }
}

</style>



